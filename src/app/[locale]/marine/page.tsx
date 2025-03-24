import Image from "next/image";
import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";

export default function Marine() {
    const marines = [
        {
            name: "Diving and Catamaran",
            description: "We offer a very popular sailing, snorkel and sunset tour from both Tamarindo and Coco Beach, where you can eat, drink, relax, enjoy the nature and if its dolphin and whale season sail with this incredible and kind animals, just beautiful. Our tours include: Snorkeling – Kayaking – Diving – Fishing or Just plain relaxing – Open bar",
            image: "/marines/marine-1.jpg",
        },
        {
            name: "Paddles Board",
            description: "Stand up paddle boards offer a fun, relaxing way to play on the water. With a minimum of gear, you can paddle ocean surf at Guanacaste, Samara and Playa Chiquita Limon.",
            image: "/marines/marine-2.jpg",
        },
        {
            name: "Rafting",
            description: "Time of adventure in an environment surrounded of security and beauty, its flora and fauna are of great attractive. You will have fun through exciting rapids, as you can enjoy of a dip in their pools during the trip Classification of rapids: II-III-IV",
            image: "/marines/marine-3.jpg",
        },
        {
            name: "Snorkeling",
            description: "If you are looking to swin with costa rican  pacific and atlantic fishes this is your opportunity, our oceans are home to a variety of snorkeling sites that provide breathtaking views of different coral, dolphins, turtles, rays and countless species of tropical fish.",
            image: "/marines/marine-4.jpg",
        },
    ];
    return (
        <div>
            <Navbar />
            {/* Contenedor principal */}
            <div className="container max-w-5xl mx-auto pt-36">
                <h1 className="text-5xl font-bold mb-8">MARINA</h1>

                {/* Sección que recorre cada aventura */}
                <div className="w-full max-w-4xl mx-auto px-4 pb-12">
                <div className="w-full h-12 relative overflow-hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1000 100"
                                        preserveAspectRatio="none"
                                        className={`absolute bottom-0 left-0 w-full h-full `}
                                    >
                                        <path
                                            d="M0,6V0h1000v100L0,6z"
                                            className={`fill-current text-blue-100`}
                                        ></path>
                                    </svg>
                                </div>
                    {marines.map((adventure, index) => {
                        // Alternamos la rotación
                        const rotation = index % 2 === 1 ? "" : "transform scale-x-[-1]";

                        // Alternamos los colores para el triángulo SVG
                        const colors = ["text-fuchsia-100", "text-green-100", "text-amber-100", "text-blue-100"];
                        const fillColorClass = colors[index % colors.length];

                        return (
                            <div key={adventure.name} className="relative mb-20">
                                <div
                                    className={`flex flex-col md:flex-row items-start mb-14
                                                ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                                >
                                    {/* Imagen */}
                                    <div className="md:w-1/2 mb-4 md:mb-0">
                                        <Image
                                            src={adventure.image}
                                            alt={adventure.name}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>

                                    {/* Texto */}
                                    <div className="md:w-1/2 md:px-8">
                                        <h2 className="text-3xl font-extrabold mb-4">{adventure.name}</h2>
                                        <p className="leading-relaxed mb-3">{adventure.description}</p>

                                       
                                    </div>
                                </div>

                                {/* SVG decorador con fondo transparente */}
                                <div className="w-full h-12 relative overflow-hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1000 100"
                                        preserveAspectRatio="none"
                                        className={`absolute bottom-0 left-0 w-full h-full ${rotation}`}
                                    >
                                        <path
                                            d="M0,6V0h1000v100L0,6z"
                                            className={`fill-current ${fillColorClass}`}
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}