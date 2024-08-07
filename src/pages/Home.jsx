import { Coffee } from "lucide-react";
import homeBanner from "../assets/Home-Banner.webp";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <section>
            {/* Hero */}
            <section className="px-10 py-5 mt-5">
                {/* Home Cover */}
                <div className="flex mx-auto justify-center space-x-16">
                    <div>
                        <img
                            className="w-96"
                            src={homeBanner}
                            alt="home-banner"
                        />
                    </div>
                    <div className="min-w-24 p-10 ml-10">
                        <h1 className="my-5 text-3xl font-bold">
                            Every day is unique, <br /> just like our tea
                        </h1>
                        <h2 className="my-5 w-96">
                            Lorem ipsum dolor sit amet consectetur. Orci nibh
                            nullam risus adipiscing odio. Neque lacus nibh eros
                            in.
                        </h2>
                        <h2 className="my-5 w-96">
                            Lorem ipsum dolor sit amet consectetur. Orci nibh
                            nullam risus adipiscing odio. Neque lacus nibh eros
                            in.
                        </h2>
                        <button className="uppercase bg-slate-900 py-5 px-10 rounded-md text-white hover:bg-[#AF8260] transition-all">
                            Browse Teas
                        </button>
                    </div>
                </div>
            </section>

            {/* Apd */}
            <div className="flex flex-col my-5 py-10 justify-center items-center space-y-10 bg-[#F4F4F4]">
                <div className="flex space-x-10 justify-center items-center">
                    <span className="flex space-x-2">
                        <Coffee /> <span>450+ KIND OF LOOSEF TEA</span>
                    </span>
                    <span className="flex space-x-2">
                        <Coffee /> <span>CERTIFICATED ORGANIC TEAS</span>
                    </span>
                    <span className="flex space-x-2">
                        <Coffee /> <span>FREE DELIVERY</span>
                    </span>
                    <span className="flex space-x-2">
                        <Coffee /> <span>SAMPLE FOR ALL TEAS</span>
                    </span>
                </div>
                <div>
                    <button className="uppercase border-2 py-5 px-14 border-black text-black hover:bg-[#AF8260] transition-all">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Cateogories */}
            <div>
                <h2 className="text-center text-4xl">Our Collection</h2>

                <div className="container flex justify-evenly my-10 mx-auto">
                    <div className="mx-5 text-center">
                        <img
                            className="rounded"
                            src="https://images.unsplash.com/photo-1523920290228-4f321a939b4c?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="something about tea"
                        />
                        <p className="uppercase mt-5 font-bold text-md">
                            black tea
                        </p>
                    </div>
                    <div className="mx-5 text-center">
                        <img
                            className="rounded"
                            src="https://images.unsplash.com/photo-1523920290228-4f321a939b4c?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="something about tea"
                        />
                        <p className="uppercase mt-5 font-bold text-md">
                            hot tea
                        </p>
                    </div>
                    <div className="mx-5 text-center">
                        <img
                            className="rounded"
                            src="https://images.unsplash.com/photo-1523920290228-4f321a939b4c?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="something about tea"
                        />
                        <p className="uppercase mt-5 font-bold text-md">
                            cold tea
                        </p>
                    </div>
                </div>

                <div className="container flex justify-evenly my-10 mx-auto">
                    <div className="mx-5 text-center">
                        <img
                            className="rounded"
                            src="https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=1478&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="something about tea"
                        />
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
                            hot tea
                        </p>
                    </div>
                    <div className="mx-5 text-center">
                        <img
                            className="rounded"
                            src="https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=1478&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="something about tea"
                        />
                        <p className="uppercase mt-5 font-bold text-md">
                            cold tea
                        </p>
                    </div>
                </div>
            </div>

            {/* Blog post */}
            <div className="my-5 py-10 bg-[#F4F4F4] px-14">
                <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 grid-rows-1 gap-4">
                    <div>
                        <img
                            className="rounded"
                            src="https://plus.unsplash.com/premium_photo-1670954418690-37e178110999?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="something about tea"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl mb-5">Something About Tea</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. In dictum non consectetur a
                            erat nam at. Risus nec feugiat in fermentum posuere
                            urna nec tincidunt praesent.{" "}
                        </p>
                        <button className="mt-5 p-4 border-2 border-black hover:bg-[#AF8260]">
                            Read More
                        </button>
                    </div>
                    <div>
                        <img
                            className="rounded"
                            src="https://plus.unsplash.com/premium_photo-1670954418690-37e178110999?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="something about tea"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl mb-5">Something About Tea</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. In dictum non consectetur a
                            erat nam at. Risus nec feugiat in fermentum posuere
                            urna nec tincidunt praesent.{" "}
                        </p>
                        <button className="mt-5 p-4 border-2 border-black hover:bg-[#AF8260]">
                            Read More
                        </button>
                    </div>
                </div>
            </div>

            {/* Reverse homepage */}
            <div className="flex mx-auto flex-row-reverse justify-center space-x-16">
                <div>
                    <img className="w-96" src={homeBanner} alt="home-banner" />
                </div>
                <div className="min-w-24 p-10 ml-10">
                    <h1 className="my-5 text-3xl font-bold">
                        Wholesale bloggers day is unique, <br /> just like our
                        tea
                    </h1>
                    <h2 className="my-5 w-96">
                        Lorem ipsum dolor sit amet consectetur. Orci nibh nullam
                        risus adipiscing odio. Neque lacus nibh eros in.
                    </h2>
                    <h2 className="my-5 w-96">
                        Lorem ipsum dolor sit amet consectetur. Orci nibh nullam
                        risus adipiscing odio. Neque lacus nibh eros in.
                    </h2>
                    <button className="uppercase bg-slate-900 py-5 px-10 rounded-md text-white hover:bg-[#AF8260] transition-all">
                        Browse Teas
                    </button>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </section>
    );
};

export default Home;
