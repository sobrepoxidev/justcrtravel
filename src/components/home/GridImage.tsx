import Image from "next/image";

export default function GridImage() {

    return (
        <div className="grid grid-cols-3 gap-x-0.5 gap-y-1.5 bg-white">
            <div className=" bg-fuchsia-300">
                <Image
                    src="/home/thiscr1.jpg"
                    alt="Costa Rica main specialty"
                    width={500}
                    height={700}
                    className="w-full h-auto object-cover"
                />
            </div>
            <div className="bg-green-300">
                <Image
                    src="/home/thiscr2.jpg"
                    alt="Costa Rica main specialty"
                    width={500}
                    height={700}
                    className="w-full h-auto object-cover"
                />
            </div>
            <div className="bg-red-300">
                <Image
                    src="/home/thiscr3.jpg"
                    alt="Costa Rica main specialty"
                    width={500}
                    height={700}
                    className="w-full h-auto object-cover"
                />
            </div>
            <div className="bg-yellow-300">
                <Image
                    src="/home/thiscr4.jpg"
                    alt="Costa Rica main specialty"
                    width={500}
                    height={700}
                    className="w-full h-auto object-cover"
                />
            </div>
            <div className="bg-cyan-300">
                <Image
                    src="/home/thiscr5.jpg"
                    alt="Costa Rica main specialty"
                    width={500}
                    height={700}
                    className="w-full h-auto object-cover"
                />
            </div>
            <div className="bg-blue-300">
                <Image
                    src="/home/thiscr6.jpg"
                    alt="Costa Rica main specialty"
                    width={500}
                    height={700}
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>
    );
}