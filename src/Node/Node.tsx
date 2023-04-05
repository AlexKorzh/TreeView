import React from 'react';
import { Icon, IconName } from '../Icon';

const nodeStyles = {
  paddingLeft: 16,
  userselect: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  height: 40,
  fontSize: 16,
  lineHeight: 24,
  borderBottom: '1px solid lightgray'
};

interface NodeProps {
  indents?: React.ReactNode | React.ReactNode[];
  startIcon?: React.ReactNode;
  iconName: keyof typeof IconName;
  nodeName?: string;
  onClick: () => void;
}

export const Node = ({ indents, startIcon, iconName, nodeName, onClick } : NodeProps) => {
  return (
    <div style={nodeStyles} onClick={onClick}>
      {indents}
      {startIcon}
      <Icon name={iconName} ml={8}/>
      <span style={{ marginLeft: 8 }}>{nodeName}</span>
    </div>
  );
};