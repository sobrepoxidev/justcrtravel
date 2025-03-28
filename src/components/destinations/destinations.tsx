import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Destinations() {
    const t = useTranslations('destinations');
    const keys = [
        'arenal',
        'jaco',
        'malpais',
        'manuelAntonio',
        'montezuma',
        'monteverde',
        'osa',
        'papagayo',
        'puertoViejo',
        'samara',
        'tamarindo'
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 pt-20 sm:pt-36 pb-0">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight text-gray-950">{t('title')}</h1>

            {keys.map((key, idx) => (
                <details
                    key={key}
                    className="border border-gray-300 py-3 px-4"
                    open={idx === 0}
                >
                    <summary className="cursor-pointer flex items-center text-blue-600 text-lg font-semibold uppercase">
                        → {t(`${key}.title`)}
                    </summary>

                    <div className="mt-4">
                        <div className="max-w-full flex flex-col items-center ">
                        <div className="w-full" style={{ aspectRatio: "2.02" }}>
                            <Image
                                src={`/${t(`${key}.image`)}`}
                                alt={t(`${key}.title`)}
                                width={1000}
                                height={0}
                                className="w-full h-auto rounded shadow-m"
                                priority
                            />
                            </div>
                        </div>
                        <p className="mt-1 text-justify whitespace-pre-line text-base font-thin ">
                            {t(`${key}.description`)}
                        </p>
                    </div>
                </details>
            ))}
        </div>
    );
}
