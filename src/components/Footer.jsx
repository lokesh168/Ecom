import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="my-5 py-10 bg-[#F4F4F4] px-5 md:px-14">
            <div className="container">
                <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 grid-rows-1 gap-4">
                    <div>
                        <h2 className="text-2xl mb-5">Collections</h2>
                        <ul className="space-y-2 cursor-pointer">
                            <li>Black Tea</li>
                            <li>Green Tea</li>
                            <li>Soft Tea</li>
                            <li>Hard Tea</li>
                            <li>Crispy Tea</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl mb-5">Learn</h2>
                        <ul className="space-y-2 cursor-pointer">
                            <li>About Us</li>
                            <li>About Our Teas</li>
                            <li>Tea Academy Tea</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl mb-5">Customer Service</h2>
                        <ul className="space-y-2 cursor-pointer">
                            <li>Ordering and payment </li>
                            <li>Delivery</li>
                            <li>Privacy and policy </li>
                            <li>Hard Tea</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl mb-5">Contact Us</h2>
                        <ul className="space-y-3 cursor-pointer">
                            <li className="flex space-x-5">
                                <MapPin size={34} />
                                <p>
                                    3 Falahi, Falahi St, Pasdaran Ave, Shiraz,
                                    Fars Provieence Iran
                                </p>
                            </li>
                            <li className="flex space-x-5">
                                <Mail size={20} />
                                <p>Email: amoopur@gmail.com</p>
                            </li>{" "}
                            <li className="flex space-x-5">
                                <Phone size={20} />
                                <p>Tel: +98 9173038406 </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
