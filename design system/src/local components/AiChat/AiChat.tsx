import React, { useState, useRef, useLayoutEffect } from 'react';
import styled, { keyframes, useTheme } from 'styled-components';
import { space, radii, spacing, sizes, shadows, fontFamilies, fontSizes, fontWeights } from '@src/themes';
import { Icon } from '@src/components/Icon';
import { IconName } from '@src/components/Icon/types';

/* ============================================================================
 * AiChat — the floating AI assistant: a gradient FAB that expands on hover into
 * a panel of suggested prompts + a (beam-animated) ask-anything input. Holds its
 * own open/message state. Colors resolve through the active theme.
 *
 * Also exports AiGradientIcon — the sparkle glyph reused elsewhere (e.g. the
 * "add section" bar).
 * ==========================================================================*/

/* ----------------------------- gradient icon ---------------------------- */

export function AiGradientIcon() {
  const theme = useTheme();
  return (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ai-fab-icon-grad" x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={theme.colors.neutral.text.static} />
          <stop offset="100%" stopColor={theme.colors.primary.background.strong} />
        </linearGradient>
      </defs>
      <path
        fill="url(#ai-fab-icon-grad)"
        d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"
      />
    </svg>
  );
}

/* -------------------------------- styles -------------------------------- */

const Wrap = styled.div`
  position: fixed;
  bottom: ${spacing.md};
  right: ${spacing.md};
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: ${radii.lg};
  transition: filter 0.2s ease;
  &:hover {
    filter: drop-shadow(0 8px 32px rgba(0, 0, 0, 0.48));
  }
`;

const Panel = styled.div<{ $open: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${space['6px']};
  width: ${space['320px']};
  max-height: ${(p) => (p.$open ? space['384px'] : '0')};
  overflow: hidden;
  opacity: ${(p) => (p.$open ? 1 : 0)};
  pointer-events: ${(p) => (p.$open ? 'all' : 'none')};
  transition: max-height 0.25s ease, opacity 0.2s ease;
`;

const Chip = styled.button`
  display: flex;
  align-items: center;
  height: ${sizes.sm};
  padding: 0 ${spacing.xs};
  background: ${({ theme }) => theme.colors.neutral.background.default};
  border: 1px solid ${({ theme }) => theme.colors.neutral.background.transparent.weak};
  border-radius: ${radii.md};
  font-family: ${fontFamilies.body};
  font-size: ${fontSizes.s};
  font-weight: ${fontWeights.regular};
  color: ${({ theme }) => theme.colors.neutral.text.weak};
  cursor: pointer;
  white-space: nowrap;
  box-shadow: ${shadows.xl};
  transition: border-color 0.15s ease, color 0.15s ease;
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.background.strong};
    color: ${({ theme }) => theme.colors.neutral.text.default};
  }
`;

const beamSpin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const InputBorder = styled.div`
  position: relative;
  align-self: stretch;
  border-radius: ${radii.md};
  box-shadow: ${shadows.xl};
  margin-top: ${spacing.xs};
`;

const AnimRing = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  border-radius: ${radii.md};
  padding: 1px;
  overflow: hidden;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  &::before {
    content: '';
    position: absolute;
    inset: -150%;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      ${({ theme }) => theme.colors.primary.background.strong} 50deg,
      transparent 90deg,
      transparent 360deg
    );
    animation: ${beamSpin} 6s linear infinite;
  }
  &::after {
    content: '';
    position: absolute;
    inset: -150%;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      ${({ theme }) => theme.colors.transparent.white['72%']} 50deg,
      transparent 90deg,
      transparent 360deg
    );
    animation: ${beamSpin} 6s linear infinite;
    animation-delay: -3s;
  }
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${space['4px']};
  padding: ${space['4px']};
  background: ${({ theme }) => theme.colors.neutral.background.default};
  border: 1px solid ${({ theme }) => theme.colors.neutral.background.transparent.weaker};
  border-radius: ${radii.md};
`;

const IconBtn = styled.button`
  flex: none;
  width: ${sizes.md};
  height: ${sizes.md};
  padding: 0;
  border: none;
  background: transparent;
  border-radius: ${radii.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg path {
    fill: ${({ theme }) => theme.colors.neutral.text.weaker};
  }
  &:hover {
    background: ${({ theme }) => theme.colors.neutral.background.transparent.weaker};
    svg path {
      fill: ${({ theme }) => theme.colors.neutral.text.weak};
    }
  }
`;

