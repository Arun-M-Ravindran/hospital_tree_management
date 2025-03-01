import React, { useContext } from "react";
import { TreeContext } from "../context/TreeContext";
import TreeNode from "./TreeNode";

const Tree = () => {
  const { treeData } = useContext(TreeContext);
  return (
    <div className="tree-container">
      <ul>
        <TreeNode node={treeData} />
      </ul>
    </div>
  )
}

export default Tree;