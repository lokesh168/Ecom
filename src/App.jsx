import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";
import "./App.css";
import Collections from "./pages/Collections";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/collections" element={<Collections />} />
            </Routes>
        </Router>
    );
}

export default App;
