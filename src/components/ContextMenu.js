import React, { useContext } from 'react';
import { TreeContext } from '../context/TreeContext';
import { IoMdAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";

const ContextMenu = () => {
  const { contextMenuPosition, setContextMenuPosition, selectedNode, updateNode, removeNode, addNode } = useContext(TreeContext);

  if (!contextMenuPosition) {
    return null;
  }

  const handleEditGroup = () => {
    const newName = window.prompt("Enter new name:");
    if (newName) {
      updateNode(selectedNode, newName);
      setContextMenuPosition(null);
    }
  }

  const handleRemoveNode = () => {
    let result = window.confirm("Are you sure?")
    if (result) {
      removeNode(selectedNode);
      setContextMenuPosition(null);
    }
  }

  const handleAddNewNode = () => {
    const name = window.prompt("Enter new node name:");
    if (name) {
      addNode(selectedNode, name);
      setContextMenuPosition(null);
    }
  }


  return (
    <div style={{
      position: 'absolute',
      top: contextMenuPosition.y,
      left: contextMenuPosition.x,
      border: '1px solid #ccc',
      backgroundColor: 'aliceblue',
      padding: '5px',
      zIndex: 10,
      width: '150px'
    }}>
      <div onClick={handleEditGroup} className='menu-item'> <CiEdit color='blue' /> Edit node</div>
      <div onClick={handleAddNewNode} className='menu-item'> <IoMdAdd color='green' /> Add new node</div>
      <div onClick={handleRemoveNode} className='menu-item'> <MdDeleteOutline color='red' /> Delete</div>
      <div onClick={() => setContextMenuPosition(null)} className='menu-item'><IoCloseCircleOutline color='orange' /> Close</div>
    </div>
  );
};

export default ContextMenu;