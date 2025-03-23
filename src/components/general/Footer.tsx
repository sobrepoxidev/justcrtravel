import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className="grid grid-cols-1 bg-white p-16">
            <div className="">
                <div className="grid grid-cols-3 items-start justify-center text-center">
                    <div className="flex  items-start justify-center">

                        <Image
                            src="/home/logo-just-costarica-travel.png"
                            alt="Just Costa Rica Travel"
                            width={90}
                            height={90}
                            className="rounded-full align-middle"
                        />

                    </div>
                    <div className="flex justify-center">
                        <Link href="/en/build-your-vacation">
                            <Image
                                src="/home/buildyourvacation2.gif"
                                alt="Just Costa Rica Travel"
                                width={185}
                                height={185}
                                className="align-middle"
                            />
                        </Link>

                    </div>
                    <div className=" px-4 text-sm font-light">
                        <p>
                            JustCostaRicaCR WordPress Theme © Built by DigitalVox /  Office: (+506) 60242561 /  Whatsapp: (+506) 72966451 /  US/Canada Toll Free: 866-319-6020
                        </p>
                    </div>
                </div>
            </div>
            <div className=" flex flex-row justify-center font-thin m-6 pt-3 border-t  border-gray-600">
                <Link href="/es" className=" hover:text-orange-300 hover:underline flex items-center gap-x-1">
                    Facebook 
                </Link>  
                –   
                <Link href="/es" className=" hover:text-orange-300 hover:underline flex items-center gap-x-1">
                    YouTube
                </Link>
                –
                <Link href="/es" className=" hover:text-orange-300 hover:underline flex items-center gap-x-1">
                    Instagram
                </Link>


                
            </div>
            
        </div>
    );
}
