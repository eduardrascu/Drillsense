import React, { FC, SVGProps } from 'react';
import { useTheme } from 'styled-components';

export const Storytelling: FC<SVGProps<SVGSVGElement>> = ({
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
        fill={theme.colors.neutral.background.default}
        d="M142.241 57.016v65.034a12.433 12.433 0 0 1-12.434 12.431H89.104V57.016h53.137Z"
      />
      <path
        fill={theme.colors.neutral.background.transparent.default}
        fillOpacity=".16"
        d="M133.732 133.85a12.408 12.408 0 0 1-3.925.625H89.104v-77.46h36.121v65.035a12.443 12.443 0 0 0 8.507 11.8Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M129.807 135.422H88.166V56.078h55v65.972a13.386 13.386 0 0 1-13.359 13.372Zm-39.766-1.875h39.766A11.507 11.507 0 0 0 141.3 122.05V57.953H90.05l-.009 75.594Z"
      />
      <path
        fill={theme.colors.neutral.background.base}
        d="M117.375 122.05V28.547H23.85v93.503a12.433 12.433 0 0 0 12.43 12.434h93.526a12.433 12.433 0 0 1-12.431-12.434Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M84.063 83.244h22.456v4.244H84.062v-4.244ZM75 74h31.519v4.244H75V74Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M70.931 101.961a16.969 16.969 0 0 1-7.532 14.123 16.967 16.967 0 0 1-25.663-19.046c.814-2.67 2.274-5.1 4.252-7.07a16.962 16.962 0 0 1 28.956 11.993h-.013Z"
      />
      <path
        fill="url(#a)"
        d="M70.931 101.961a16.969 16.969 0 0 1-7.532 14.123 16.967 16.967 0 0 1-25.663-19.046c.814-2.67 2.274-5.1 4.252-7.07a16.962 16.962 0 0 1 28.956 11.993h-.013Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M53.907 84.938V101.9L41.926 89.906a16.896 16.896 0 0 1 11.981-4.968ZM79 101h7v12h-7v-12Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M101 101h6v12h-6v-12Z"
      />
      <path
        fill={theme.colors.primary.background.stronger}
        d="M90 95h7v18h-7V95Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M79 118h28v2H79v-2ZM53.904 101.9 41.907 89.906a16.92 16.92 0 0 0-4.981 11.994 16.97 16.97 0 0 0 10.47 15.676 16.958 16.958 0 0 0 6.492 1.293c.016-17.341.047-16.969.016-16.969Z"
      />
      <path
        fill={theme.colors.neutral.border.strong}
        d="M53.906 119.806a17.897 17.897 0 0 1-16.542-11.049 17.901 17.901 0 0 1 23.388-23.395A17.902 17.902 0 0 1 71.805 101.9a17.925 17.925 0 0 1-17.9 17.906ZM37.878 101.9a16.03 16.03 0 0 0 27.36 11.338 16.024 16.024 0 0 0 3.477-17.468 16.028 16.028 0 0 0-14.809-9.895A16.047 16.047 0 0 0 37.878 101.9Z"
      />
      <path
        fill={theme.colors.neutral.border.default}
        d="M129.806 135.422H36.281a13.39 13.39 0 0 1-13.369-13.372V27.61h95.4v94.44a11.51 11.51 0 0 0 11.494 11.497v1.875ZM24.787 29.484v92.566a11.508 11.508 0 0 0 11.494 11.497h86.703a13.385 13.385 0 0 1-6.547-11.497V29.484h-91.65Z"
      />
      <path
        fill={theme.colors.neutral.background.active}
        d="M36.006 39.497h69.54v25.172h-69.54V39.497Z"
      />
      <path
        fill={theme.colors.neutral.border.weakest}
        d="m119.809 24.57 4.529-4.53 1.325 1.326-4.529 4.53-1.325-1.326ZM114.266 15.456h1.875v6.407h-1.875v-6.407ZM124.016 29.178h6.406v1.875h-6.406v-1.875ZM149.688 80.19h-1.875v-1.612h1.875v1.613Zm0-4.737h-1.875v-1.875h1.875v1.875Zm0-5h-1.875v-1.875h1.875v1.875Zm0-5h-1.875v-1.875h1.875v1.875Zm0-5h-1.875v-1.875h1.875v1.875Zm-2.366-4.597a7.77 7.77 0 0 0-.759-1.481l1.562-1.04c.381.578.696 1.197.938 1.846l-1.741.675Zm-2.69-3.456a7.444 7.444 0 0 0-1.457-.803l.719-1.731a9.505 9.505 0 0 1 1.822 1.003l-1.084 1.531Zm-4.16-1.369h-1.853v-1.875h1.897l-.044 1.875Zm-4.978 0h-1.875v-1.875h1.875v1.875ZM14.391 135.913a4.089 4.089 0 0 1-2.956-1.279 4.081 4.081 0 0 1-1.107-3.025 4.059 4.059 0 0 1 2.668-3.577 4.06 4.06 0 0 1 5.12 5.423 4.061 4.061 0 0 1-3.725 2.458Zm-2.188-4.197a2.186 2.186 0 0 0 3.639 1.755 2.186 2.186 0 0 0-.13-3.376 2.187 2.187 0 0 0-1.19-.442 2.207 2.207 0 0 0-2.319 2.063ZM24.857 142.556a2.764 2.764 0 0 1 2.649-2.598 2.77 2.77 0 0 1 2.71 3.712 2.768 2.768 0 0 1-3.802 1.542 2.768 2.768 0 0 1-1.557-2.656Zm2.762-.728a.894.894 0 0 0-.815.542.891.891 0 1 0 .815-.542Z"
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

export default Storytelling;
