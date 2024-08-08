import { ChevronRight } from "lucide-react";
import SimilarProduct from "../components/SimilarProduct";
import Footer from "../components/Footer";

const Bag = () => {
    return (
        <div>
            <div className="px-4 flex justify-evenly mt-5">
                <p className="uppercase">1.&nbsp; My Bag</p>
                <p className="uppercase">2.&nbsp; Delivery</p>
                <p className="uppercase">3.&nbsp; Review & Payment</p>
            </div>
            <section className="px-10 py-5 mt-5 flex justify-evenly">
                <div className="border-2 p-4 px-6 h-96">
                    <h1>My Bag</h1>

                    <div className="flex justify-evenly my-4 space-x-6">
                        <img
                            className="w-20"
                            src="http://localhost:5173/src/assets/Home-Banner.webp"
                            alt="tea"
                        />
                        <div className="space-y-8">
                            <h2>Ceylon Ginger Cinnamon</h2>
                            <h3>Remove</h3>
                        </div>
                        <div className="flex flex-col space-y-8">
                            <div>- 99 +</div>
                            <div>$ 366</div>
                        </div>
                    </div>
                    <div className="flex justify-evenly my-4 space-x-6">
                        <img
                            className="w-20"
                            src="http://localhost:5173/src/assets/Home-Banner.webp"
                            alt="tea"
                        />
                        <div className="space-y-8">
                            <h2>Ceylon Ginger Cinnamon</h2>
                            <h3>Remove</h3>
                        </div>
                        <div className="flex flex-col space-y-8">
                            <div>- 99 +</div>
                            <div>$ 366</div>
                        </div>
                    </div>

                    <hr />
                    <div className="flex justify-between my-3">
                        <p className="font-bold">Subtotal</p>
                        <p className="text-2xl mb-2">$ 7.85</p>
                    </div>
                    <button className="uppercase w-full  py-2 px-10 rounded text-sm  mb-2 border-2 text-black border-black transition-all">
                        back to shopping
                    </button>
                </div>

                <div>
                    <div className="bg-[#F4F4F4] p-4 px-6 w-[22rem]">
                        <h1>Order summery</h1>

                        <hr />
                        <div className="flex justify-between my-4">
                            <p>Subtotal</p>
                            <p>$ 3.90</p>
                        </div>
                        <div className="flex justify-between mb-4">
                            <p>Delivery</p>
                            <p>$ 3.95</p>
                        </div>
                        <hr />
                        <div className="flex justify-between my-3">
                            <p className="font-bold">Total</p>
                            <p className="text-2xl mb-1">$ 7.85</p>
                        </div>
                        <p className="mb-3">Estimated shipping time: 2 days</p>
                        <button className="uppercase w-full  py-2 px-10 rounded text-sm text-white mb-2 border-2 bg-black border-black transition-all">
                            check out
                        </button>
                    </div>

                    <div className="p-4 px-6 py-10 mt-10 w-[22rem] bg-[#F4F4F4]">
                        <h2 className="text-2xl">Payment Type</h2>
                        <div className="flex space-x-4 mt-4">
                            <img
                                className="w-14"
                                src="https://cdn.iconscout.com/icon/free/png-256/free-google-pay-3628807-3030084.png?f=webp&w=256"
                                alt="gpay"
                            />
                            <img
                                className="w-14"
                                src="https://cdn.iconscout.com/icon/free/png-256/free-google-pay-3628807-3030084.png?f=webp&w=256"
                                alt="gpay"
                            />
                            <img
                                className="w-14"
                                src="https://cdn.iconscout.com/icon/free/png-256/free-google-pay-3628807-3030084.png?f=webp&w=256"
                                alt="gpay"
                            />
                            <img
                                className="w-14"
                                src="https://cdn.iconscout.com/icon/free/png-256/free-google-pay-3628807-3030084.png?f=webp&w=256"
                                alt="gpay"
                            />
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
