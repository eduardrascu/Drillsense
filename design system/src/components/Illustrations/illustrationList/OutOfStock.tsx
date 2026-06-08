import React, { FC, SVGProps } from 'react';
import { useTheme } from 'styled-components';

export const OutOfStock: FC<SVGProps<SVGSVGElement>> = ({
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
        d="M110.202 43.053a29.302 29.302 0 0 1-50.019 20.715A29.3 29.3 0 0 1 80.898 13.75a29.304 29.304 0 0 1 29.304 29.303Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M101.717 47a21.707 21.707 0 0 0 0-7H84V22.283A21.638 21.638 0 0 0 80.5 22c-1.192 0-2.361.096-3.5.283V40H59.283A21.648 21.648 0 0 0 59 43.5c0 1.191.097 2.361.283 3.5H77v17.717c1.139.186 2.308.283 3.5.283 1.192 0 2.361-.097 3.5-.283V47h17.717Z"
      />
      <path
        fill="url(#a)"
        d="M101.717 47a21.707 21.707 0 0 0 0-7H84V22.283A21.638 21.638 0 0 0 80.5 22c-1.192 0-2.361.096-3.5.283V40H59.283A21.648 21.648 0 0 0 59 43.5c0 1.191.097 2.361.283 3.5H77v17.717c1.139.186 2.308.283 3.5.283 1.192 0 2.361-.097 3.5-.283V47h17.717Z"
      />
      <path
        fill={theme.colors.neutral.background.transparent.default}
        fillOpacity=".16"
        d="M107.501 55.334A29.342 29.342 0 0 1 89.144 71.17l-1.63-2.04-2.323 2.908a29.306 29.306 0 0 1-30.906-16.703h53.216Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M80.897 73.29a30.24 30.24 0 1 1 30.241-30.24 30.274 30.274 0 0 1-30.241 30.24Zm0-58.603a28.365 28.365 0 1 0 28.366 28.363 28.4 28.4 0 0 0-28.366-28.362Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M87.523 60.638h45.354v72.315H87.523V60.637Z"
      />
      <path
        fill={theme.colors.neutral.background.transparent.default}
        fillOpacity=".2"
        d="M87.523 60.638h45.354v72.315H87.523V60.637Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M25.248 60.638H87.52v72.318H25.248V60.638Z"
      />
      <path
        fill={theme.colors.neutral.background.transparent.default}
        fillOpacity=".16"
        d="M25.248 60.638H87.52v72.318H25.248V60.638Z"
      />
      <path
        fill={theme.colors.neutral.background.transparent.default}
        fillOpacity=".16"
        d="M87.52 60.638v15.65l-6.856 9.993H25.248v-9.994H75.02l12.5-15.65Z"
      />
      <path
        fill={theme.colors.neutral.background.transparent.default}
        fillOpacity=".16"
        d="M87.52 77.463V60.638l12.5 15.65h32.856v9.993H94.601l-7.082-8.819Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M133.814 133.891H86.586V59.688h47.228v74.203Zm-45.353-1.875h43.478V61.563H88.461v70.453Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M88.457 133.894H24.311V59.687h64.146v74.207Zm-62.271-1.875h60.396V61.562H26.186v70.457Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M95.125 117.134h16.453v8.497H95.125v-8.497Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M75.019 76.287H11.25l12.5-15.65h63.769l-12.5 15.65ZM100.02 76.287h46.181l-12.503-15.65H87.519l12.501 15.65Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M75.47 77.225H9.3l14-17.537h66.17l-14 17.537ZM13.2 75.35h61.366l11.007-13.787h-61.37L13.202 75.35Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M148.147 77.225H99.569L85.572 59.688h48.578l13.997 17.537Zm-47.675-1.875h43.778l-11.003-13.787H89.469l11.003 13.787Z"
      />
      <path
        fill={theme.colors.neutral.border.weakest}
        d="M30.019 50.578a3.957 3.957 0 0 1-3.697-2.547c-1.25-3.29 2.116-6.472 5.312-5.04a3.966 3.966 0 0 1-1.625 7.587h.01Zm0-6.056a2.091 2.091 0 1 0 1.906 2.94 2.094 2.094 0 0 0-1.897-2.94h-.01ZM13.582 59.913a3.04 3.04 0 1 1 .014-6.082 3.04 3.04 0 0 1-.014 6.081Zm0-4.207a1.165 1.165 0 1 0 .01 0h-.01ZM135.025 137.595l1.326-1.325 4.244 4.244-1.325 1.326-4.245-4.245ZM138.859 131.053h6.003v1.875h-6.003v-1.875ZM130.191 140.247h1.875v6.003h-1.875v-6.003ZM148.022 66.51l-1.181-1.457 1.456-1.181 1.182 1.456-1.457 1.181Zm-3.147-3.885-1.181-1.46 1.456-1.178 1.182 1.457-1.457 1.18Zm-3.146-3.875-1.182-1.456 1.457-1.182 1.181 1.46-1.456 1.178ZM138.622 55a5.207 5.207 0 0 0-1.3-.906l.832-1.682a7.13 7.13 0 0 1 1.762 1.232L138.622 55Zm-3.909-1.453h-1.875v-1.875h1.875v1.875Zm-5 0h-1.875v-1.875h1.875v1.875Zm-5.094-.038a7.15 7.15 0 0 1-2.081-.544l.741-1.721c.488.21 1.005.344 1.534.4l-.194 1.865Zm-4.894-2.725a7.105 7.105 0 0 1-1.05-1.875l1.757-.66c.186.5.447.966.775 1.385l-1.482 1.15Zm.4-5.25-1.875-.06c.019-.6.025-1.218.016-1.833l1.875-.022c.009.621.003 1.265-.016 1.89v.025Zm-2-4.968a42.754 42.754 0 0 0-.2-1.822l1.857-.247c.084.625.156 1.272.212 1.903l-1.869.166Zm-.718-4.832a41.09 41.09 0 0 0-.422-1.781l1.815-.475c.16.625.313 1.25.441 1.875l-1.834.381Zm-1.303-4.687a71.7 71.7 0 0 0-.625-1.719l1.709-.706c.234.587.459 1.194.666 1.797l-1.75.628Zm-1.875-4.506c-.266-.544-.55-1.091-.844-1.625l1.615-.92c.313.56.607 1.135.888 1.704l-1.659.84Zm-2.416-4.241a43.613 43.613 0 0 0-1.038-1.513l1.525-1.093c.372.521.738 1.053 1.082 1.58l-1.569 1.026ZM17.025 142.413a3.523 3.523 0 0 1-3.519-3.467 3.519 3.519 0 0 1 7.038-.156 3.516 3.516 0 0 1-3.519 3.623Zm0-5.163a1.64 1.64 0 0 0-1.637 1.827 1.644 1.644 0 1 0 1.64-1.827h-.003Z"
      />
      <defs>
        <pattern
          id="a"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#b" transform="matrix(.0016 0 0 .0016 -.167 0)" />
        </pattern>
      </defs>
    </svg>
  );
};

export default OutOfStock;
