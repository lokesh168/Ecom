import CatItemsList from "../components/CatItemsList";
import collectionArray from "../data/collectionArr";

const Categories = () => {
    return (
        <section>
            <h2 className="text-center text-4xl">Our Collection</h2>
            <div className="container">
                <div className="flex flex-wrap md:flex-nowrap">
                    {collectionArray.map((singleCollection, index) => (
                        <CatItemsList
                            key={index}
                            title={singleCollection.title}
                            image={singleCollection.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;

// Used do not repeat yourself in this case where i made a
// single component and passed the data
