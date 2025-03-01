import './App.css';
import { TreeProvider } from './context/TreeContext';
import Tree from './components/Tree';
import ContextMenu from './components/ContextMenu';
import NavBar from './components/NavBar';

function App() {
  return (
    <TreeProvider>
      <NavBar />
      <Tree />
      <ContextMenu />
    </TreeProvider>
  );
}

export default App;