const InputEl = styled.input`
  flex: 1;
  min-width: 0;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${fontFamilies.body};
  font-size: ${fontSizes.s};
  color: ${({ theme }) => theme.colors.neutral.text.default};
  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.text.weakest};
  }
`;

const SendBtn = styled.button`
  flex: none;
  width: ${sizes.md};
  height: ${sizes.md};
  padding: 0;
  border: none;
  border-radius: ${radii.sm};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary.background.strong} 0%,
    ${({ theme }) => theme.colors.primary.background.stronger} 100%
  );
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  svg path {
    fill: ${({ theme }) => theme.colors.neutral.text.static};
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const Fab = styled.button<{ $open?: boolean }>`
  width: ${space['48px']};
  height: ${(p) => (p.$open ? '0' : space['48px'])};
  border-radius: ${radii.xl} ${radii.xl} ${radii.sm} ${radii.xl};
  border: none;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.neutral.background.baseInverted} 0%,
    ${({ theme }) => theme.colors.primary.background.strong} 55%,
    ${({ theme }) => theme.colors.neutral.background.base} 100%
  );
  padding: ${space['4px']};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  opacity: ${(p) => (p.$open ? 0 : 1)};
  pointer-events: ${(p) => (p.$open ? 'none' : 'all')};
  box-shadow: 0 -10px 28px 0 ${({ theme }) => theme.colors.primary.background.transparent.default},
    0 4px 16px 0 rgba(0, 0, 0, 0.36);
  transition: opacity 0.15s ease, height 0.2s ease, box-shadow 0.18s ease-in-out;
  &:hover {
    box-shadow: 0 -14px 36px 0 ${({ theme }) => theme.colors.primary.background.transparent.default},
      0 6px 20px 0 rgba(0, 0, 0, 0.44);
  }
`;

const FabMiddle = styled.span<{ $open?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: ${({ theme }) => theme.colors.neutral.background.base};
  border: 1.5px solid
    ${({ theme, $open }) =>
      $open ? theme.colors.neutral.background.base : theme.colors.neutral.background.transparent.backdrop};
  position: relative;
  overflow: hidden;
  transition: border-color 0.15s ease;
  > svg {
    position: relative;
    z-index: 1;
  }
`;

/* ------------------------------- component ------------------------------ */

export interface AiChatProps {
  /** suggested prompt chips shown when the panel is open */
  prompts?: string[];
  /** input placeholder */
  placeholder?: string;
  /** when provided, the send button enables for non-empty input and calls this */
  onSend?: (message: string) => void;
  /** called when a prompt chip is clicked (the prompt also fills the input) */
  onPromptClick?: (prompt: string) => void;
}

export const AiChat: React.FC<AiChatProps> = ({
  prompts = [],
  placeholder = 'Ask anything',
  onSend,
  onPromptClick,
}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const canSend = !!onSend && message.trim().length > 0;
  const handleSend = () => {
    if (!canSend) return;
    onSend!(message.trim());
    setMessage('');
  };
  const handlePrompt = (p: string) => {
    setMessage(p);
    inputRef.current?.focus();
    onPromptClick?.(p);
  };

  return (
    <Wrap onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Panel $open={open}>
        {prompts.map((s) => (
          <Chip key={s} type="button" onClick={() => handlePrompt(s)}>
            {s}
          </Chip>
        ))}
        <InputBorder>
          <AnimRing />
          <InputRow>
            <IconBtn type="button" aria-label="Add">
              <Icon iconName={IconName.PLUS_LG} width={16} height={16} />
            </IconBtn>
            <InputEl
              ref={inputRef}
              placeholder={placeholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
            />
            <IconBtn type="button" aria-label="Voice">
              <Icon iconName={IconName.MIC} width={16} height={16} />
            </IconBtn>
            <SendBtn type="button" aria-label="Send" disabled={!canSend} onClick={handleSend}>
              <Icon iconName={IconName.SEND_FILL} width={16} height={16} />
            </SendBtn>
          </InputRow>
        </InputBorder>
      </Panel>
      <Fab $open={open} type="button" aria-label="AI assistant">
        <FabMiddle $open={open}>
          <AiGradientIcon />
        </FabMiddle>
      </Fab>
    </Wrap>
  );
};
