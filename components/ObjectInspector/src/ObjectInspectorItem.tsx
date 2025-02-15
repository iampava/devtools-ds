import React, { useEffect, useState } from "react";
import { Tree } from "@iampava-devtools-ds/tree";
import { ResolvedASTNode, ASTNode } from "@iampava-devtools-ds/object-parser";
import ObjectValue from "./ObjectValue";
import ObjectLabel from "./ObjectLabel";

interface ObjectInspectorItemProps {
  /** JSON ast to render in the tree. */
  ast: ASTNode;
  /** The current depth. */
  depth?: number;
  /** Depth of the tree that is open at first render. */
  expandLevel: number;
  /** Callback when a particular node in the tree is actively selected */
  onSelect?: (node?: ASTNode | ResolvedASTNode) => void;
}

/** A simple component. */
export const ObjectInspectorItem = ({
  expandLevel = 0,
  depth = 0,
  ...rest
}: ObjectInspectorItemProps) => {
  const { ast } = rest;

  const [resolved, setResolved] = useState<ResolvedASTNode | undefined>();
  const [open, setOpen] = useState(Boolean(depth < expandLevel));

  /** Handle async children */
  useEffect(() => {
    /** Async function to resolve children */
    const resolve = async () => {
      if (ast.type !== "value") {
        const promises = ast.children.map((f) => f());
        const children = await Promise.all(promises);
        const r = {
          ...ast,
          children,
        };
        setResolved(r);
      }
    };

    resolve();
  }, [ast]);

  if (resolved) {
    return (
      <Tree
        hover={false}
        open={open}
        label={<ObjectLabel open={open} ast={resolved} />}
        onSelect={() => {
          rest.onSelect?.(ast);
        }}
        onUpdate={(value: boolean) => {
          setOpen(value);
        }}
      >
        {resolved.children.map((child) => {
          return (
            <ObjectInspectorItem
              key={child.key}
              ast={child}
              depth={depth + 1}
              expandLevel={expandLevel}
              onSelect={rest.onSelect}
            />
          );
        })}
      </Tree>
    );
  }

  return (
    <Tree
      hover={false}
      label={<ObjectValue ast={ast} />}
      onSelect={() => {
        rest.onSelect?.(ast);
      }}
    />
  );
};

export default ObjectInspectorItem;
