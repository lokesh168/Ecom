import CatItemsList from "./CatItemsList";
import collectionArray from "../data/collectionArr";

const SimilarProduct = () => {
    return (
        <div className="my-28">
            <h2 className="text-center text-4xl">Popular This Season</h2>

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
