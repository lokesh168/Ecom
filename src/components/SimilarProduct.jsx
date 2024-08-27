import CatItemsList from "./CatItemsList";
import collectionArray from "../data/collectionArr";

const SimilarProduct = () => {
    return (
        <div className="my-28">
            <h2 className="text-center text-4xl">Popular This Season</h2>

            {/* <div className="container flex justify-evenly my-10 mx-auto">
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
            </div> */}

            <div className="flex">
                {collectionArray.map((singleCollection, index) => (
                    <CatItemsList
                        key={index}
                        title={singleCollection.title}
                        image={singleCollection.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default SimilarProduct;
