import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";

export default function Rentals() {
    return (
        <div>
            <Navbar />
            <section className="relative w-full min-h-screen">
                {/* Imagen de fondo */}
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src="/rentals/rentals.jpg"
                        alt="Muebles exclusivos"
                        fill
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        quality={30}
                        className="transition-transform duration-[10000ms] ease-in-out scale-105 animate-subtle-zoom"
                        priority
                    />
                </div>

                {/* Capa de gradiente + contenido */}
                <div className="absolute inset-0 bg-gradient-to-b 
                      from-black/20 via-black/25 to-black/15 
                      flex flex-col justify-center items-center px-2  text-white">
                    <div className="w-full max-w-full sm:max-w-5xl  " style={{ backdropFilter: "blur(1px)" }}>
                        <div className="flex flex-col text-end font-mono ">Rentals</div>
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-white">

                            House / condos / apartments

                        </h1>
                        <p className="text-base md:text-lg  mb-3 max-w-5xl mx-auto backdrop-blur-3xl  text-white">

                            We offer you condos and apartments for your family or private getaway on the best sites at Costa Rica.
                        </p>
                        <p className="text-sm md:text-base  mb-6 max-w-5xl mx-auto backdrop-blur-3xl   text-white">

                        Ask for your favorite location at:  Tamarindo – Conchal – Papagayo area – Flamingo beach – Jaco beach – Puerto viejo beach – Playa chiquita - Manzanillo beach
                        </p>

                        {/* Botones */}
                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <Link href="/es/build-vacation" className="border-2 border-green-400 text-green-400 hover:bg-green-300/20 hover:text-green-500 transition-colors duration-300 px-8 py-3">
                                More Info
                            </Link>
                        </div>
                    </div>
                </div>

               
            </section>
            <Footer />
        </div>
    )
}