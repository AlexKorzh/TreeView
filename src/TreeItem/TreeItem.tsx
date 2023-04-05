import React, {useState} from 'react';
import {Node} from '../Node';
import {Indent} from '../Indent';
import {Icon, IconName} from '../Icon';

interface TreeItemProps {
  id: string;
  nodes: any;
  indentNumber?: number;
}

export const TreeItem = ({
   id,
   nodes,
   indentNumber = 0
}: TreeItemProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const node = nodes[id];
  const nodeChildren = nodes[id].children;

  if (node.parentId) indentNumber++;

  const renderChild = (
    childId: string,
    indentNumber: number,
  ): React.ReactNode => {
    return (
      <TreeItem
        key={childId}
        id={childId}
        nodes={nodes}
        indentNumber={indentNumber}
      />
    );
  };

  const handleNodeClick = (): void => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div id={node.id} style={{ userSelect: 'none' }}>
      <Node
        onClick={handleNodeClick}
        startIcon={nodeChildren.length ? <Icon name='arrowRight' rotateDeg={isExpanded ? 90 : 0}/> : null}
        indents={<Indent indentNumber={indentNumber} />}
        iconName={nodeChildren.length ? IconName.folder : IconName.file}
        nodeName={node.nodeName}
      />
      {nodeChildren.length ? (
        <div className="node-children">
          {isExpanded &&
            nodeChildren.map((childId: string) =>
              renderChild(
                childId,
                indentNumber
              ),
            )}
        </div>
      ) : null}
    </div>
  );
};
