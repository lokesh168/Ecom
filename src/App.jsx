import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import Home from "./pages/Home";
import Bag from "./pages/Bag";
import Navbar from "./components/Navbar";
import Collections from "./pages/Collections";
import Accounts from "./pages/Accounts";
import SingleProductPage from "./pages/SingleProductPage";

import "./App.css";

export const CartContext = createContext();

function App() {
    return (
        <Router>
            <CartContext.Provider value={12}>
                <Navbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/bag" element={<Bag />} />
                    <Route path="/collections" element={<Collections />} />
                    <Route path="/account" element={<Accounts />} />
                    <Route
                        path="/singleProductPage/:id"
                        element={<SingleProductPage />}
                    />
                </Routes>
            </CartContext.Provider>
        </Router>
    );
}

export default App;
