import { BriefcaseBusiness, Search, Leaf, UserRound } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

const Navbar = () => {
    const cartVar = useContext(CartContext);

    return (
        <nav className="flex justify-between px-24 py-5 border-b-2 border-black">
            <div className="flex space-x-4">
                <Leaf />
                <Link to="/">
                    <h2>JunkFood Mania</h2>
                </Link>
            </div>
            <div>
                <ul className="flex space-x-10">
                    <Link to="/collections" className="uppercase">
                        Food Collection
                    </Link>
                    <Link to="/account" className="uppercase">
                        Contact Us
                    </Link>
                </ul>
            </div>
            <div className="flex space-x-5">
                <Search />
                <Link to="/account" className="uppercase">
                    <UserRound />
                </Link>

                <Link to="/bag" className="relative">
                    {/* <BriefcaseBusiness className="relative" /> */}
                    <span>
                        <BriefcaseBusiness />
                    </span>
                    <div className="absolute -top-3 -right-3 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full  dark:border-gray-900">
                        {cartVar}
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
