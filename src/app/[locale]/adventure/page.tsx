import Image from "next/image";
import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";

export default function Adventure() {
    const adventures = [
        {
            name: "ATV",
            description: "This is a fun ride tour in track kilometers length at our different beaches perfect for making friends, enjoy with family and get wild on the nature, the tour can be divided in stages with obstacles, curves, and viewpoints, also you can made a rest stop at our ocean and mountain view at our typical food restaurants. You won’t miss this tour!!",
            image: "/adventures/adventure-1.jpg",
        },
        {
            name: "Bike and Kayak",
            description: "This tour offers the opportunity to experience two adrenaline sports in an atmosphere of unique nature and landscape. Designed for couples, families, groups of friends or students is not require a physical condition out of ordinary. At Fortuna y Puerto Viejo.",
            itemsDescription: ["Equipment", "Water", "Transportation and fruits"],
            image: "/adventures/adventure-2.jpg",
        },
        {
            name: "Bungee Jumping",
            description: "Do you dare to jump from a very high place? Don’t worry you will be attached to a strong, long rope that stretches and that keeps you from hitting the ground, when you practice this definitively will taste freedom and extra joy of living, one of our best adrenaline sports at Costa Rica.",
            image: "/adventures/adventure-3.jpg",
        },
        {
            name: "Canopy",
            description: "A unique experience full of adrenaline, where you can fly around beautiful large trees, you can swing to swing over cloudy forest, volcanoes surrounds and views over the Gulf of Nicoya Guanacaste. Canopy tour consist of flying over 5 cables or more, all equipment is safety guarantee handle only by professionals, training and equipment will be provided all times. Also you can ask for canopy tour at night and discover the mysteries of the night.",
            image: "/adventures/adventure-4.jpg",
        },
        {
            name: "Waterfalls and Canyoning",
            description: "Costa Rica offers more than 50 beautiful crystal water scenes, where you can combine and practice your favorite adrenaline adventure such as: canopy, hanging bridge, rappel and canyoning Choose your favorite place:",
            itemsDescription: ["Arenal – Fortuna Alajuela", "outh Caribbean and Puerto Viejo Talamanca", "Chocolate factory tour included"],
            image: "/adventures/adventure-5.jpg",
        },
        {
            name: "Caves Tour",
            description: "Beautiful adrenaline and physical experience, unique in attractiveness, itself tells the story over of 70 million years. At National Park Barra Honda, Venado Caves.",
            itemsDescription: ["Transportation", "Healthy snacks", "Equipment if necessary"],
            image: "/adventures/adventure-6.jpg",
        },
        {
            name: "Hanging Bridges",
            description: "Aerial tram tour that allows you to explore the top of the rainforest, enjoy panoramic views, see the Arenal Lake and Volcano, the tour takes place accompanied by a naturalist guide who will teach you about the richness of the tropical Rainforest. A magical and refreshment tour.",
            image: "/adventures/adventure-7.jpg",
        },
        {
            name: "Hiking",
            description: "Discover the magic of our cloudy forest, travelling through the paths inside the forest You can guided Walk in Santa Elena Cloud Forest, Curi-Cancha Reserve at Monteverde. Made Coffee tours and also enjoy Night Walk Cloud forest tour Enjoy Arenal bird observation Walk, hummingbird sanctuary and more. And get to know Celeste River hiking this beautiful place, known for its pure light blue color made by Tenorio volcano Our guide will indicate the different farming fields of each area and their main socio-economic and cultural.",
            image: "/adventures/adventure-8.jpg",
        },
        {
            name: "Horseback Ridding",
            description: "Ride up across Costa Rica nature on horseback, like a real “Sabanero”, this tour will included a tour guide and beautiful views also you will be able to learn about Costa Rica ecological and local people history. Also Costa Rica offer the famous “topes” a tradition where local people are gathered with their horses and ride over the streets, very common in Liberia, Cañas Guanacaste.",
            image: "/adventures/adventure-9.jpg",
        },
        {
            name: "Sky Board",
            description: "Try this new fun 25 minutes of pure Adrenaline pumping with all its natural surroundings that give beautiful sceneries. You will be able to sky surf over a light weight board. Participants will take less than a 5 minute to raise in the air and enjoy an innovative and unparalleled activity.",
            image: "/adventures/adventure-10.jpg",
        },
        {
            name: "Sky Diving",
            description: "We welcome you to try the human fly accompanied with professionals over beauty beaches. Rivers, islands or mountains Safety and best equipment of the market guarantee",
            itemsDescription: ["Include: transportation and healthy snacks"],
            image: "/adventures/adventure-11.jpg",
        },


    ];
    return (
        <div>
            <Navbar />
            {/* Contenedor principal */}
            <div className="container max-w-5xl mx-auto pt-36">
                <h1 className="text-5xl font-bold mb-8">ADVENTURE</h1>

                {/* Sección que recorre cada aventura */}
                <div className="w-full max-w-4xl mx-auto px-4 pb-12">
                    {adventures.map((adventure, index) => {
                        // Alternamos la rotación
                        const rotation = index % 2 === 1 ? "" : "transform rotate-180";

                        // Alternamos los colores para el triángulo SVG
                        const colors = ["text-blue-100", "text-green-100", "text-amber-100"];
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