import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./post.jsx";
import Home from "./Home";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
