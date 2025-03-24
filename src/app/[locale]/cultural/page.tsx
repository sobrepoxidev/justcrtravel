import Image from "next/image";
import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";

export default function Cultural() {
    const culturals = [
        {
            name: "Cities Tour",
            description: "Costa Rica main towns have a lot to offer since their beautiful museums, markets where costarrican sale their hand made products and delicious typical food, great place to make friends and know our culture and traditions. Great history and classical beautiful buildings are encounter in our small towns, you will be guide in all times.",
            itemsDescription: ["HEREDIA", "SAN JOSE","CARTAGO", "ALAJUELA."],
            image: "/culturals/cultural-1.jpg",
        },
        {
            name: "Night Life",
            description: "We offer you Private and safe transportation to our best and craziest spots in our main cities.",
            itemsDescription: ["La Sabana", "Escazú", "San José and Paseo Colón."],
            image: "/culturals/cultural-2.jpg",
        },
        {
            name: "National Parks",
            description: "Costa Rica have a great national history and also a national history this is the reason why our company want you to know or most valued treasure our national park system is a network of protected rainforests, tropical dry forests, cloud forests and marine areas. Costa Rica has been a world recognized leader in conservation policies with protected areas that encompass over 25 percent of its total landmass have- the highest in the world. Also we offer private reserves that have been established to protect the natural habitat and biodiversity. Corcovado – Manuel Antonio – Gandoca – Tortuguero – Hitoy Cerere – Braulio Carrillo – Volcan Poas – Volcan Arenal -Volcan Tenorio – Parques nubosos – Monteverde – Chirripo – Volcan Turrialba – Tapanti – Rincon de la Vieja – Santa Rosa – Caño Negro – Marino las Baulas – Reserve marina lomas Barbudal – Palo verde – Isla del coco – Ostional",
            image: "/culturals/cultural-3.jpg",
        },
        {
            name: "Indigenous Reserve",
            description: "Malekus or guatusos: Come to know one of the smallest indigenous groups at Costa Rica , this amazing people preserve their physical features and their cultural expressions.. They inhabit three settlements: El Palenque Margarita, Tonjibe and the Sun. Their main agricultural activity is the cultivation of cacao, pejibaye, palmito, also are river fishermen. They work artisanal, ceramic figures, wooden articles in rafts, and arches. A great experience. Also they are well known by their craziest and wild parties.",
            image: "/culturals/cultural-4.jpg",
        },
    ];
    return (
        <div>
            <Navbar />
            {/* Contenedor principal */}
            <div className="container max-w-5xl mx-auto pt-36">
                <h1 className="text-5xl font-bold mb-8">CULTURAL</h1>

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
                                            className={`fill-current text-amber-100`}
                                        ></path>
                                    </svg>
                                </div>
                    {culturals.map((adventure, index) => {
                        // Alternamos la rotación
                        const rotation = index % 2 === 1 ? "" : "transform scale-x-[-1]";

                        // Alternamos los colores para el triángulo SVG
                        const colors = ["text-blue-100", "text-green-100", "text-red-100", "text-amber-100"];
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

                                        {/* Si existe itemsDescription, lo mostramos en una lista */}
                                        {adventure.itemsDescription && (
                                            <ul className="list-disc list-inside ml-4">
                                                {adventure.itemsDescription.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
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