import CatItemsList from "../components/CatItemsList";

const collectionArray = [
    {
        id: 1,
        title: "Serrano ham salad",
        image: "https://images.unsplash.com/photo-1533787761082-492a5b83e614?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3R1YXJhbnR8ZW58MHwwfDB8fHww",
    },
    {
        id: 2,
        title: "paplet momoms",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWNvbW1lcmNlJTIwZm9vZCUyMHdlYnNpdGUlMjBiYW5uZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 3,
        title: "non veg",
        image: "https://images.unsplash.com/photo-1514536958296-436f46226e74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3R1YXJhbnR8ZW58MHwwfDB8fHww",
    },
    {
        id: 4,
        title: "free service",
        image: "https://images.unsplash.com/photo-1473177027534-53d906e9abcf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJpbmtzfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
        id: 5,
        title: "free hot tea",
        image: "https://plus.unsplash.com/premium_photo-1705056547423-de4ef0f85bf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlJTIwZm9vZCUyMHdlYnNpdGUlMjBiYW5uZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 6,
        title: "free chilled beer",
        image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyaW5rc3xlbnwwfDB8MHx8fDA%3D",
    },
];
const Categories = () => {
    return (
        <section>
            <h2 className="text-center text-4xl">Our Collection</h2>
            <div className="container">
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
        </section>
    );
};

export default Categories;

// Used do not repeat yourself in this case where i made a
// single component and passed the data
