import React, { useContext } from "react";
import { TreeContext } from "../context/TreeContext";
import { CiMenuKebab } from "react-icons/ci";

const TreeNode = ({ node }) => {

  const { setSelectedNode, setContextMenuPosition } = useContext(TreeContext)

  const handleContextMenu = e => {
    e.preventDefault();
    setSelectedNode(node.id);
    setContextMenuPosition({ x: e.clientX, y: e.clientY });
  }

  return (
    <li>
      <span>{node.name}</span>
      <span
        style={{ marginLeft: '5px', cursor: 'pointer', fontSize: "25px" }}
        onClick={handleContextMenu}
      >
        <CiMenuKebab size="0.6em" />
      </span>
      {node.children && node.children.length > 0 && (
        <ul>
          {node.children.map((child) => {
            return (
              <TreeNode key={child.id} node={child} />
            )
          })}
        </ul>
      )}
    </li>
  )
}

export default TreeNode;