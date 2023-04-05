import React from 'react';
import folderIcon from 'assets/folder-icon.svg';
import arrowRight from 'assets/arrow-right.svg';
import fileIcon from 'assets/file-icon.svg';

export enum IconName {
  folder = 'folder',
  file = 'file',
  arrowRight = 'arrowRight',
}

interface IconProps {
  ml?: number;
  name: keyof typeof IconName;
  rotateDeg?: number;
}

const icons = {
  [IconName.folder]: folderIcon,
  [IconName.file]: fileIcon,
  [IconName.arrowRight]: arrowRight,
};

export const Icon = ({ name, rotateDeg, ml }: IconProps) => {
  let styles = {
    width: 24, height: 24
  }

  if (name === IconName.arrowRight) {
    styles = { width: 16, height: 16 }
  }

  return (
  // @ts-ignore
    <img
          src={icons[name]}
         alt="folder icon"
         style={{ ...styles, transform: `rotate(${rotateDeg}deg)`, marginLeft: ml }}
    />
  );
};