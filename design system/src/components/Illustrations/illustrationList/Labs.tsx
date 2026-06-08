import React, { FC, SVGProps } from 'react';
import { useTheme } from 'styled-components';

export const Labs: FC<SVGProps<SVGSVGElement>> = ({
  width = 160,
  height = 160,
  ...props
}) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 160 160"
      fill="none"
      {...props}
    >
      <path
        fill={theme.colors.neutral.background.active}
        d="M133.525 123.028a3.752 3.752 0 0 1-3.75 3.75H26.285a3.75 3.75 0 1 1 0-7.5h103.493a3.75 3.75 0 0 1 3.747 3.75ZM80.313 94.45H36.656a3.76 3.76 0 0 1 0-7.522h43.657a3.76 3.76 0 1 1 0 7.522Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M129.778 127.712H26.284a4.687 4.687 0 1 1 0-9.375h103.494a4.69 4.69 0 0 1 3.315 8.003 4.688 4.688 0 0 1-3.315 1.372Zm-103.494-7.5a2.815 2.815 0 0 0-1.988 4.802 2.814 2.814 0 0 0 1.988.823h103.494a2.815 2.815 0 0 0 2.813-2.812 2.816 2.816 0 0 0-2.813-2.813H26.284ZM80.313 95.388H36.656a4.698 4.698 0 0 1 0-9.397h43.657a4.698 4.698 0 1 1 0 9.397Zm-43.657-7.522a2.823 2.823 0 0 0 0 5.647h43.657a2.824 2.824 0 0 0 0-5.647H36.656Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M47.4 23.406h23.594v40.55H47.4v-40.55Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="m50.269 17.053 1.712 6.353H66.41l1.713-6.353H50.269Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M70.112 17.053H48.278a2.656 2.656 0 0 1 0-5.312h21.834a2.656 2.656 0 0 1 0 5.312ZM52.622 63.956h12.453v6.563H52.622v-6.563Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M71.931 64.894H46.463V22.469H71.93v42.425Zm-23.593-1.875h21.718V24.344H48.338v38.675Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M67.128 24.344H51.266l-2.203-8.228h20.312l-2.247 8.228ZM52.7 22.469h12.994L66.9 17.99H51.494l1.206 4.478Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M70.112 17.99H48.278a3.593 3.593 0 1 1 0-7.187h21.834a3.594 3.594 0 1 1 0 7.188Zm-21.834-5.312a1.719 1.719 0 0 0 0 3.438h21.834a1.719 1.719 0 0 0 0-3.438H48.278ZM66.013 71.456H51.684V63.02h14.329v8.437Zm-12.454-1.875h10.579v-4.687H53.559v4.687Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M105 119.281H36.81V94.45h45.774a18.522 18.522 0 0 0 18.519-18.513V48.703H70.647v-8.8l35.937-7.187a11.041 11.041 0 0 1 13.182 10.096l3.718 56.744A18.519 18.519 0 0 1 105 119.281Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M105 120.219H35.872V93.512h46.712a17.603 17.603 0 0 0 17.582-17.575V49.641H69.709V39.134l36.685-7.346A11.98 11.98 0 0 1 120.7 42.75l3.719 56.744a19.45 19.45 0 0 1-11.678 19.125 19.459 19.459 0 0 1-7.741 1.6Zm-67.26-1.875H105a17.565 17.565 0 0 0 17.541-18.728l-3.71-56.744a10.115 10.115 0 0 0-3.939-7.358 10.106 10.106 0 0 0-8.13-1.89l-35.178 7.048v7.094h30.457v28.171a19.48 19.48 0 0 1-19.457 19.457H37.747l-.006 22.95Z"
      />
      <path
        fill={theme.colors.neutral.background.transparent.default}
        fillOpacity=".16"
        d="M133.525 123.028a3.752 3.752 0 0 1-3.75 3.75H92.812c-2.23-18.269 11.929-34.375 30.175-34.687l.491 7.453a18.53 18.53 0 0 1-4.961 13.874A18.512 18.512 0 0 1 105 119.281h24.772a3.759 3.759 0 0 1 2.652 1.096 3.743 3.743 0 0 1 1.101 2.651Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M133.525 123.028a3.75 3.75 0 0 1-3.75 3.75H98.572a25.238 25.238 0 0 1 24.797-28.966l.115 1.754a18.51 18.51 0 0 1-4.971 13.862A18.524 18.524 0 0 1 105 119.281h24.772c.492 0 .98.096 1.435.285a3.74 3.74 0 0 1 2.031 2.027c.189.455.287.943.287 1.435Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="m120.305 28.642 4.943-4.942 1.325 1.325-4.942 4.943-1.326-1.326ZM114.284 18.64h1.875v6.991h-1.875v-6.99ZM124.834 33.697h6.991v1.875h-6.991v-1.875ZM14.912 89.95a4.61 4.61 0 1 1 .019-9.219 4.61 4.61 0 0 1-.018 9.219Zm0-7.344a2.734 2.734 0 1 0 2.229 4.316 2.742 2.742 0 0 0-2.216-4.316h-.013ZM30.938 69.21a3.241 3.241 0 1 1-.002-6.483 3.241 3.241 0 0 1 .002 6.482Zm-1.113-4.026a1.364 1.364 0 0 0 1.472 2.1 1.36 1.36 0 1 0-.846-2.582c-.252.096-.47.263-.626.482Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M123.522 148.256c13.933 0 25.228-11.295 25.228-25.228 0-13.933-11.295-25.228-25.228-25.228-13.933 0-25.228 11.295-25.228 25.228 0 13.933 11.295 25.228 25.228 25.228Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="m122.032 132.12 2.042-2.041 7.057 7.056-2.042 2.042-7.057-7.057Z"
      />
      <path
        fill="url(#a)"
        d="m122.032 132.12 2.042-2.041 7.057 7.056-2.042 2.042-7.057-7.057Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M123.522 149.194a26.168 26.168 0 0 1-25.663-31.271 26.172 26.172 0 0 1 20.558-20.558 26.166 26.166 0 0 1 31.271 25.663 26.2 26.2 0 0 1-7.672 18.494 26.2 26.2 0 0 1-18.494 7.672Zm0-50.457a24.29 24.29 0 1 0 24.29 24.291 24.317 24.317 0 0 0-24.29-24.278v-.013Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M123.112 106.081h-.993a3.497 3.497 0 0 0-3.497 3.497v9.563a3.496 3.496 0 0 0 3.497 3.496h.993a3.496 3.496 0 0 0 3.497-3.496v-9.563a3.497 3.497 0 0 0-3.497-3.497Z"
      />
      <path
        fill="url(#b)"
        d="M123.112 106.081h-.993a3.497 3.497 0 0 0-3.497 3.497v9.563a3.496 3.496 0 0 0 3.497 3.496h.993a3.496 3.496 0 0 0 3.497-3.496v-9.563a3.497 3.497 0 0 0-3.497-3.497Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="m136.148 118.25 2.041 2.042-7.056 7.056-2.042-2.041 7.057-7.057Z"
      />
      <path
        fill="url(#c)"
        d="m136.148 118.25 2.041 2.042-7.056 7.056-2.042-2.041 7.057-7.057Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M113.137 123.231h-.94a3.341 3.341 0 0 0-3.341 3.341v.94a3.341 3.341 0 0 0 3.341 3.341h.94a3.341 3.341 0 0 0 3.341-3.341v-.94a3.341 3.341 0 0 0-3.341-3.341Z"
      />
      <path
        fill="url(#d)"
        d="M113.137 123.231h-.94a3.341 3.341 0 0 0-3.341 3.341v.94a3.341 3.341 0 0 0 3.341 3.341h.94a3.341 3.341 0 0 0 3.341-3.341v-.94a3.341 3.341 0 0 0-3.341-3.341Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M70.994 52.9a9.219 9.219 0 1 0 0-18.438 9.219 9.219 0 0 0 0 18.438Z"
      />
      <path
        fill="url(#e)"
        d="M70.994 52.9a9.219 9.219 0 1 0 0-18.438 9.219 9.219 0 0 0 0 18.438Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M70.994 53.837a10.156 10.156 0 1 1 10.153-10.156 10.168 10.168 0 0 1-10.153 10.157Zm0-18.437a8.281 8.281 0 1 0 8.278 8.278 8.288 8.288 0 0 0-8.278-8.275V35.4Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M70.994 47.222a3.54 3.54 0 1 0 0-7.081 3.54 3.54 0 0 0 0 7.08Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M142.991 98.328h-1.875v-1.875h1.875v1.875Zm0-5h-1.875v-1.875h1.875v1.875Zm0-5h-1.875v-1.875h1.875v1.875Zm-2.263-4.61a5.797 5.797 0 0 0-.772-1.415l1.506-1.116a7.72 7.72 0 0 1 1.019 1.875l-1.753.657Zm-2.812-3.159a5.846 5.846 0 0 0-1.519-.543l.387-1.835c.697.147 1.37.388 2 .719l-.868 1.66Zm-4.438-.671h-1.875v-1.876h1.875v1.876Zm-5 0h-1.875v-1.876h1.875v1.876ZM97.272 79.888h-1.875v-1.876h1.875v1.876Zm-5 0h-1.875v-1.876h1.875v1.876Zm-5 0h-1.875v-1.876h1.875v1.876Zm-5 0h-1.875v-1.876h1.875v1.876Zm-5 0h-1.875v-1.876h1.875v1.876Zm-5 0h-1.875v-1.876h1.875v1.876Zm-5 0h-1.875v-1.876h1.875v1.876Zm-5 0h-1.875v-1.876h1.875v1.876Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M11.25 125.819h87.388v1.875H11.25v-1.875Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M140.956 64.472a6.928 6.928 0 0 1 6.935-6.934 6.937 6.937 0 0 1-6.935-6.935 6.938 6.938 0 0 1-6.937 6.934 6.929 6.929 0 0 1 4.905 2.03 6.944 6.944 0 0 1 2.032 4.905Z"
      />
      <path
        fill="url(#f)"
        d="M140.956 64.472a6.928 6.928 0 0 1 6.935-6.934 6.937 6.937 0 0 1-6.935-6.935 6.938 6.938 0 0 1-6.937 6.934 6.929 6.929 0 0 1 4.905 2.03 6.944 6.944 0 0 1 2.032 4.905Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M77.125 143.9a3.97 3.97 0 0 1 3.975-3.975 3.967 3.967 0 0 1-2.815-1.169 3.974 3.974 0 0 1-1.16-2.818 3.977 3.977 0 0 1-3.975 3.975 3.972 3.972 0 0 1 3.975 3.975v.012Z"
      />
      <path
        fill="url(#g)"
        d="M77.125 143.9a3.97 3.97 0 0 1 3.975-3.975 3.967 3.967 0 0 1-2.815-1.169 3.974 3.974 0 0 1-1.16-2.818 3.977 3.977 0 0 1-3.975 3.975 3.972 3.972 0 0 1 3.975 3.975v.012Z"
      />
      <defs>
        <pattern
          id="a"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#h" transform="matrix(.00552 0 0 .0016 -1.805 0)" />
        </pattern>
        <pattern
          id="b"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#h" transform="matrix(.00331 0 0 .0016 -.882 0)" />
        </pattern>
        <pattern
          id="c"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#h" transform="matrix(.00552 0 0 .0016 -1.805 0)" />
        </pattern>
        <pattern
          id="d"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#h" transform="matrix(.0016 0 0 .0016 -.167 0)" />
        </pattern>
        <pattern
          id="e"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#h" transform="matrix(.0016 0 0 .0016 -.167 0)" />
        </pattern>
        <pattern
          id="f"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#h" transform="matrix(.0016 0 0 .0016 -.167 0)" />
        </pattern>
        <pattern
          id="g"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#h" transform="matrix(.0016 0 0 .0016 -.168 0)" />
        </pattern>
      </defs>
    </svg>
  );
};

export default Labs;
