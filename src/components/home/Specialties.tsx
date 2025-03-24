// Specialties.tsx
import Image from 'next/image';

const specialties = [
    {
        src: '/home/specialtiesicon1.png',
        name: 'SPORTS FOR TRAVELLERS',
        description: 'Travellers enjoying active sports in the best places of Costa Rica'
    },
    {
        src: '/home/specialtiesicon2.png',
        name: 'FISH - HIKE - FLY AND SWIN',
        description: 'Discover fresh new saltwater-fishing techniques and destinations with incredible panoramic views. Great for extreme sports and nature lovers.'
    },
    {
        src: '/home/specialtiesicon3.png',
        name: 'FOOTBALL',
        description: 'Football is the most popular sport in Costa Rica. Costa Rica has long been considered an exporter of footballers within Central America and Europe.'
    },
    {
        src: '/home/specialtiesicon4.png',
        name: 'SURF',
        description: 'Costa Rica has two distinct coasts — Pacific Ocean and the Caribbean Sea — offering one great surf break after another.'
    }
];
const just = [
    {
        src: '/home/just1.webp',
        name: 'HEALTH',
        description: 'With us you can integrate your medical, beauty and mental needs.We offer wellness to your body and mind with accredited professional physicians.'
    },
    {
        src: '/home/just2.png',
        name: 'ESTHETIC BEAUTY AND WELLNESS',
        description: 'Just Costa Rica Travel want you to probe these exquisite combinations at our best nature privilege spot characterized by its unique climate and sightseeing...'
    },
    {
        src: '/home/just3.png',
        name: 'DENTAL TREATMENTS',
        description: 'We count with the professional services of one of the most important dental practicing in the country located at San Jose, just at 45 minutes from the International Airport.'
    },
    {
        src: '/home/just4.png',
        name: 'MEDICAL TREATMENTS',
        description: 'You can also count with the services of Costa Rica best private hospitals, and surgeons. Quote here for a medical valuation.'
    }
];

const srcMainImage = '/home/mainspeciaist.webp';

export default function Specialties() {
    return (
        <div>
            <div className="px-4 py-8 bg-white" >
                <div className="flex flex-col md:flex-row gap-14 items-center justify-center mx-auto">
                    {/* Columna Izquierda: Imagen principal */}
                    <div className="md:w-1/3">
                        <Image
                            src={srcMainImage}
                            alt="Costa Rica main specialty"
                            width={500}
                            height={700}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Columna Derecha: Texto + Especialidades */}
                    <div className="md:w-1/2 flex flex-col justify-center space-y-6 ">
                        <h2 className="text-3xl text-justify  text-gray-900">
                            <span className="font-bold text-gray-800">In addition to a great trip to our country </span>

                            we offer other specialties of our company.
                        </h2>

                        {/* Grid de 2 columnas en pantallas grandes, 1 columna en móviles */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {specialties.map((item) => (
                                <div key={item.name}>
                                    {/* Contenedor flex para icono y nombre en la misma línea */}
                                    <div className="flex items-center space-x-2">
                                        <Image
                                            src={item.src}
                                            alt={item.name}
                                            // Calculando ~85% de 50px ≈ 42px
                                            width={70}
                                            height={70}
                                            className="w-[42px] h-[42px] object-contain"
                                        />
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {item.name}
                                        </h3>
                                    </div>

                                    {/* Descripción debajo */}
                                    <p className="text-gray-600 mt-2">
                                        {item.description}
                                    </p>
                                </div>

                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div className="px-4 py-8 bg-white" >
                <div className="flex flex-col md:flex-row gap-14 items-center justify-center mx-auto">


                    {/* Columna Derecha: Texto + Especialidades */}
                    <div className="w-full sm:max-w-6xl flex flex-col justify-center space-y-6 ">
                        <h2 className="text-4xl text-gray-900 ">
                            <span className="font-bold text-gray-800">Just Costa Rica Travel </span>

                            <span className='text-pretty'>offered tourism focused on health and wellness.</span>
                        </h2>

                        {/* Grid de 2 columnas en pantallas grandes, 1 columna en móviles */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                            {just.map((item) => (
                                <div key={item.name} className="flex items-start space-x-4">
                                    <Image
                                        src={item.src}
                                        alt={item.name}
                                        width={100}
                                        height={100}
                                        className="w-[100px] h-[100px] object-contain"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-600 mt-1 text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                <h3 className="text-2xl text-gray-900 text-center mt-4">
                            <span className="font-bold text-gray-800">This is </span>

                            <span className='text-pretty'>Costa Rica</span>
                        </h3>

            </div>
            
        </div>
    );
}
