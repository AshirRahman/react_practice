export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white pt-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
                Build Beautiful Websites Effortlessly
            </h1>
            <p className="text-lg md:text-xl text-center max-w-2xl mb-6">
                React + Tailwind CSS gives you power, speed, and style. Let’s create something amazing together!
            </p>
            <button className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
                Get Started 🚀
            </button>
        </section>
    );
}
