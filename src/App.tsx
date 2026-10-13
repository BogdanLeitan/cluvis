import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NewChat from "./pages/NewChat/NewChat.tsx";
import LLMLibrary from './pages/LLMLibrary/LLMLibrary.tsx';

export default function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<NewChat />}/>
          <Route path="/llms" element={<LLMLibrary />}/>
        </Routes>
      </HashRouter>
    </>
  );
}