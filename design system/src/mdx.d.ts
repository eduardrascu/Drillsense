/**
 * In order to import .mdx file without eslint error.
 */
// declare module '*.mdx' {
// 	import { ComponentType } from 'react';
// 	const MDXComponent: ComponentType;
// 	export default MDXComponent;
// }

declare module '*.mdx' {
  import { MDXProps } from 'mdx/types';

  export default function MDXContent(props: MDXProps): JSX.Element;
}

declare module '*.avif' {
  const src: string;
  export default src;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}
