import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import Link from "next/link";
import WhatsAppButton from "@/components/general/WhatsAppButton";

export default function OtherServices() {
    return (
        <main className="relative min-h-screen">

            {/* <div
                className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
                style={{
                    backgroundImage: "url('/other-services/study_cover.jpg')",
                    backgroundAttachment: "fixed"
                }}
            /> */}
            <div className="relative z-10">
                <Navbar />
                <div className="max-w-5xl mx-auto pt-36 px-4 ">


                    <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-bold text-start mb-4">STUDENTS</h1>
                            <p className="mb-4">
                                If you are a student and you need or want to learn Spanish and know our beautiful Costa Rica places, this is your best option you can choose a university interchange, or family.
                            </p>
                            {/* Botones */}
                            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                                <Link href="/en/contact" className="border-2 border-green-400 text-green-400 hover:bg-green-300/20 hover:text-green-500 transition-colors duration-300 px-8 py-3">
                                    More Info
                                </Link>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <img
                                src="/other-services/other-1.jpg"
                                alt="Business event"
                                className="w-full h-auto rounded shadow-md"
                            />
                        </div>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto pt-0 px-4 ">


                    <div className="flex flex-col md:flex-row items-start gap-6 mb-12">


                        <div className="md:w-1/2">
                            <img
                                src="/other-services/other-2.jpg"
                                alt="Business event"
                                className="w-full h-auto rounded shadow-md"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-bold text-start mb-4">EVENT PLANNING</h1>
                            <p className="mb-4">
                                If you are a student and you need or want to learn Spanish and know our beautiful Costa Rica places, this is your best option you can choose a university interchange, or family.
                            </p>
                            {/* Botones */}
                            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                                <Link href="/en/contact" className="border-2 border-green-400 text-green-400 hover:bg-green-300/20 hover:text-green-500 transition-colors duration-300 px-8 py-3">
                                    More Info
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto pt-0 px-4 ">


                    <div className="flex flex-col md:flex-row items-start gap-6 mb-12">

                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-bold text-start mb-4">SHOP PRODUCTS MADE IN COSTA RICA</h1>
                            <p className="mb-4">
                                Elemental Herbs Costa Rica. Made for  costarrican yoga, marcial arts instructors and alternative medicine lovers.

                                Great for your healthcare and your daily work.
                            </p>
                            {/* Botones */}
                            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                                <Link href="/en/contact" className="border-2 border-green-400 text-green-400 hover:bg-green-300/20 hover:text-green-500 transition-colors duration-300 px-8 py-3">
                                    More Info
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src="/other-services/other-31.png"
                                alt="Business event"
                               
                            />
                        </div>

                    </div>
                </div>
                <Footer />
                <WhatsAppButton />
            </div>

        </main>
    )
}