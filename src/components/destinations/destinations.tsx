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
                            <Image
                                src={`/${t(`${key}.image`)}`}
                                alt={t(`${key}.title`)}
                                width={1000}
                                height={0}
                                className="max-w-full"
                                priority
                            />
                        </div>
                        <p className="mt-2 text-justify whitespace-pre-line ">
                            {t(`${key}.description`)}
                        </p>
                    </div>
                </details>
            ))}
        </div>
    );
}
