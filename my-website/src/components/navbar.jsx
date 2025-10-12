import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <h1 className="text-2xl font-bold text-indigo-600">MyWebsite</h1>

                <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <li><Link to="/" className="hover:text-indigo-600">Home</Link></li>
                    <li><Link to="/about" className="hover:text-indigo-600">About</Link></li>
                    <li><Link to="#" className="hover:text-indigo-600">Services</Link></li>
                    <li><Link to="#" className="hover:text-indigo-600">Contact</Link></li>
                </ul>

                <button className="md:hidden p-2 rounded-md border border-gray-300">☰</button>
            </div>
        </nav>
    );
}
