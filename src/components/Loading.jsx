import { HashLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-[100vh] w-full">
            <HashLoader color="#AF8260" size={60} />
        </div>
    );
};

export default Loading;
