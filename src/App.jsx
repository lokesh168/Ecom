import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import { lazy } from "react";
import { Suspense } from "react";
import Home from "./pages/Home";
import Bag from "./pages/Bag";
import Navbar from "./components/Navbar";
import Collections from "./pages/Collections";
import Accounts from "./pages/Accounts";
import SingleProductPage from "./pages/SingleProductPage";
import Loading from "./components/Loading";
const Footer = lazy(() => import("./components/Footer"));
import { CartProvider } from "react-use-cart";
import "./App.css";

export const CartContext = createContext();

function App() {
    return (
        <CartProvider>
            <Router>
                <Suspense fallback={<Loading />}>
                    <CartContext.Provider value={12}>
                        <Navbar />
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path="/bag" element={<Bag />} />
                            <Route
                                path="/collections"
                                element={<Collections />}
                            />
                            <Route path="/account" element={<Accounts />} />
                            <Route
                                path="/singleProductPage/:id"
                                element={<SingleProductPage />}
                            />
                        </Routes>
                        <Footer />
                    </CartContext.Provider>
                </Suspense>
            </Router>
        </CartProvider>
    );
}

export default App;
