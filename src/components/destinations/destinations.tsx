import Image from 'next/image';

export default function Destinations() {
    const items = [
        {
            src: 'destinations/destinity-1.jpg',
            title: 'ARENAL',
            description: 'La Fortuna is located in the Alajuela province. Fortuna is the closest town to the Arenal Volcano, which is one of the world’s most active volcanoes. Fortuna is one of the Costa Rica`s most visited places. La Fortuna, Costa Rica, has a lot of things to do for everybody. In this destination, tourists can experience hot springs, hanging bridges, whitewater rafting, waterfalls, natural history walks, canopy tours and its most important attraction, the Arenal Volcano (check out the Fortuna Tours list). Back in 1968, the Arenal Volcano erupted and destroyed the whole town, in that time called Pueblo Nuevo. By the time, agriculture was the main generator of resources in this area. After the main eruption, the volcano kept having small eruptions constantly. In this way, the Arenal Volcano became famous, because visitors could enjoy the lava flows coming out the volcano. Nowadays, tourism is the most important activity in this area. In Fortuna, visitors can find accommodations for everybody and for every budget: bed & breakfast, small cabins, mid range hotels and luxury hotels. You can do a lot of things in Fortuna. It is worth, to spend at least 2 nights in this beautiful town. There are restaurants, banks, ATMS`s, tour advisors, rent a car companies and a lot of adventure to experience. You could arrive to Fortuna without an itinerary, and time wouldn’t be enough to enjoy the most important attractions of the area. Once visitors leave Fortuna, most of the time they mainly head to Monteverde, Manuel Antonio and to the Guanacaste beaches.'},
        { src: 'destinations/destinity-2.jpg', title: 'JACO BEACH', description: 'Jacó Beach is an exciting and thrilling place in the Pacific Coast of Costa Rica. Jaco is one of the most popular Costa Rica destinations, located in the province of Puntarenas. In Jacó Beach Costa Rica, you will find accommodations, restaurants, bars, tour operators and facilities that will perfectly fulfill your most demanding needs. You can have lunch in restaurants with a fantastic view, enjoy a night dance in a disco by the seaside or if you prefer just have a romantic walk across three miles of beach known for its water sports, surf and the beautiful sunsets. The most amazing panoramic views can be seen all around the place, with palm trees, hammocks and chairs where you can rest while you take the sun or relax reading a good book. If you are looking for a little more adrenaline and exercise, you can find tennis courts, beach volleyball tournaments or you can rent a bike or horse and do some self guided tour through the place. Sport fishing, surfing and many other water sports are there just waiting for you. This place has become an important tourist destination and can be considered one the largest seaside community in Central America. Some of the tours you can enjoy at Jaco beach are: ATV tours, canopy tours, an aerial tram, Jet Ski tours, kayaking, a sunset cruise, and many other tours are available for your vacation at Jaco Beach Costa Rica.' },
        { src: 'destinations/destinity-3.jpg', title: 'MAL PAÍS', description: 'Malpais is located in the Nicoya Peninsula. It is a tranquil and a small coastal community with houses and some few hotels loosely spread out along five kilometers of road. Lovely hotels and vacation rentals ranging from luxury to rustic, often overlooking scenic beachfront where the surf crashes over jagged rocks are found in this surfing spot. At the southern end of Mal Pais you’ll find the small fishermen port where boat and fishing tours will take you around the tip of the Nicoya Peninsula. In Spanish Mal Pais, means “bad land”—this is a place where the beach stretches for miles and the waves can make even the most seasoned of surfers drool. Malpaís and the surrounding area have become one of Costa Rica’s hottest destinations for surfing. There is a small village, which sustains itself through a combination of agriculture and fishing. That has changed since both national and international surfers heard about the consistently good waves that the area receives all year round. It is now a surfer’s paradise with consistent waves, good swells and a long beach break. People were hooked by the waves and beauty of the nature.' },
        { src: 'destinations/destinity-4.jpg', title: 'MANUEL ANTONIO', description: 'Manuel Antonio is located in the province of Puntarenas. We can say Manuel Antonio is a small corner of Costa Rica. In this place, tourists can find the excitement and adventure of a vacation in the tropical forest, surrounded by one of the Costa Rica’s most beautiful natural environments, enjoying modern conveniences at the same time. Manuel Antonio Costa Rica is the natural habitat of species such as the endangered squirrel monkey (endemic to the area), white faced capuchin monkey, raccoons, three and two-toed sloths, white-nosed coaties, brown pelicans, black-collared hawks and green kingfishers. They share the space with primary and secondary forests. There is also a mangrove swamp, that cover covers about 44.5 acres, adding to the biodiversity of the region. This is one of the most visited tourist destinations in Costa Rica. Manuel Antonio is unique because of the fusion of scenic mountain beauty and an active lifestyle. From hiking, rafting/kayaking, canopy, bird watching or sport fishing. Manuel Antonio Costa Rica offers something for everyone needs. Here you can find a great variety of accommodation, dining and recreation options, as well as spectacular scenery of landscapes on the coast. Manuel Antonio Costa Rica has beaches, the rain forest, the wildlife and the entertainment. According to the Washington Times, Manuel Antonio is “one of the finest views of the Pacific Ocean in the world”.' },
        { src: 'destinations/destinity-5.jpg', title: 'MONTEZUMA', description: 'Montezuma is located on the southern Nicoya Peninsula. It used to be a small remote fishing village, until the early 1980’s, when people from all over the world, came to discover the beauty and magic of this place, which is quite unlike other towns in Costa Rica. Some people have stayed permanently, creating a thriving community of artists, conservationists, musicians and chefs. This place is very famous for its breathtaking beauty and vibrant international culture and cuisine. Great town to avoid crowds, casinos, fast food restaurants, malls and the hurry of life. Unlike many other areas of Costa Rica, Montezuma hasn’t been touched by commercial development. Montezuma has become a popular beach vacation destination because of its ‘hippie’ lifestyle; Montezuma is a great place to stay at, with its charming beaches, cheap and economical hotels and accommodations, and good restaurants.' },
        { src: 'destinations/destinity-6.jpg', title: 'MONTEVERDE', description: 'Monteverde is a small town located in the province of Puntarenas. Monteverde which means ‘Green Mountain’ in Spanish was founded by the Quaker community that migrated from North America to Costa Rica in the 1950’s because of their pacifist values. Though not an actual village as many of the homes spread out over a large area, this town has now developed itself from cater to the huge number of tourists. Monteverde Costa Rica is considered a major tourist destination, primarily frequented by nature lovers, hooked up by the high biodiversity found here. Monteverde Costa Rica is very famous for its rainforests or rather its ‘cloud forests’ which boast hundreds of mammals, birds, insects and species of plants. Monteverde Reserve biodiversity has attracted tourists and biologists for decades. They love this place because of its huge variety of flora and fauna. Monteverde is known as one of the most famous ecotourism destinations in Central America. We recommend you to stay at least a few days to explore this area. Monteverde has been called by National Geographic “the jewel in the crown of cloud forest reserves”. In Monteverde, visitors have a lot of activities available for everybody: Hiking in the Monteverde Reserve, Hiking in Children Eternal Forest, Canopy tour, Hanging Bridges, Butterflies farms, ATV Tours, Insect Exhibitions and Night Walks mainly. Monteverde also has some other facilities to make to visit safer and more comfortable: banks, pharmacy, local hospital, book store, gas station, ATM machines, restaurants, bars and accommodations for every budget and need.' },
        { src: 'destinations/destinity-7.jpg', title: 'OSA', description: 'The Osa Peninsula is located in the province of Puntarenas. Here you will find pristine rainforests and rugged natural beauty. It was declared ‘one of the most biologically intense places on earth’ by the National Geographic Magazine, the Osa Peninsula Costa Rica along with Drake Bay have today, become one of the most eco-tourism destination in the country. Accommodations in this region offer tourists everything from the knowledgeable guides for hiking the rainforest, to whale and dolphin watching tours, to simply lying on the beach and relaxing in the sun. There are also a number of lovely affordable lodges for those travelers that do not want to spend a lot. And with plenty of both pricey and affordable adventure tours to choose from, this area lets you experience a completely different lifestyle from the rest of the country. This area is a a secluded nature wonderland, being home to many of the country’s rare and endangered animal and bird species including the puma, jaguar, Harpy Eagle and Scarlet Macaw. The Corcovado National Park is located in Osa Peninsula Costa Rica, this area has the single largest expanse of a lowland tropical rainforest in Central America and is one of the tallest rainforests in the world. The best way to visit the Corcovado National Park Costa Rica is through the town of Puerto Jimenez. An excellent place to start hiking as an extensive network of trails begin from here, there is a ranger station in town with detailed information for trekking and camping in the park.' },
        { src: 'destinations/destinity-8.jpg', title: 'PAPAGAYO GULF', description: 'Puerto Viejo is located in Limon province; it is a coastal town on the shores of the Caribbean Sea. This place offers exotic flora and fauna, a vibrant town with great beaches, crystal clear blue waters, and amazing for surfers. In the surfing community is known worldwide for the biggest and most powerful wave in Costa Rica: salsa brava. Formerly it was a quiet little fishing village, now has become popular, especially with the young hip crowd, this town is among the top rated surfing destinations of the world. In this place, you can find the perfect and unique blend of Latino, Afro-Caribbean and Bribri indigenous cultures. In fact, most of the inhabitants are indigenous BriBri, but they tend to live out of town and not be very visible. Puerto Viejo Costa Rica offers a wide variety of bars, clubs and restaurants as well as hotels for everybody. Its gold sand beaches, tropical vegetation and many interesting attractions make Puerto Viejo a must visit destination in Costa Rica. Puerto Viejo Costa Rica is not ideal for swimming because of its currents. Kayaking, surfing, snorkeling, horseback riding, hiking, are some of the most important activities that you can find in this area.' },
        { src: 'destinations/destinity-9.jpg', title: 'PUERTO VIEJO', description: '...' },
        { src: 'destinations/destinity-10.jpg', title: 'SAMARA', description: 'Samara is located in the province of Guanacaste Costa Rica. This is a tropical paradise on the Pacific Ocean, perfect for beach and family vacations in Costa Rica. Samara is the perfect place because it is a long and white sand beach with shallow and gentle waters. It has become popular with swimmers and surfers, and it is an ideal beach for kids. Here you can find friendly and attractive hotels, Bed & Breakfast, homes for rent, restaurants, bars and discos, but, unlike other Costa Rica Destinations, it is also a thriving fishing and farming community. The main activities in Samara Costa Rica are water sports activities, horseback riding snorkeling, scuba diving, and canopy tours. This is a great place for those looking for a quiet holiday or a fun family vacation.' },
        { src: 'destinations/destinity-11.jpg', title: 'TAMARINDO / FLAMINGO / CONCHAL', description: 'Tamarindo Beach is located in the province of Guanacaste. Tamarindo Costa Rica is a great place for honeymoons and weddings, couples, and families, and wonderfully suited to eco-adventures. Here you can find sport fishing, sailing, surfing, golfing, ATV tours, turtle watching, diving, horseback riding, canopy tours, jungle boat rides, beauty spa and pottery stores. Tamarindo Costa Rica is a multi-cultural community; people from around the world have made Tamarindo Costa Rica their new home. Tamarindo has more than 30 restaurants: vegetarians, Costa Rican food, Italian or Sea Food, it is all here. Accommodations are available for every budget, from luxurious beach-front hotel to hostels. Tamarindo has a beach of white sand and warm blue water. In Tamarindo you can see Leatherback Turtles, howler monkeys, giant iguanas and the parakeets. A former fishing village has become the most popular vacation destination in Costa Rica. Tamarindo Costa Rica is a great place for everyone: for those looking for peace and quiet, there is a large enough beach to relax; for those who like sport fishing, here can find marlin and tuna, for those who likes nature, Tamarindo Costa Rica has a lot of eco-oriented activities and those looking for night life, Tamarindo has some of the best bars and clubs to party. Visitors have to keep in mind that Tamarindo have strong currents and some submerged rocks. While swimming in Tamarindo Costa Rica, people must be very careful. Tamarindo Costa Rica spotted in the worldwide surfing radar with the classic movie Endless Summer II, while Patrick and Wingnut stopped here to visit their buddy Robert August (who still lives here).' },
    ];

    return (
        <div className="max-w-5xl mx-auto p-4 pt-36">
            <h1 className="text-5xl font-bold text-start mb-8">DESTINATIONS</h1>

            {items.map((item, idx) => (
                <details
                    key={idx}
                    className="border border-gray-300 py-3 px-4"
                // Para que uno de los items aparezca inicialmente abierto, usa: defaultOpen
                // defaultOpen={idx === 0}
                >
                    <summary className="cursor-pointer flex items-center text-blue-600 text-lg font-semibold uppercase">
                        {/* Ícono +/− opcionalmente podría hacerse con CSS 
                o con <span className="mr-2">+/-</span>.
                <summary> en sí ya muestra un triángulo de apertura en navegadores por defecto */}
                        → {item.title}
                    </summary>

                    <div className="mt-4">
                        <div className="max-w-full flex flex-col items-center ">
                            <Image
                                src={`/${item.src}`}
                                alt={item.title}
                                width={1000}
                                height={0}
                                className="max-w-full"
                            />
                        </div>
                        <p className="mt-2 text-justify whitespace-pre-line ">
                            {item.description}
                        </p>
                    </div>
                </details>
            ))}
        </div>
    );
}
