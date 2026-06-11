import styled from 'styled-components';
import { darkTheme } from '@src/themes';
import { AiBubble } from '@/src/local components/AiBubble/AiBubble';

/* ------------------------------------------------------------------ *
 * AiBubble showcase — centers the reusable gas-orb on the dark canvas.
 * ------------------------------------------------------------------ */

const d = darkTheme.colors;

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(60% 60% at 50% 48%, ${d.transparent.primary['8%']} 0%, transparent 70%),
    ${d.neutral.background.base};
`;

export default function AiBubbleScreen() {
  return (
    <Page>
      <AiBubble size={320} />
    </Page>
  );
}
