import React from 'react';
import styled, { keyframes } from 'styled-components';
import { darkTheme } from '@src/themes';

/* ------------------------------------------------------------------ *
 * AiBubble — a fluid AI orb read as a sealed gas sample, in the
 * DrillSense palette. Inside a glass marble, teal/white vapor swirls,
 * warped by an animated turbulence filter for liquid/gas motion. Scales
 * to any `size` (the orb is authored at 320px and scaled as a whole, so
 * proportions hold). Every color traces to darkTheme tokens.
 * ------------------------------------------------------------------ */

const d = darkTheme.colors;

const t = {
  canvas: d.neutral.background.base,
  teal: d.primary.background.strong,
  tealBright: d.primary.text.default,
  accent: d.dataViz.qualitative_4[0],
  tealGlow8: d.transparent.primary['8%'],
  tealGlow12: d.transparent.primary['12%'],
  tealGlow16: d.transparent.primary['16%'],
  tealGlow24: d.transparent.primary['24%'],
  white: d.neutral.text.static,
  white72: d.transparent.white['72%'],
  white16: d.transparent.white['16%'],
};

const BASE = 320; // authored orb diameter; the whole thing scales from here

/* ------------------------------ motion -------------------------------- */

const driftA = keyframes`
  0%   { transform: translate(-10%, -4%) scale(1) rotate(0deg);     }
  25%  { transform: translate(8%, -12%) scale(1.16) rotate(8deg);   }
  50%  { transform: translate(12%, 7%) scale(0.92) rotate(-6deg);   }
  75%  { transform: translate(-7%, 12%) scale(1.1) rotate(5deg);    }
  100% { transform: translate(-10%, -4%) scale(1) rotate(0deg);     }
`;
const driftB = keyframes`
  0%   { transform: translate(11%, 8%) scale(1.06) rotate(0deg);    }
  30%  { transform: translate(-9%, 3%) scale(0.9) rotate(-7deg);    }
  60%  { transform: translate(-5%, -12%) scale(1.18) rotate(6deg);  }
  100% { transform: translate(11%, 8%) scale(1.06) rotate(0deg);    }
`;
const driftC = keyframes`
  0%   { transform: translate(3%, -10%) scale(0.96) rotate(0deg);   }
  35%  { transform: translate(-13%, 4%) scale(1.12) rotate(9deg);   }
  70%  { transform: translate(9%, 13%) scale(0.88) rotate(-5deg);   }
  100% { transform: translate(3%, -10%) scale(0.96) rotate(0deg);   }
`;
const driftCore = keyframes`
  0%   { transform: translate(-4%, 0%) scale(1);     }
  33%  { transform: translate(6%, -6%) scale(1.22);  }
  66%  { transform: translate(-3%, -10%) scale(0.86);}
  100% { transform: translate(-4%, 0%) scale(1);     }
`;
const morph = keyframes`
  0%, 100% { border-radius: 58% 42% 52% 48% / 50% 56% 44% 50%; }
  50%      { border-radius: 44% 56% 46% 54% / 56% 44% 56% 44%; }
`;
const breathe = keyframes`
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.03); }
`;
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-10px); }
`;

/* -------------------------------- layout ------------------------------ */

const Holder = styled.div<{ $size: number }>`
  position: relative;
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
`;

const Stage = styled.div<{ $scale: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${BASE}px;
  height: ${BASE}px;
  transform: translate(-50%, -50%) scale(${(p) => p.$scale});
  transform-origin: center;
`;

const Orb = styled.div`
  position: relative;
  width: ${BASE}px;
  height: ${BASE}px;
  animation: ${float} 8s ease-in-out infinite;
  filter: drop-shadow(0 0 48px ${t.tealGlow16}) drop-shadow(0 0 100px ${t.tealGlow8});
`;

