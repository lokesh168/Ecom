const CatItemsList = ({ title, image }) => {
    return (
        <div className="my-10 mx-auto">
            <div className="mx-5 text-center">
                <img
                    className="rounded"
                    src={image}
                    alt="something about tea"
                />
                <p className="uppercase mt-5 font-bold text-md">{title}</p>
            </div>
        </div>
    );
};

export default CatItemsList;
