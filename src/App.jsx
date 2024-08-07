import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";
import Collections from "./pages/Collections";
import SingleProductPage from "./pages/SingleProductPage";

import "./App.css";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/collections" element={<Collections />} />
                <Route
                    path="/singleProductPage"
                    element={<SingleProductPage />}
                />
            </Routes>
        </Router>
    );
}

export default App;
