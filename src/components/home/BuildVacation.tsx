// components/BuildVacation.tsx
import Link from 'next/link';

const BuildVacation = () => {
  return (
    <div className="relative h-80 bg-blue-500">
      <div className="absolute inset-0">
        <img
          src="/home/barmar.jpeg"
          alt="Ocean waters"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
        <h2 className="text-4xl font-bold mb-4">BUILD YOUR VACATION</h2>
        <p className="text-xl mb-6">Design your package holiday</p>
        <Link href="/es/build-vacation" className="border-2 border-white hover:bg-white hover:text-blue-500 transition-colors duration-300 px-8 py-3">
          Click Here
        </Link>
      </div>
    </div>
  );
};

export default BuildVacation;