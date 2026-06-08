import React, { FC, SVGProps } from 'react';
import { useTheme } from 'styled-components';

export const Plug: FC<SVGProps<SVGSVGElement>> = ({
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
        fill={theme.colors.neutral.background.base}
        d="M96.628 20.637H48.422c-7.25 0-13.128 5.878-13.128 13.129v86.25c0 7.25 5.877 13.128 13.128 13.128h48.206c7.251 0 13.128-5.878 13.128-13.128v-86.25c0-7.25-5.877-13.128-13.128-13.128Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M96.628 134.081h-48.19a14.082 14.082 0 0 1-14.063-14.062V33.75a14.081 14.081 0 0 1 14.063-14.063h48.19a14.08 14.08 0 0 1 14.063 14.063V120a14.08 14.08 0 0 1-14.063 14.081ZM48.438 21.563A12.203 12.203 0 0 0 36.25 33.75V120a12.201 12.201 0 0 0 12.188 12.188h48.19A12.204 12.204 0 0 0 108.816 120V33.75a12.206 12.206 0 0 0-12.188-12.188h-48.19Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M76.438 35.594h-7.822a4.219 4.219 0 0 0-4.22 4.218v.341a4.219 4.219 0 0 0 4.22 4.219h7.822a4.219 4.219 0 0 0 4.218-4.219v-.34a4.219 4.219 0 0 0-4.219-4.22Z"
      />
      <path
        fill="url(#a)"
        d="M76.438 35.594h-7.822a4.219 4.219 0 0 0-4.22 4.218v.341a4.219 4.219 0 0 0 4.22 4.219h7.822a4.219 4.219 0 0 0 4.218-4.219v-.34a4.219 4.219 0 0 0-4.219-4.22Z"
      />
      <path
        fill={theme.colors.neutral.background.transparent.default}
        fillOpacity=".16"
        d="M110 102.181v16.299c0 3.851-1.523 7.544-4.234 10.267A14.426 14.426 0 0 1 95.543 133h-10.22A23.142 23.142 0 0 1 84 125.257c0-13.945 12.222-24.804 26-23.076Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M109.803 148.75c11.61 0 21.022-9.412 21.022-21.022 0-11.61-9.412-21.022-21.022-21.022-11.61 0-21.022 9.412-21.022 21.022 0 11.61 9.412 21.022 21.022 21.022Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M109.803 149.688a21.958 21.958 0 0 1-21.537-26.244 21.963 21.963 0 0 1 17.253-17.253 21.955 21.955 0 0 1 22.543 9.337 21.959 21.959 0 0 1 3.701 12.2 21.984 21.984 0 0 1-21.96 21.96Zm0-42.044a20.085 20.085 0 1 0 20.085 20.084 20.11 20.11 0 0 0-20.085-20.084Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="m109.756 116.975-9.106 3.278v7.284a12.435 12.435 0 0 0 8.225 11.7l.881.313.882-.313a12.43 12.43 0 0 0 5.959-4.55 12.43 12.43 0 0 0 2.262-7.15v-7.284l-9.103-3.278Z"
      />
      <path
        fill="url(#b)"
        d="m109.756 116.975-9.106 3.278v7.284a12.435 12.435 0 0 0 8.225 11.7l.881.313.882-.313a12.43 12.43 0 0 0 5.959-4.55 12.43 12.43 0 0 0 2.262-7.15v-7.284l-9.103-3.278Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M72.525 116.234c12.93 0 23.412-10.482 23.412-23.412S85.456 69.409 72.525 69.409 49.112 79.891 49.112 92.822c0 12.93 10.483 23.412 23.413 23.412Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M69.772 97.247h5.469v12.156h-5.47V97.247Z"
      />
      <path fill="url(#c)" d="M69.772 97.247h5.469v12.156h-5.47V97.247Z" />
      <path
        fill={theme.colors.primary.background.stronger}
        d="m57.314 85.308 3.867-3.867 8.594 8.595-3.866 3.866-8.595-8.594Z"
      />
      <path
        fill="url(#d)"
        d="m57.314 85.308 3.867-3.867 8.594 8.595-3.866 3.866-8.595-8.594Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="m75.243 90.037 8.594-8.594 3.866 3.866-8.594 8.595-3.866-3.867Z"
      />
      <path
        fill="url(#e)"
        d="m75.243 90.037 8.594-8.594 3.866 3.866-8.594 8.595-3.866-3.867Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M52.366 53.153h40.318v6.178H52.366v-6.178Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        fillRule="evenodd"
        d="m115.666 124.81-7.241 7.242-4.254-4.254 1.414-1.415 2.84 2.84 5.827-5.827 1.414 1.414Z"
        clipRule="evenodd"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M26.475 48.6H24.6v-1.875h1.875V48.6Zm0-5H24.6v-1.875h1.875V43.6Zm0-5H24.6v-1.875h1.875V38.6Zm0-5H24.6c0-.603 0-1.14.06-1.938l1.874.132c-.059.76-.059 1.284-.059 1.806Zm.475-4.766-1.834-.396c.137-.625.312-1.272.49-1.891l1.794.547c-.175.575-.325 1.16-.45 1.74Zm1.528-4.525-1.697-.8c.275-.584.582-1.168.907-1.73l1.621.937a21.49 21.49 0 0 0-.83 1.593Zm2.5-4.062-1.475-1.16c.4-.509.828-1.009 1.269-1.484l1.375 1.278c-.4.435-.794.894-1.16 1.363l-.009.003Zm3.353-3.403-1.178-1.46a27.693 27.693 0 0 1 1.563-1.162l1.053 1.562c-.478.322-.963.682-1.428 1.057l-.01.003Zm4.028-2.566-.822-1.684a22.853 22.853 0 0 1 1.791-.781L40 13.556c-.544.219-1.097.46-1.631.719l-.01.003Zm4.5-1.594-.418-1.825a21.824 21.824 0 0 1 1.918-.356l.266 1.856c-.581.079-1.188.191-1.756.322l-.01.003ZM127.71 107.727l3.953-3.952 1.325 1.325-3.952 3.953-1.326-1.326ZM122.85 99.866h1.875v5.59h-1.875v-5.59ZM131.478 111.719h5.591v1.875h-5.591v-1.875ZM36.722 146.341a3.889 3.889 0 1 1 4.947 2.409 3.899 3.899 0 0 1-4.947-2.409Zm1.772-.625a2.019 2.019 0 0 0 1.394 1.287 2.022 2.022 0 0 0 1.845-.444 2.011 2.011 0 0 0-.461-3.315 2.01 2.01 0 0 0-2.778 2.481v-.009ZM22.16 134.853a2.984 2.984 0 1 1 5.638-1.956 2.984 2.984 0 0 1-5.639 1.956Zm1.771-.625a1.115 1.115 0 0 0 .77.707 1.104 1.104 0 0 0 1.318-.692 1.108 1.108 0 0 0-.557-1.381 1.112 1.112 0 0 0-1.566.729 1.11 1.11 0 0 0 .035.65v-.013Z"
      />
      <defs>
        <pattern
          id="a"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#f" transform="matrix(.0012 0 0 .00222 0 -.194)" />
        </pattern>
        <pattern
          id="b"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#f" transform="matrix(.00198 0 0 .0016 -.327 0)" />
        </pattern>
        <pattern
          id="c"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#f" transform="matrix(.00355 0 0 .0016 -.982 0)" />
        </pattern>
        <pattern
          id="d"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#f" transform="matrix(.00355 0 0 .0016 -.982 0)" />
        </pattern>
        <pattern
          id="e"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#f" transform="matrix(.0012 0 0 .00266 0 -.333)" />
        </pattern>
      </defs>
    </svg>
  );
};

export default Plug;
