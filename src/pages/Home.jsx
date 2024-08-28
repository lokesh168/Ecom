import { ShieldCheck, Apple, Pizza, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { lazy } from "react";

const Categories = lazy(() => import("../components/Categories"));

const Home = () => {
    return (
        <main>
            <section className="px-10 py-5 mt-5">
                <div className="md:flex mx-auto justify-center md:space-x-16">
                    <div>
                        <img
                            className="w-96 rounded-md"
                            src="https://images.unsplash.com/photo-1628200487311-7bdfd5e6ace3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJldmVyYWdlfGVufDB8MXwwfHx8MA%3D%3D"
                            alt="home-banner"
                        />
                    </div>
                    <div className="min-w-24 sm:p-10 ml-0 md:ml-10">
                        <h1 className="my-5 text-4xl leading-[3.5rem] font-signature md:text-3xl font-bold">
                            Every day is unique, <br /> just like our food.
                        </h1>
                        <h2 className="my-5 md:w-96">
                            Each day brings new experiences, and just like that,
                            our food offers diverse flavors.
                        </h2>
                        <h2 className="my-5 md:w-96">
                            From savory dishes to sweet treats, every bite is a
                            reminder that life’s variety is to be savored.
                        </h2>
                        <Link to="/collections">
                            <button className="uppercase bg-slate-900 py-5 mt-4 px-10 rounded-md text-white hover:bg-[#AF8260] transition-all">
                                Browse Food
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Apd */}
            <section className="md:flex flex justify-end items-center flex-col my-5 py-10 sm:justify-center sm:items-center space-y-10 bg-[#F4F4F4]">
                <div className="flex flex-col md:flex-row space-y-5 md:space-x-10 justify-center items-center">
                    <span className="flex space-x-2 uppercase">
                        <Apple /> <span>450+ food categories</span>
                    </span>
                    <span className="flex space-x-2 uppercase">
                        <Pizza /> <span>certified organic meals</span>
                    </span>
                    <span className="flex space-x-2 uppercase">
                        <Truck /> <span>free home & office devlivery</span>
                    </span>
                    <span className="flex space-x-2 uppercase">
                        <ShieldCheck /> <span>sample food tests</span>
                    </span>
                </div>
                <div>
                    <button className="uppercase border-2 py-5 px-14 border-black text-black hover:bg-[#AF8260] transition-all">
                        learn More
                    </button>
                </div>
            </section>

            {/* Cateogories */}
            <Categories />

            {/* Blog post */}
            <section className="my-5 py-10 bg-[#F4F4F4] px-14">
                <div className="container">
                    <div className="grid  lg:grid-cols-4 md:grid-cols-4 grid-rows-1 gap-4">
                        <div>
                            <img
                                className="rounded"
                                src="https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfDF8MHx8fDA%3D"
                                alt="something about tea"
                            />
                        </div>
                        <div>
                            <h2 className="text-md md:text-2xl mb-5">
                                Something About Tasty Food
                            </h2>
                            <p className="text-sm md:text-md">
                                Indulge in the world of flavors where every bite
                                is a journey. Tasty food is a celebration of the
                                senses, blending rich aromas, vibrant colors,
                                and delightful textures.
                            </p>
                            <button className="mt-5 p-4 border-2 border-black hover:bg-[#AF8260]">
                                Read More
                            </button>
                        </div>
                        <div>
                            <img
                                className="rounded"
                                src="https://images.unsplash.com/photo-1603471431201-a526d16e4569?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJldmVyYWdlfGVufDB8MXwwfHx8MA%3D%3D"
                                alt="something about tea"
                            />
                        </div>
                        <div>
                            <h2 className="text-md md:text-2xl mb-5">
                                Something About Beverages
                            </h2>
                            <p className="text-sm md:text-md">
                                Beverages are the perfect companions to any
                                meal, offering refreshment and flavor. From the
                                warmth of a morning coffee to the fizz of a cold
                                soda, they elevate every moment.
                            </p>
                            <button className="mt-5 p-4 border-2 border-black hover:bg-[#AF8260]">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reverse homepage */}
            <section className="flex flex-col md:flex md:flex-row-reverse mx-auto justify-center md:space-x-16 space-x-6 px-10 md:px-0">
                <div>
                    <img
                        className="w-96 mx-auto md:mx-0 rounded-md"
                        src="https://images.unsplash.com/photo-1628200508115-3f23c3be57b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmV2ZXJhZ2V8ZW58MHwxfDB8fHww"
                        alt="home-banner"
                    />
                </div>
                <div className="md:min-w-24 p-0 md:p-10 md:ml-10 ml-0">
                    <h1 className="my-5 text-3xl font-bold">
                        Wholesale bloggers day is unique, <br /> just like our
                        tea
                    </h1>
                    <h2 className="my-5 md:w-96">
                        Each day in the world of wholesale bloggers is special,
                        just like our tea.
                    </h2>
                    <h2 className="my-5 md:w-96">
                        Every sip delivers a unique experience, blending rich
                        flavors that inspire creativity and connection with
                        others.
                    </h2>
                    <button className="uppercase bg-slate-900 py-5 px-10 rounded-md text-white hover:bg-[#AF8260] transition-all">
                        Browse Teas
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Home;
