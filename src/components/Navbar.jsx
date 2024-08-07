import { BriefcaseBusiness, Search, Leaf, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between px-24 py-5 border-b-2 border-black">
            <div className="flex space-x-4">
                <Leaf />
                <Link to="/">
                    <h2>Chai Tea</h2>
                </Link>
            </div>
            <div>
                <ul className="flex space-x-10">
                    <Link to="/collections" className="uppercase">
                        Tea Collection
                    </Link>
                    <Link className="uppercase">Accessories</Link>
                    <Link to="/blogs" className="uppercase">
                        Blog
                    </Link>
                    <Link className="uppercase">Contact Us</Link>
                </ul>
            </div>
            <div className="flex space-x-5">
                <Search />
                <UserRound />
                <BriefcaseBusiness />
            </div>
        </nav>
    );
};

export default Navbar;
