import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { BriefcaseBusiness, Leaf, Menu, UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "react-responsive-modal/styles.css";
import Modal from "react-responsive-modal";

const Navbar = () => {
    const { totalUniqueItems } = useCart();
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <nav>
            <Modal
                classNames="p-5 rounded-md"
                open={open}
                onClose={onCloseModal}
                center
            >
                <ul
                    id="navbar"
                    className="flex md:space-x-5 flex-col p-20 py-32 rounded-md"
                >
                    <NavLink to="/" className="uppercase">
                        Home
                    </NavLink>
                    <NavLink to="/collections" className="uppercase">
                        Food Collection
                    </NavLink>
                    <NavLink to="/account" className="uppercase">
                        Contact Us
                    </NavLink>
                    <NavLink to="/account" className="uppercase">
                        My Bag
                    </NavLink>
                </ul>
            </Modal>
            <div className="flex justify-between items-center px-10 md:px-20 py-5 border-b-2 border-black">
                <div className="flex space-x-4 items-center">
                    <Leaf />
                    <Link to="/">
                        <h2 className="font-signature text-3xl font-bold tracking-wider">
                            Food Mania
                        </h2>
                    </Link>
                </div>
                <div>
                    <ul id="navbar" className="space-x-10 hidden md:block">
                        <NavLink to="/collections" className="uppercase">
                            Food Collection
                        </NavLink>
                        <NavLink to="/account" className="uppercase">
                            Contact Us
                        </NavLink>
                    </ul>
                </div>
                <div className="flex space-x-5">
                    <Link to="/account" className="uppercase">
                        <UserRound />
                    </Link>

                    <Link to="/bag" className="relative">
                        {/* <BriefcaseBusiness className="relative" /> */}
                        <span>
                            <BriefcaseBusiness />
                        </span>
                        <div className="absolute -top-3 -right-3 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full  dark:border-gray-900">
                            {totalUniqueItems}
                        </div>
                    </Link>
                </div>
                <div className="md:hidden">
                    <Menu onClick={onOpenModal} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
