import React from 'react';
import { IllustrationName, illustrationMap } from './utils';

type IllustrationProps = {
  name: IllustrationName;
  width?: number;
  height?: number;
};

export const Illustrations = ({ name, width, height }: IllustrationProps) => {
  const Component = illustrationMap[name] || (() => null);

  return <Component width={width} height={height} />;
};
