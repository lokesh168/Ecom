import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Collections = () => {
    const [receipe, setReceipe] = useState();
    const [dishNames, setDishName] = useState();
    const [filteredList, setFilteredList] = useState();
    const [showData, setShowData] = useState(false);
    const [sortByName, setSortByName] = useState("");

    console.log(sortByName);
    function removeDuplicates(arr) {
        let unique = arr.reduce(function (acc, curr) {
            if (!acc.includes(curr.cuisine)) acc.push(curr.cuisine);
            return acc;
        }, []);
        return unique;
    }

    function receipeNameHandler(receipeName) {
        const output = receipe?.recipes.filter((item) => {
            if (item.cuisine == receipeName) {
                setShowData(true);
                return item;
            }
        });

        setFilteredList(output);
    }

    async function fetchRestApi() {
        const uri = await fetch(
            `https://dummyjson.com/recipes?sortBy=${sortByName}`
        );

        const response = await uri.json();
        setDishName(removeDuplicates(response?.recipes));
        setReceipe(response);
    }

    useEffect(() => {
        fetchRestApi();
    }, []);

    return (
        <section>
            {/* Banner */}
            <div>
                <img
                    className="h-60 w-full object-cover"
                    src="https://plus.unsplash.com/premium_photo-1673484470265-39526c43ca3e?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="banner"
                />
            </div>

            {/* Collections */}
            <div>
                <h1 className="text-center my-10 text-4xl">Our Collection</h1>

                <div className="grid grid-cols-5 grid-rows-5 gap-4 p-5">
                    <div className="col-span-1 row-span-5 flex flex-col">
                        {dishNames?.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => receipeNameHandler(item)}
                                className="my-1 p-4 border-b-2 border-black hover:bg-[#AF8260]"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <div className="col-span-4 row-span-5 col-start-2 relative">
                        <button
                            onClick={() => setSortByName("name")}
                            className="my-1 p-4 border-b-2 border-black hover:bg-[#AF8260] absolute top-[-8%] right-0"
                        >
                            <p className="text-right">Sort</p>
                        </button>
                        <div className="container flex flex-wrap mx-auto">
                            {showData ? (
                                <>
                                    {filteredList?.map((item, index) => (
                                        <Link
                                            to={`/singleProductPage/${item.id}`}
                                            key={index}
                                        >
                                            <div className="mx-5 text-center w-64 mb-10 hover:bg-[#d3d3d3] transition cursor-pointer">
                                                <img
                                                    className="rounded"
                                                    src={item.image}
                                                    alt="something about tea"
                                                />
                                                <p className="uppercase mt-5 font-bold text-md">
                                                    {item.name}
                                                </p>
                                                <p className="uppercase font-bold text-sm py-2">
                                                    ${" "}
                                                    {Math.floor(
                                                        Math.random() * 200
                                                    )}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </>
                            ) : (
                                <>
                                    {receipe?.recipes?.map((item, index) => (
                                        <Link
                                            to={`/singleProductPage/${item.id}`}
                                            key={index}
                                        >
                                            <div className="mx-5 text-center w-64 mb-10 hover:bg-[#d3d3d3] transition cursor-pointer">
                                                <img
                                                    className="rounded"
                                                    src={item.image}
                                                    alt="something about tea"
                                                />
                                                <p className="uppercase mt-5 font-bold text-md">
                                                    {item.name}
                                                </p>
                                                <p className="uppercase font-bold text-sm py-2">
                                                    ${" "}
                                                    {Math.floor(
                                                        Math.random() * 200
                                                    )}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </section>
    );
};

export default Collections;
