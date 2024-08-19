const Modal = () => {
    return (
        <div className="border-2 p-4 px-6w-[28rem]  backdrop-filter backdrop-blur-lg">
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
                    <div>366</div>
                </div>
            </div>
            <hr />
            <div className="flex justify-between my-4">
                <p>Subtotal</p>
                <p>₹ 3.90</p>
            </div>
            <div className="flex justify-between mb-4">
                <p>Delivery</p>
                <p>₹ 3.95</p>
            </div>
            <hr />
            <div className="flex justify-between my-3">
                <p className="font-bold">Total</p>
                <p className="text-2xl mb-2">₹ 7.85</p>
            </div>
            <button className="uppercase w-full  py-2 px-10 rounded text-sm text-white mb-2 border-2 bg-black border-black transition-all">
                purchase
            </button>
            <button className="uppercase w-full  py-2 px-10 rounded text-sm text-white mb-2 border-2 bg-black border-black transition-all">
                cancel
            </button>
        </div>
    );
};

export default Modal;
