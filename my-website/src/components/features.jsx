export default function Features() {
    const features = [
        { title: "Fast Development", desc: "Tailwind and React make building UI components lightning fast." },
        { title: "Responsive Design", desc: "Your website looks great on all devices automatically." },
        { title: "Customizable", desc: "Easily adjust styles with utility classes." },
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-12 text-indigo-600">Features</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                            <p className="text-gray-600">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
