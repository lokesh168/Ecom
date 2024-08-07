import { useEffect, useState } from "react";
import { Coffee, CookingPot, Microwave, Cookie } from "lucide-react";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
    const [singleProductData, setSingleProductData] = useState([]);
    let [count, setCount] = useState(1);
    let { id } = useParams();

    console.log(id);
    if (count < 1) {
        count = 1;
    }

    async function fetchRestApi() {
        const uri = await fetch(`https://dummyjson.com/recipes/${id}`);

        const response = await uri.json();

        setSingleProductData(response);
    }

    useEffect(() => {
        fetchRestApi();
    }, []);

    return (
        <div>
            <section className="px-10 py-5 mt-5">
                {/* Home Cover */}
                <div className="flex mx-auto justify-center space-x-16">
                    <div>
                        <img
                            className="w-96 rounded-md"
                            src={singleProductData.image}
                            alt="home-banner"
                        />
                    </div>
                    <div className="min-w-24 p-10 ml-10">
                        <h1 className="my-5 text-3xl font-bold">
                            {singleProductData.name}
                        </h1>
                        <h2 className="my-5 w-96">{singleProductData.name}</h2>
                        <p className="text-4xl">
                            $ {singleProductData.caloriesPerServing}
                        </p>

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
                            <span className="uppercase">
                                <b>SERVING SIZE:</b>{" "}
                                <em className="mx-2 border-2 border-black p-2 px-4 rounded-md">
                                    {singleProductData.servings}
                                </em>
                            </span>
                        </div>
                        <div className="flex">
                            <CookingPot className="mx-2" />
                            <span className="uppercase">
                                <b>cookTimeMinutes:</b>
                                <em className="mx-2 border-2 border-black p-2 px-4 rounded-md">
                                    {singleProductData.cookTimeMinutes}
                                </em>
                            </span>
                        </div>
                        <div className="flex">
                            <Microwave className="mx-2" />
                            <span className="uppercase">
                                <b>prepTimeMinutes:</b>
                                <em className="mx-2 border-2 border-black p-2 px-4 rounded-md">
                                    {singleProductData.prepTimeMinutes}
                                </em>
                            </span>
                        </div>
                        <div className="flex">
                            <Cookie className="mx-2" />
                            <span className="uppercase">
                                <b>caloriesPerServing:</b>
                                <em className="mx-2 border-2 border-black p-2 px-4 rounded-md">
                                    {singleProductData.caloriesPerServing}
                                </em>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl my-4 text-right">
                        About this Dish
                    </h2>
                    <div className="space-y-5">
                        <div className="flex justify-end space-x-5">
                            {singleProductData?.tags?.map((item, index) => (
                                <div
                                    className="p-6 border-r-4 border-[#d3d3d3]"
                                    key={index}
                                >
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <h2 className="text-4xl my-4">Ingredient</h2>
                    {/* <div>
                        {singleProductData?.ingredients?.map((item, index) => (
                            <span className="" key={index}>
                                {item}
                            </span>
                        ))}
                    </div> */}
                    <span>About Ingredients</span>
                </div>
            </div>

            {/* Similar products you might like */}
            <div className="my-28">
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
