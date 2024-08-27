import { useCart } from "react-use-cart";

const Modal = () => {
    const {
        // isEmpty,
        // totalUniqueItems,
        items,
        cartTotal,
        updateItemQuantity,
        // emptyCart,
    } = useCart();

    return (
        <div className="border-2 p-4 px-6w-[28rem]  backdrop-filter backdrop-blur-lg">
            <h1>My Bag</h1>
            {items.map((item, index) => (
                <div className="flex justify-evenly my-4 space-x-6" key={index}>
                    <img className="w-20" src={item.image} alt="tea" />
                    <div className="space-y-8">
                        <h2>Ceylon Ginger Cinnamon</h2>
                        <h3>Remove</h3>
                    </div>
                    <div className="flex flex-col space-y-8">
                        <div>
                            <span
                                className="px-3 py-1 border mx-2 cursor-pointer"
                                onClick={() =>
                                    updateItemQuantity(
                                        item.id,
                                        item.quantity - 1
                                    )
                                }
                            >
                                -
                            </span>{" "}
                            {item.quantity}{" "}
                            <span
                                className="px-3 py-1 border mx-2 cursor-pointer"
                                onClick={() =>
                                    updateItemQuantity(
                                        item.id,
                                        item.quantity + 1
                                    )
                                }
                            >
                                +
                            </span>
                        </div>
                        <div>{item.price}</div>
                    </div>
                </div>
            ))}

            <hr />
            <div className="flex justify-between my-4">
                <p>Subtotal</p>
                <p>₹ {cartTotal}</p>
            </div>
            <div className="flex justify-between mb-4">
                <p>Delivery</p>
                <p>₹ 40</p>
            </div>
            <hr />
            <div className="flex justify-between my-3">
                <p className="font-bold">Total</p>
                <p className="text-2xl mb-2">
                    ₹ {cartTotal !== 0 && Math.floor(cartTotal) + 40}{" "}
                </p>
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