const Sphere = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  overflow: hidden;
  background:
    radial-gradient(120% 120% at 50% 34%, ${t.tealGlow12} 0%, transparent 54%),
    radial-gradient(100% 100% at 50% 62%, transparent 46%, ${t.canvas} 90%),
    ${t.canvas};
  box-shadow:
    inset 0 0 52px 0 ${t.tealGlow8},
    0 0 64px 0 ${t.tealGlow16},
    0 0 132px 0 ${t.tealGlow8};
  animation: ${breathe} 7s ease-in-out infinite;
`;

const Fluid = styled.div`
  position: absolute;
  inset: -6%;
  filter: url(#ab-liquid);
`;

const Blob = styled.div`
  position: absolute;
  mix-blend-mode: screen;
  filter: blur(28px);
  will-change: transform, border-radius;
`;
const BlobA = styled(Blob)`
  width: 76%;
  height: 76%;
  left: 10%;
  top: 6%;
  opacity: 0.85;
  background: radial-gradient(50% 50% at 50% 50%, ${t.white72} 0%, ${t.tealBright} 34%, ${t.teal} 60%, transparent 76%);
  animation: ${driftA} 17s ease-in-out infinite, ${morph} 13s ease-in-out infinite;
`;
const BlobB = styled(Blob)`
  width: 68%;
  height: 68%;
  left: 18%;
  top: 24%;
  opacity: 0.8;
  background: radial-gradient(50% 50% at 50% 50%, ${t.white72} 0%, ${t.tealBright} 40%, transparent 72%);
  animation: ${driftB} 22s ease-in-out infinite, ${morph} 16s ease-in-out infinite;
`;
const BlobC = styled(Blob)`
  width: 62%;
  height: 62%;
  left: 8%;
  top: 28%;
  opacity: 0.6;
  background: radial-gradient(50% 50% at 50% 50%, ${t.accent} 0%, ${t.teal} 42%, transparent 74%);
  animation: ${driftC} 26s ease-in-out infinite, ${morph} 19s ease-in-out infinite;
`;
const BlobCore = styled(Blob)`
  width: 32%;
  height: 32%;
  left: 34%;
  top: 32%;
  filter: blur(16px);
  background: radial-gradient(50% 50% at 50% 50%, ${t.white} 0%, ${t.white72} 34%, transparent 68%);
  animation: ${driftCore} 11s ease-in-out infinite;
`;

/* ---- glass shading ---- */

const Fresnel = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(118% 118% at 50% 42%, transparent 52%, ${t.canvas} 92%);
  mix-blend-mode: multiply;
`;
const Bounce = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(70% 42% at 50% 90%, ${t.tealGlow16} 0%, transparent 60%);
`;
const Sheen = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(46% 34% at 38% 22%, ${t.white16} 0%, transparent 60%);
`;
const Rim = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  pointer-events: none;
  box-shadow:
    inset 0 0 0 1px ${t.white16},
    inset 0 0 2px 0 ${t.white72},
    inset 0 0 24px 1px ${t.tealGlow24};
`;

export interface AiBubbleProps {
  /** rendered diameter in px (orb authored at 320 and scaled as a whole) */
  size?: number;
}

export const AiBubble: React.FC<AiBubbleProps> = ({ size = BASE }) => (
  <Holder $size={size}>
    {/* animated turbulence — warps the vapor into fluid motion */}
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden>
      <filter id="ab-liquid" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.011 0.016" numOctaves="3" seed="7" result="noise">
          <animate
            attributeName="baseFrequency"
            dur="20s"
            values="0.011 0.016; 0.018 0.010; 0.008 0.018; 0.011 0.016"
            repeatCount="indefinite"
          />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="34" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>

    <Stage $scale={size / BASE}>
      <Orb>
        <Sphere>
          <Fluid>
            <BlobA />
            <BlobB />
            <BlobC />
            <BlobCore />
          </Fluid>
          <Fresnel />
          <Bounce />
          <Sheen />
        </Sphere>
        <Rim />
      </Orb>
    </Stage>
  </Holder>
);
