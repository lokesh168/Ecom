import { ChevronRight } from "lucide-react";
import SimilarProduct from "../components/SimilarProduct";
import Footer from "../components/Footer";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

import googlePay from "../assets/google-pay.svg";
import phonePay from "../assets/phonepe-icon.svg";
import razorPay from "../assets/razorpay-icon.svg";
import payTm from "../assets/paytm-icon.svg";

const Bag = () => {
    const {
        // isEmpty,
        // totalUniqueItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        // emptyCart,
    } = useCart();

    return (
        <div>
            <div className="px-10 py-5 flex justify-evenly mt-5">
                <p className="uppercase">1.&nbsp; My Bag</p>

                <p className="uppercase">2.&nbsp; Delivery</p>
                <p className="uppercase">3.&nbsp; Review & Payment</p>
            </div>
            <section className="px-10 py-5 mt-5 flex justify-evenly">
                <div className="border-2 p-4 px-6 h-96">
                    <h1>My Bag</h1>
                    {items.map((item, index) => (
                        <div
                            className="flex justify-evenly my-4 space-x-6"
                            key={index}
                        >
                            <img className="w-20" src={item.image} alt="tea" />
                            <div className="space-y-8">
                                <h2>{item.title}</h2>
                            </div>
                            <div className="flex flex-col space-y-2 justify-end items-end">
                                <div>
                                    <button
                                        onClick={() =>
                                            updateItemQuantity(
                                                item.id,
                                                item.quantity - 1
                                            )
                                        }
                                        className="uppercase mx-2 w-1 py-2 px-10 rounded text-sm text-white mb-2 border-2 bg-black border-black transition-all"
                                    >
                                        -
                                    </button>
                                    <span className="font-bold">
                                        {item.quantity}
                                    </span>
                                    <button
                                        onClick={() =>
                                            updateItemQuantity(
                                                item.id,
                                                item.quantity + 1
                                            )
                                        }
                                        className="uppercase mx-2 w-1 py-2 px-10 rounded text-sm text-white mb-2 border-2 bg-black border-black transition-all"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="uppercase w-25  py-2 px-10 rounded text-sm text-white border-2 bg-black border-black transition-all"
                                    >
                                        Remove
                                    </button>
                                </div>
                                <div>
                                    Quantity : <b>{item.quantity}</b>
                                </div>
                            </div>
                        </div>
                    ))}
                    <hr />

                    <div className="flex justify-between my-3">
                        <p className="font-bold">Subtotal</p>
                        <p className="text-2xl mb-2">
                            ₹ {Math.floor(cartTotal)}
                        </p>
                    </div>

                    <Link
                        to="/collections"
                        className="uppercase w-full  py-2 px-10 rounded text-sm  mb-2 border-2 text-black border-black transition-all"
                    >
                        back to shopping
                    </Link>
                </div>

                <div>
                    <div className="bg-[#F4F4F4] p-4 px-6 w-[22rem]">
                        <h1>Order summery</h1>

                        <hr />
                        <div className="flex justify-between my-4">
                            <p>Subtotal</p>
                            <p>₹ {Math.floor(cartTotal)}</p>
                        </div>
                        <div className="flex justify-between mb-4">
                            <p>Delivery</p>
                            <p>₹ 40</p>
                        </div>
                        <hr />
                        <div className="flex justify-between my-3">
                            <p className="font-bold">Total</p>
                            <p className="text-2xl mb-1">
                                ₹{" "}
                                {cartTotal !== 0 && Math.floor(cartTotal) + 40}{" "}
                                /-
                            </p>
                        </div>
                        <p className="mb-3">Estimated shipping time: 2 hrs</p>
                        <button className="uppercase w-full  py-2 px-10 rounded text-sm text-white mb-2 border-2 bg-black border-black transition-all">
                            check out
                        </button>
                    </div>

                    <div className="p-4 px-6 py-10 mt-10 w-[22rem] bg-[#F4F4F4]">
                        <h2 className="text-2xl">Payment Type</h2>
                        <div className="flex space-x-4 mt-4">
                            <img className="w-14" src={googlePay} alt="gpay" />
                            <img className="w-14" src={payTm} alt="phonePay" />
                            <img
                                className="w-14"
                                src={razorPay}
                                alt="razorPay"
                            />
                            <img
                                className="w-14"
                                src={phonePay}
                                alt="phonepay"
                            />{" "}
                        </div>
                    </div>

                    <div className="py-10 px-7 mt-10 w-[22rem] bg-[#F4F4F4]">
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
                                <ChevronRight /> Get a 10% discount for new
                                customer
                            </p>
                        </div>
                        <button className="uppercase w-full  py-2 px-10 rounded-md text-black border-2 border-black transition-all">
                            sign in
                        </button>
                    </div>
                </div>
            </section>

            <SimilarProduct />
            <Footer />
        </div>
    );
};

export default Bag;
