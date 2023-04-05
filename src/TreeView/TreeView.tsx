import React from 'react';

interface TreeViewProps {
  children?: React.ReactNode | React.ReactNode[]
}

const treeViewStyle = {
  border: '1px solid lightgray',
  marginTop: 40,
  borderRadius: 20
};

export const TreeView = ({ children } : TreeViewProps) => {
  return (
    <div style={treeViewStyle}>
      <h4 style={{ paddingLeft: 20 }}>HTML Folder Structure</h4>
      <div style={{ overflow: 'auto', height: 600 }}>{children}</div>
    </div>
  );
};