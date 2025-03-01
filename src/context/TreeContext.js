import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import initialTreeData from '../data/const initialTreeData';

export const TreeContext = createContext();

export const TreeProvider = ({ children }) => {

  const [treeData, setTreeData] = useState(initialTreeData);
  const [selectedNode, setSelectedNode] = useState(null);
  const [contextMenuPosition, setContextMenuPosition] = useState(null);

  /**
   * Updates the name of a node within the tree data structure.
   * @param {string} nodeId  
   * @param {string} newName  
   */
  const updateNode = (nodeId, newName) => {
    // Recursive function to traverse the tree and update the node with the matching ID
    const updateTree = (data) => {
      if (data.id === nodeId) {
        data.name = newName;
        return data;
      } else if (data.children) {
        return { ...data, children: data.children.map((item) => updateTree(item)) };
      }
      return data;
    };
    setTreeData(updateTree(treeData));
  }

  /**
   * Removes a node with the specified ID from the tree structure.
   * @param {string} nodeId 
   */
  const removeNode = (nodeId) => {
    // Recursive function to traverse the tree and remove the node with the matching ID.
    const updateTree = (data) => {
      if (data.children) {
        data.children = data.children
          .filter(child => child.id !== nodeId)
          .map((item) => updateTree(item));
      }
      return data;
    };
    setTreeData(updateTree(treeData));
  };

  /**
   * Adds a new node to the tree as a child of the specified parent node.
   * @param {string} parentId - The unique identifier of the parent node to which the new node will be added.
   * @param {string} name - The name of the new node.
   */
  const addNode = (parentId, name) => {
    // Create a new node object with a unique ID (using uuidv4), 
    const newNode = { id: uuidv4(), name, children: [] };

    const updateTree = (node) => {
      console.log(node, typeof node)
      if (node.id === parentId) {
        return { ...node, children: [...node.children, newNode] };
      } else if (node.children) {
        return { ...node, children: node.children.map(updateTree) };
      }
      return node;
    };
    setTreeData(updateTree(treeData));
  }

  const value = {
    treeData,
    setTreeData,
    selectedNode,
    setSelectedNode,
    contextMenuPosition,
    setContextMenuPosition,
    updateNode,
    removeNode,
    addNode
  }

  return (
    <TreeContext.Provider value={value}>
      {children}
    </TreeContext.Provider>
  );
};
