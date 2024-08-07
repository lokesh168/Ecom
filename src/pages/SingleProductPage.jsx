import { useState } from "react";
import { Coffee } from "lucide-react";
import homeBanner from "../assets/Home-Banner.webp";
import Footer from "../components/Footer";

const SingleProductPage = () => {
    let [count, setCount] = useState(1);

    if (count < 1) {
        count = 1;
    }

    return (
        <div>
            <section className="px-10 py-5 mt-5">
                {/* Home Cover */}
                <div className="flex mx-auto justify-center space-x-16">
                    <div>
                        <img
                            className="w-96"
                            src={homeBanner}
                            alt="home-banner"
                        />
                    </div>
                    <div className="min-w-24 p-10 ml-10">
                        <h1 className="my-5 text-3xl font-bold">
                            Receipe Name <br /> just like our tea
                        </h1>
                        <h2 className="my-5 w-96">
                            Lorem ipsum dolor sit amet consectetur. Orci nibh
                            nullam risus adipiscing odio. Neque lacus nibh eros
                            in.
                        </h2>
                        <p className="text-4xl">$ 500</p>

                        <div className="flex justify-between items-center my-4">
                            <div className="">
                                <span
                                    className="text-2xl px-3 py-1 rounded-md bg-[#d3d3d3] cursor-pointer"
                                    onClick={() => setCount(count - 1)}
                                >
                                    -
                                </span>
                                <span className="text-2xl mx-6">{count}</span>
                                <span
                                    className="text-2xl px-3 py-1 rounded-md bg-[#d3d3d3] cursor-pointer"
                                    onClick={() => setCount(count + 1)}
                                >
                                    +
                                </span>
                            </div>
                            <button className="uppercase bg-slate-900 py-5 px-10 rounded-md text-white hover:bg-[#AF8260] transition-all">
                                add to bag
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex justify-evenly my-5 py-10  bg-[#F4F4F4] px-10">
                <div>
                    <h2 className="text-4xl my-4">Steeping instructions</h2>
                    <div className="space-y-5">
                        <div className="flex">
                            <Coffee className="mx-2" />
                            <span>
                                <b>SERVING SIZE:</b> OF LOOSEF TEA
                            </span>
                        </div>
                        <div className="flex">
                            <Coffee className="mx-2" />
                            <span>
                                <b>WATER TEMPERATURE:</b>OF LOOSEF TEA
                            </span>
                        </div>
                        <div className="flex">
                            <Coffee className="mx-2" />
                            <span>
                                <b>STEEPING TIME:</b>KIND OF LOOSEF TEA
                            </span>
                        </div>
                        <div className="flex">
                            <Coffee className="mx-2" />
                            <span>
                                <b>COLOR AFTER 3 MINUTES:</b>KIND OF LOOSEF TEA
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl my-4">About this tea</h2>
                    <div className="space-y-5">
                        <div className="flex justify-start space-x-5">
                            <div className="p-6 border-r-4 border-[#d3d3d3]">
                                <p>FLAVOR</p>
                                <p>Spicy</p>
                            </div>
                            <div className="p-6 border-r-4 border-[#d3d3d3]">
                                <p>FLAVOR</p>
                                <p>Spicy</p>
                            </div>
                            <div className="p-6 border-r-4 border-[#d3d3d3]">
                                <p>FLAVOR</p>
                                <p>Spicy</p>
                            </div>
                            <div className="p-6">
                                <p>FLAVOR</p>
                                <p>Spicy</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-4xl my-4">Ingredient</h2>
                    <div className="space-y-5">
                        <span>
                            Black Ceylon tea, Green tea, Ginger root, Cloves,
                            Black pepper, <br /> Cinnamon sticks, Cardamom,
                            Cinnamon pieces.
                        </span>
                    </div>
                </div>
            </div>

            {/* Similar products you might like */}
            <div>
                <h2 className="text-center text-4xl">You may also like</h2>

                <div className="container flex justify-evenly my-10 mx-auto">
                    <div className="mx-5 text-center">
                        <img
                            className="rounded"
                            src="https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=1478&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="something about tea"
                        />
                        <p className="uppercase mt-5 font-bold text-md">
                            Ceylon Ginger Cinnamon chai tea
                        </p>{" "}
                        <p className="uppercase mt-5 font-bold text-md">
                            black tea
                        </p>
                    </div>
                    <div className="mx-5 text-center">
                        <img
                            className="rounded"
                            src="https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=1478&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="something about tea"
                        />
                        <p className="uppercase mt-5 font-bold text-md">
                            Ceylon Ginger Cinnamon chai tea
                        </p>{" "}
                        <p className="uppercase mt-5 font-bold text-md">
                            black tea
                        </p>
                    </div>
                    <div className="mx-5 text-center">
                        <img
                            className="rounded"
                            src="https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=1478&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="something about tea"
                        />
                        <p className="uppercase mt-5 font-bold text-md">
                            Ceylon Ginger Cinnamon chai tea
                        </p>{" "}
                        <p className="uppercase mt-5 font-bold text-md">
                            black tea
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SingleProductPage;
