import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from "./App";
import { Insert } from "./Insert";
import { Update } from './update';

export const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/actualizar" element={<Update />} />
      </Routes>
    </Router>
  )
}
