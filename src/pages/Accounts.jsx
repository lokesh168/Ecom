import { ChevronRight } from "lucide-react";
import Modal from "../components/Modal";

const Accounts = () => {
    return (
        <section className="px-10 py-5 mt-5 flex justify-evenly">
            <div className="py-10 px-7 h-80 w-96 bg-[#F4F4F4]">
                <h1 className="mb-3 text-2xl">Already a customer?</h1>
                <p className="mb-3 font-medium">
                    Welcome back! Sign in for faster checkout.
                </p>
                <input
                    className="w-full p-2 outline-2 mb-4"
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    className="w-full p-2 outline-2 mb-4"
                    type="text"
                    placeholder="Enter your password"
                />
                <button className="uppercase w-full  py-2 px-10 rounded-md text-black border-2 border-black transition-all">
                    sign in
                </button>
            </div>

            <div>
                <div className="py-10 px-7  w-96 bg-[#F4F4F4]">
                    <h1 className="mb-3 text-2xl">New to our company?</h1>
                    <p className="mb-3 font-medium">
                        Create an account for the best experience
                    </p>

                    <div className="space-y-4 ml-4 mb-4">
                        <p className="flex">
                            <ChevronRight /> Modify and track your orders
                        </p>
                        <p className="flex">
                            <ChevronRight /> Faster checkout
                        </p>
                        <p className="flex">
                            <ChevronRight /> Get a 10% discount for new customer
                        </p>
                    </div>
                    <button className="uppercase w-full  py-2 px-10 rounded-md text-black border-2 border-black transition-all">
                        sign in
                    </button>
                </div>

                <div className="py-10 px-7 mt-10 w-96 bg-[#F4F4F4]">
                    <h1 className="mb-3 text-2xl">Guest Checkout</h1>
                    <p className="mb-3 font-medium">
                        No ready to become a customer?
                    </p>

                    <button className="uppercase w-full  py-2 px-10 rounded-md text-black border-2 border-black transition-all">
                        Checkout
                    </button>
                </div>
            </div>
            <Modal />
        </section>
    );
};

export default Accounts;
