// Mock photo database used when working without an API key or offline
// Covers common search terms: cricket, bmw, cars, audi, mercedes, football, tennis, dogs, cats, nature, etc.

export const MOCK_DATABASE = {
  cricket: [
    {
      id: 'cricket-1',
      title: 'Red Cricket Ball and Wooden Bat on Green Pitch',
      description: 'Leather seam cricket ball resting against a willow cricket bat on the crease',
      alt_description: 'Cricket ball and bat on pitch grass',
      urlId: 'photo-1531415074968-036ba1b575da',
      width: 4000,
      height: 2667,
      likes: 3820,
      color: '#15803d',
      photographer: { name: 'Alessandro Bogliari', username: 'abogliari' },
      tags: ['cricket', 'bat', 'ball', 'pitch', 'sport', 'match', 'wicket', 'ipl', 'test cricket']
    },
    {
      id: 'cricket-2',
      title: 'Cricket Stadium Under Bright Floodlights at Night',
      description: 'Massive circular cricket ground illuminated for an international day-night match',
      alt_description: 'Cricket stadium with night floodlights and green outfield',
      urlId: 'photo-1540747913346-19e32dc3e97e',
      width: 4200,
      height: 2800,
      likes: 5120,
      color: '#0284c7',
      photographer: { name: 'Fauzan Saari', username: 'fauzansaari' },
      tags: ['cricket', 'stadium', 'ground', 'floodlights', 'arena', 'night match', 't20', 'crowd']
    },
    {
      id: 'cricket-3',
      title: 'Batsman Striking Powerful Pull Shot at the Crease',
      description: 'Cricket batsman in full gear executing a hook shot against fast bowling',
      alt_description: 'Batsman hitting ball in cricket match',
      urlId: 'photo-1624526267942-ab0ff8a3e972',
      width: 3840,
      height: 2560,
      likes: 4290,
      color: '#334155',
      photographer: { name: 'Harpal Singh', username: 'harpalsingh' },
      tags: ['cricket', 'batsman', 'batting', 'shot', 'action', 'six', 'cricketer', 'wicket']
    },
    {
      id: 'cricket-4',
      title: 'Cricket Batsman in White Uniform at Batting Stance',
      description: 'Traditional test match cricketer waiting for the bowler in focused batting stance',
      alt_description: 'Cricket player standing at batting crease wearing pads and helmet',
      urlId: 'photo-1589801258579-18e091f4ca26',
      width: 3900,
      height: 2600,
      likes: 3740,
      color: '#f8fafc',
      photographer: { name: 'Chirag S', username: 'chirags' },
      tags: ['cricket', 'test match', 'whites', 'helmet', 'pads', 'crease', 'batsman', 'focus']
    },
    {
      id: 'cricket-5',
      title: 'Fast Bowler in Mid-Delivery Stride',
      description: 'Pace bowler gripping the red leather ball at full run-up delivery leap',
      alt_description: 'Cricket bowler bowling fast ball during cricket game',
      urlId: 'photo-1587385789097-0197a7fbd179',
      width: 4100,
      height: 2700,
      likes: 3450,
      color: '#166534',
      photographer: { name: 'Vivek Kumar', username: 'vivekkumar' },
      tags: ['cricket', 'bowler', 'bowling', 'fast bowling', 'pace', 'seam', 'wicket', 'cricketer']
    },
    {
      id: 'cricket-6',
      title: 'Wooden Cricket Wickets and Bails in Golden Light',
      description: 'Close up of the three wooden stumps and bails set on the cricket pitch',
      alt_description: 'Wooden cricket stumps and bails on pitch',
      urlId: 'photo-1593341646782-e0b495cff86d',
      width: 3800,
      height: 2533,
      likes: 2980,
      color: '#ca8a04',
      photographer: { name: 'Patrick Case', username: 'patrickcase' },
      tags: ['cricket', 'stumps', 'wickets', 'bails', 'pitch', 'out', 'bowled', 'cricket ground']
    },
    {
      id: 'cricket-7',
      title: 'Scenic Countryside Cricket Ground on Sunny Afternoon',
      description: 'Classic village green cricket match in progress with lush trees and pavilion',
      alt_description: 'Cricket match on scenic green countryside field',
      urlId: 'photo-1512719994953-eabf50895df7',
      width: 4000,
      height: 2667,
      likes: 3120,
      color: '#15803d',
      photographer: { name: 'Sam Balye', username: 'sambalye' },
      tags: ['cricket', 'countryside', 'village', 'field', 'english cricket', 'summer', 'grass']
    },
    {
      id: 'cricket-8',
      title: 'Cricket Players Celebrating Wicket in Field',
      description: 'Team celebration after taking a crucial wicket during intense match',
      alt_description: 'Cricket team celebrating dismissal on field',
      urlId: 'photo-1508098682722-e99c43a406b2',
      width: 3900,
      height: 2600,
      likes: 4190,
      color: '#0f766e',
      photographer: { name: 'Pranav Kumar', username: 'pranavkumar' },
      tags: ['cricket', 'celebration', 'team', 'wicket', 'match', 'players', 'sportsmanship']
    }
  ],

  bmw: [
    {
      id: 'bmw-1',
      title: 'Sunset Orange BMW M4 Competition Coupe',
      description: 'Twin-turbo BMW M4 sports coupe parked on mountain road during sunset',
      alt_description: 'Orange BMW M4 sports car in golden hour',
      urlId: 'photo-1525609004556-c46c7d6cf023',
      width: 3900,
      height: 2600,
      likes: 4890,
      color: '#c2410c',
      photographer: { name: 'Stefan Rodriguez', username: 'stefanrodriguez' },
      tags: ['bmw', 'm4', 'competition', 'coupe', 'german', 'car', 'cars', 'vehicle', 'sports car', 'speed']
    },
    {
      id: 'bmw-2',
      title: 'BMW M8 Gran Coupe in Stealth Black',
      description: 'Over 600 horsepower V8 BMW M8 luxury super coupe with aggressive styling',
      alt_description: 'Stealth black BMW M8 luxury performance car',
      urlId: 'photo-1580273916550-e323be2ae537',
      width: 4000,
      height: 2667,
      likes: 5410,
      color: '#0f172a',
      photographer: { name: 'Alexandre Debiève', username: 'alexandre_d' },
      tags: ['bmw', 'm8', 'v8', 'gran coupe', 'm power', 'luxury', 'german', 'black', 'cars']
    },
    {
      id: 'bmw-3',
      title: 'BMW 3-Series Sports Sedan in Urban Setting',
      description: 'Clean modern BMW 3 Series sedan with kidney grille and sharp LED headlights',
      alt_description: 'Black BMW sedan parked on city street',
      urlId: 'photo-1567818735868-e71b99932e29',
      width: 4100,
      height: 2700,
      likes: 3820,
      color: '#1e293b',
      photographer: { name: 'Cemre Nur', username: 'cemrenur' },
      tags: ['bmw', '3 series', 'sedan', 'german', 'luxury', 'car', 'urban', 'executive']
    },
    {
      id: 'bmw-4',
      title: 'Yas Marina Blue BMW M4 Track Stance',
      description: 'Performance tuned BMW M4 coupe with carbon fiber front splitter and rims',
      alt_description: 'Blue BMW M4 performance car parked on asphalt',
      urlId: 'photo-1555215695-3004980ad54e',
      width: 3840,
      height: 2560,
      likes: 6200,
      color: '#0284c7',
      photographer: { name: 'Tyler Clemmensen', username: 'tylerclemmensen' },
      tags: ['bmw', 'm4', 'blue', 'm performance', 'track', 'tuning', 'car', 'german', 'speed']
    },
    {
      id: 'bmw-5',
      title: 'Classic Vintage BMW E30 M3 Sport Evolution',
      description: 'Legendary boxy 1980s BMW E30 M3 touring car legend in showroom condition',
      alt_description: 'Classic vintage BMW M3 sports car',
      urlId: 'photo-1556189250-72ba954cfc2b',
      width: 3900,
      height: 2600,
      likes: 4760,
      color: '#991b1b',
      photographer: { name: 'Samuele Errico', username: 'samuele_errico' },
      tags: ['bmw', 'e30', 'm3', 'classic', 'vintage', 'retro', 'legend', 'car', 'heritage']
    },
    {
      id: 'bmw-6',
      title: 'BMW Laserlight Headlight Signature in Night Glow',
      description: 'Iconic dual halo LED daytime running lights of contemporary BMW',
      alt_description: 'Close up of illuminated BMW headlights at night',
      urlId: 'photo-1617531653332-bd46c24f2068',
      width: 3800,
      height: 2533,
      likes: 3940,
      color: '#1e1b4b',
      photographer: { name: 'Maxim Hopman', username: 'maximhopman' },
      tags: ['bmw', 'headlight', 'laserlight', 'night', 'grille', 'close up', 'car detail']
    },
    {
      id: 'bmw-7',
      title: 'BMW M2 Performance Coupe on Canyon Road',
      description: 'Compact rear-wheel-drive BMW M2 car carving through mountain canyon curves',
      alt_description: 'BMW sports car cornering on mountain road',
      urlId: 'photo-1508974239320-0a029497e820',
      width: 4000,
      height: 2667,
      likes: 4320,
      color: '#0f766e',
      photographer: { name: 'Carl Raw', username: 'carliscool' },
      tags: ['bmw', 'm2', 'drift', 'canyon', 'driving', 'road', 'handling', 'fast']
    },
    {
      id: 'bmw-8',
      title: 'BMW X5 Luxury SUV All-Wheel Drive',
      description: 'Spacious high-end BMW luxury SUV parked against scenic landscape',
      alt_description: 'BMW X5 luxury SUV outdoors',
      urlId: 'photo-1519641471654-76ce0107ad1b',
      width: 4100,
      height: 2700,
      likes: 3150,
      color: '#475569',
      photographer: { name: 'Neven Krcmarek', username: 'nevenkrcmarek' },
      tags: ['bmw', 'x5', 'suv', 'x-drive', 'luxury', 'family', '4x4', 'vehicle']
    }
  ],

  cars: [
    {
      id: 'car-1',
      title: 'Black Porsche 911 on Scenic Alpine Pass',
      description: 'Porsche 911 sports car parked on an open mountain road at golden hour',
      alt_description: 'Black Porsche 911 sports car on open mountain highway',
      urlId: 'photo-1503376780353-7e6692767b70',
      width: 3840,
      height: 2400,
      likes: 4210,
      color: '#1e293b',
      photographer: { name: 'Campbell', username: 'campbell' },
      tags: ['car', 'cars', 'porsche', '911', 'sports car', 'supercar', 'vehicle', 'automobile']
    },
    {
      id: 'car-2',
      title: 'Rosso Corsa Ferrari 488 Supercar',
      description: 'Italian Ferrari supercar with aerodynamic bodywork in studio lighting',
      alt_description: 'Red Ferrari sports car in high contrast lighting',
      urlId: 'photo-1583121274602-3e2820c69888',
      width: 4000,
      height: 2667,
      likes: 5890,
      color: '#b91c1c',
      photographer: { name: 'Dhiva Krishna', username: 'dhivakrishna' },
      tags: ['car', 'cars', 'ferrari', 'supercar', 'red', 'italian', 'racing', 'fast']
    },
    {
      id: 'car-3',
      title: 'Classic Ford Mustang Vintage American Muscle',
      description: '1960s Ford Mustang coupe parked on city asphalt with iconic chrome details',
      alt_description: 'Vintage classic Ford Mustang muscle car',
      urlId: 'photo-1544829099-b9a0c07fad1a',
      width: 3600,
      height: 2400,
      likes: 3850,
      color: '#334155',
      photographer: { name: 'Joey Banks', username: 'joeyabanks' },
      tags: ['car', 'cars', 'mustang', 'ford', 'muscle car', 'classic', 'vintage', 'v8']
    },
    {
      id: 'car-4',
      title: 'Lamborghini Huracan Performance Edition',
      description: 'Angular lines of an exotic Italian Lamborghini hypercar in stealth finish',
      alt_description: 'Dark grey Lamborghini supercar parked in urban scene',
      urlId: 'photo-1511919884226-fd3cad34687c',
      width: 4200,
      height: 2800,
      likes: 6420,
      color: '#0f172a',
      photographer: { name: 'Olav Tvedt', username: 'olav_tvedt' },
      tags: ['car', 'cars', 'lamborghini', 'huracan', 'supercar', 'hypercar', 'stealth', 'lambo']
    },
    {
      id: 'car-5',
      title: 'Electric Blue Chevrolet Corvette Stingray',
      description: 'American sports car legend with aggressive mid-engine styling',
      alt_description: 'Blue Corvette sports car side profile',
      urlId: 'photo-1552519507-da3b142c6e3d',
      width: 4100,
      height: 2700,
      likes: 2980,
      color: '#0369a1',
      photographer: { name: 'Sven D', username: 'svend' },
      tags: ['car', 'cars', 'corvette', 'stingray', 'chevrolet', 'blue', 'sports car', 'american']
    },
    {
      id: 'car-6',
      title: 'Audi R8 V10 Quattro Supercar',
      description: 'Silver Audi R8 flagship with Quattro all-wheel drive parked outdoors',
      alt_description: 'Silver Audi R8 supercar outdoors',
      urlId: 'photo-1542282088-72c9c27ed0cd',
      width: 4000,
      height: 2600,
      likes: 4750,
      color: '#64748b',
      photographer: { name: 'Lance Asper', username: 'lanceasper' },
      tags: ['car', 'cars', 'audi', 'r8', 'quattro', 'v10', 'german', 'luxury', 'supercar']
    },
    {
      id: 'car-7',
      title: 'Vintage Volkswagen Beetle Classic Bug',
      description: 'Retro Volkswagen Beetle restored in pastel mint finish on coastal road',
      alt_description: 'Pastel classic vintage Volkswagen Beetle car',
      urlId: 'photo-1502877338535-766e1452684a',
      width: 3500,
      height: 2333,
      likes: 3410,
      color: '#0d9488',
      photographer: { name: 'Tudor Stanciu', username: 'tudorstanciu' },
      tags: ['car', 'cars', 'vw', 'volkswagen', 'beetle', 'bug', 'vintage', 'classic', 'retro']
    },
    {
      id: 'car-8',
      title: 'Mercedes-AMG GT Performance Coupe',
      description: 'Twin-turbo V8 Mercedes-AMG grand tourer with long sculpted bonnet in silver',
      alt_description: 'Mercedes-AMG GT luxury sports car',
      urlId: 'photo-1563720223185-11003d516935',
      width: 4000,
      height: 2667,
      likes: 4320,
      color: '#475569',
      photographer: { name: 'Kahl Orr', username: 'kahlorr' },
      tags: ['car', 'cars', 'mercedes', 'amg', 'benz', 'german', 'luxury', 'coupe']
    },
    {
      id: 'car-9',
      title: 'Tesla Model S Electric Performance',
      description: 'Electric performance sedan parked at modern charging station',
      alt_description: 'White Tesla electric vehicle parked',
      urlId: 'photo-1568605117036-5fe5e7bab0b7',
      width: 4000,
      height: 2667,
      likes: 3670,
      color: '#f8fafc',
      photographer: { name: 'Austin Neill', username: 'austinneill' },
      tags: ['car', 'cars', 'tesla', 'electric', 'ev', 'model s', 'vehicle']
    },
    {
      id: 'car-10',
      title: 'Nissan GT-R Nismo Japanese Supercar',
      description: 'Twin-turbo Japanese sports coupe tuned for maximum downforce',
      alt_description: 'Nissan GT-R sports car rear view',
      urlId: 'photo-1541348263662-e0c8de4259ba',
      width: 3840,
      height: 2560,
      likes: 4980,
      color: '#334155',
      photographer: { name: 'Tyler Clemmensen', username: 'tylerclemmensen' },
      tags: ['car', 'cars', 'nissan', 'gtr', 'godzilla', 'jdm', 'japanese', 'turbo']
    },
    {
      id: 'car-11',
      title: 'Dodge Challenger SRT Hellcat Widebody',
      description: 'Supercharged American muscle car roaring on open dragstrip',
      alt_description: 'Black Dodge Challenger Hellcat muscle car',
      urlId: 'photo-1553440569-bcc63803a83d',
      width: 4200,
      height: 2800,
      likes: 4560,
      color: '#0f172a',
      photographer: { name: 'Austin Ramsey', username: 'austinramsey' },
      tags: ['car', 'cars', 'dodge', 'challenger', 'hellcat', 'muscle car', 'v8']
    },
    {
      id: 'car-12',
      title: 'Vintage Porsche 356 Speedster Classic',
      description: 'Legendary rounded lightweight German roadster in concourse condition',
      alt_description: 'Classic Porsche 356 vintage roadster',
      urlId: 'photo-1506015391300-4802dc74de2e',
      width: 4100,
      height: 2700,
      likes: 3910,
      color: '#d97706',
      photographer: { name: 'Gilles Lambert', username: 'gilleslambert' },
      tags: ['car', 'cars', 'porsche', '356', 'speedster', 'classic', 'vintage']
    }
  ],

  football: [
    {
      id: 'football-1',
      title: 'Football Match Under Massive Stadium Lights',
      description: 'Professional soccer stadium filled with roaring fans under floodlights',
      alt_description: 'Football stadium match night floodlights',
      urlId: 'photo-1508098682722-e99c43a406b2',
      width: 4000,
      height: 2667,
      likes: 5890,
      color: '#15803d',
      photographer: { name: 'Thomas Serer', username: 'thomas_serer' },
      tags: ['football', 'soccer', 'stadium', 'ball', 'match', 'fifa', 'champions league', 'goal']
    },
    {
      id: 'football-2',
      title: 'Classic Leather Football Resting on Grass',
      description: 'Classic soccer ball sitting on the pitch center circle line',
      alt_description: 'Soccer ball on green turf field',
      urlId: 'photo-1579952363873-27f3bade9f55',
      width: 3840,
      height: 2560,
      likes: 4720,
      color: '#166534',
      photographer: { name: 'Connor Coyne', username: 'connorcoyne' },
      tags: ['football', 'soccer', 'ball', 'pitch', 'grass', 'turf', 'game']
    },
    {
      id: 'football-3',
      title: 'Striker Shooting Ball Into Goal Net',
      description: 'Action photograph of soccer ball hitting the back of the white goal net',
      alt_description: 'Soccer ball hitting net scoring a goal',
      urlId: 'photo-1551958219-acbc608c6377',
      width: 3900,
      height: 2600,
      likes: 4210,
      color: '#0284c7',
      photographer: { name: 'Mitch Rosen', username: 'mitchwork' },
      tags: ['football', 'soccer', 'goal', 'score', 'net', 'striker', 'shot']
    }
  ],

  coffee: [
    {
      id: 'coffee-1',
      title: 'Artisan Latte Coffee with Rosette Foam Art',
      description: 'Barista crafted hot latte in ceramic cup with delicate heart latte art',
      alt_description: 'Cup of latte coffee with foam art',
      urlId: 'photo-1501339847302-ac426a4a7cbb',
      width: 3900,
      height: 2600,
      likes: 4950,
      color: '#78350f',
      photographer: { name: 'Demid Deev', username: 'demid' },
      tags: ['coffee', 'latte', 'cafe', 'barista', 'espresso', 'cappuccino', 'morning']
    },
    {
      id: 'coffee-2',
      title: 'Freshly Roasted Dark Coffee Beans',
      description: 'Macro detail of roasted arabica coffee beans with rich aroma and oils',
      alt_description: 'Roasted brown coffee beans scattered',
      urlId: 'photo-1447933601403-0c6688de566e',
      width: 4000,
      height: 2667,
      likes: 5120,
      color: '#451a03',
      photographer: { name: 'Nathan Dumlao', username: 'nate_dumlao' },
      tags: ['coffee', 'beans', 'roast', 'espresso', 'brew', 'cafe']
    },
    {
      id: 'coffee-3',
      title: 'Morning Espresso by Sunlit Window',
      description: 'Single origin espresso shot served alongside an open book in morning light',
      alt_description: 'Cup of coffee on wooden table next to window',
      urlId: 'photo-1495474472287-4d71bcdd2085',
      width: 3840,
      height: 2560,
      likes: 4320,
      color: '#d97706',
      photographer: { name: 'Ali Inay', username: 'inayali' },
      tags: ['coffee', 'cup', 'espresso', 'morning', 'window', 'warmth', 'relax']
    }
  ],

  nature: [
    {
      id: 'nature-1',
      title: 'Majestic Mountain Peaks During Golden Hour',
      description: 'Sunlight casting warm light on snow-capped mountain ridge',
      alt_description: 'Snow covered mountain at sunset',
      urlId: 'photo-1464822759023-fed622ff2c3b',
      width: 4000,
      height: 2667,
      likes: 5420,
      color: '#4a5568',
      photographer: { name: 'Benjamin Voros', username: 'vorosbenbi' },
      tags: ['nature', 'mountains', 'snow', 'sunset', 'landscape', 'alps', 'peaks']
    },
    {
      id: 'nature-2',
      title: 'Yosemite Valley River Reflection',
      description: 'Mirror reflection of El Capitan and pines in tranquil Yosemite river',
      alt_description: 'Yosemite Valley reflection in river at dawn',
      urlId: 'photo-1506744038136-46273834b3fb',
      width: 4200,
      height: 2800,
      likes: 6890,
      color: '#0f766e',
      photographer: { name: 'Bailey Zindel', username: 'baileyzindel' },
      tags: ['nature', 'yosemite', 'river', 'reflection', 'forest', 'national park']
    },
    {
      id: 'nature-3',
      title: 'Foggy Evergreen Pine Forest Morning',
      description: 'Misty evergreen forest with atmospheric morning haze and stillness',
      alt_description: 'Mist rolling through pine trees in dense forest',
      urlId: 'photo-1448375240586-882707db888b',
      width: 4100,
      height: 2700,
      likes: 4880,
      color: '#15803d',
      photographer: { name: 'Sebastian Unrau', username: 'sebastian_unrau' },
      tags: ['nature', 'forest', 'pine', 'fog', 'mist', 'trees', 'morning']
    },
    {
      id: 'nature-4',
      title: 'Alpine Lake Mirror in Italian Dolomites',
      description: 'Pristine turquoise mountain lake reflecting dramatic jagged peaks',
      alt_description: 'Dolomites mountain lake reflection in Italy',
      urlId: 'photo-1501785888041-af3ef285b470',
      width: 4000,
      height: 2667,
      likes: 5120,
      color: '#0e7490',
      photographer: { name: 'Luca Bravo', username: 'lucabravo' },
      tags: ['nature', 'dolomites', 'lake', 'alps', 'italy', 'turquoise', 'hiking']
    }
  ],

  dogs: [
    {
      id: 'dog-1',
      title: 'Joyful Golden Retriever on Sunny Lawn',
      description: 'Happy golden retriever dog smiling outdoors in the afternoon sunshine',
      alt_description: 'Smiling golden retriever sitting in green grass',
      urlId: 'photo-1543466835-00a7907e9de1',
      width: 4000,
      height: 2667,
      likes: 6980,
      color: '#ca8a04',
      photographer: { name: 'Alvan Nee', username: 'alvannee' },
      tags: ['dog', 'dogs', 'golden retriever', 'puppy', 'pet', 'cute', 'animal']
    },
    {
      id: 'dog-2',
      title: 'Curious Puppy Looking with Expressive Eyes',
      description: 'Adorable small puppy with floppy ears looking straight at the camera',
      alt_description: 'Cute small puppy close up',
      urlId: 'photo-1587300003388-59208cc962cb',
      width: 3840,
      height: 2560,
      likes: 7420,
      color: '#78350f',
      photographer: { name: 'Marek Szturc', username: 'marekszturc' },
      tags: ['dog', 'dogs', 'puppy', 'puppies', 'cute', 'adorable', 'pet']
    },
    {
      id: 'dog-3',
      title: 'Siberian Husky with Striking Ice-Blue Eyes',
      description: 'Noble Arctic husky dog in majestic portrait with wolf-like features',
      alt_description: 'Husky dog with blue eyes looking majestic',
      urlId: 'photo-1537151625747-768eb6cf92b2',
      width: 4100,
      height: 2733,
      likes: 5890,
      color: '#0284c7',
      photographer: { name: 'Valentin Petkov', username: 'valentinpetkov' },
      tags: ['dog', 'dogs', 'husky', 'siberian husky', 'blue eyes', 'pet']
    }
  ],

  cats: [
    {
      id: 'cat-1',
      title: 'Tabby Cat Close-Up with Bright Green Eyes',
      description: 'Beautiful domestic cat looking intently with detailed whisker focus',
      alt_description: 'Tabby cat close up face portrait',
      urlId: 'photo-1514888286974-6c03e2ca1dba',
      width: 4000,
      height: 2667,
      likes: 7890,
      color: '#15803d',
      photographer: { name: 'Manja Vitolic', username: 'madisons' },
      tags: ['cat', 'cats', 'kitten', 'tabby', 'eyes', 'feline', 'pet', 'cute']
    },
    {
      id: 'cat-2',
      title: 'Relaxed Ginger Cat Lounging in Sunlight',
      description: 'Warm ginger cat stretching peacefully on wooden floor in sun patch',
      alt_description: 'Orange tabby cat resting comfortably in sunlight',
      urlId: 'photo-1573865526739-10659fec78a5',
      width: 3900,
      height: 2600,
      likes: 6450,
      color: '#ea580c',
      photographer: { name: 'Amber Kipp', username: 'amberkipp' },
      tags: ['cat', 'cats', 'ginger', 'orange cat', 'sunlight', 'pet']
    },
    {
      id: 'cat-3',
      title: 'Tiny Fluffy Kitten Peeking from Blanket',
      description: 'Adorable small kitten with huge curious eyes hiding in knitted throw',
      alt_description: 'Tiny kitten hiding under soft blanket',
      urlId: 'photo-1548802673-380ab8ebc7b7',
      width: 3840,
      height: 2560,
      likes: 8920,
      color: '#f8fafc',
      photographer: { name: 'Kari Shea', username: 'karishea' },
      tags: ['cat', 'cats', 'kitten', 'fluffy', 'cute', 'tiny', 'pet']
    }
  ],

  shoes: [
    {
      id: 'shoe-1',
      title: 'Nike Air Sport Running Sneakers',
      description: 'Modern athletic sneakers with responsive foam sole on neutral background',
      alt_description: 'Nike sneakers pair on grey floor',
      urlId: 'photo-1542291026-7eec264c27ff',
      width: 4000,
      height: 2667,
      likes: 7320,
      color: '#dc2626',
      photographer: { name: 'Hermes Rivera', username: 'hermesrivera' },
      tags: ['shoes', 'sneakers', 'nike', 'running', 'sport', 'kicks', 'red', 'footwear']
    },
    {
      id: 'shoe-2',
      title: 'Classic White Canvas Sneakers in Sunshine',
      description: 'Clean white low-top canvas sneakers on urban concrete',
      alt_description: 'White canvas sneakers on pavement',
      urlId: 'photo-1525966222134-fcfa99b8ae77',
      width: 3840,
      height: 2560,
      likes: 4980,
      color: '#f8fafc',
      photographer: { name: 'Paul Gaudriault', username: 'pauloco' },
      tags: ['shoes', 'sneakers', 'white', 'vans', 'canvas', 'footwear', 'fashion']
    }
  ],

  technology: [
    {
      id: 'tech-1',
      title: 'Developer Coding on Modern Laptop with Coffee',
      description: 'Programmer reviewing code on screen beside hot coffee in workspace',
      alt_description: 'Laptop with code on screen and coffee cup',
      urlId: 'photo-1498050108023-c5249f4df085',
      width: 4000,
      height: 2667,
      likes: 6420,
      color: '#1e293b',
      photographer: { name: 'Christopher Gower', username: 'cgower' },
      tags: ['technology', 'coding', 'programming', 'developer', 'code', 'laptop', 'software']
    },
    {
      id: 'tech-2',
      title: 'Clean Source Code on High-Resolution Monitor',
      description: 'Vibrant syntax highlighting on dark mode development IDE environment',
      alt_description: 'Code on dark computer monitor in coding session',
      urlId: 'photo-1555066931-4365d14bab8c',
      width: 3900,
      height: 2600,
      likes: 5890,
      color: '#0f172a',
      photographer: { name: 'Fotis Fotopoulos', username: 'ffstop' },
      tags: ['technology', 'code', 'javascript', 'python', 'developer', 'programming']
    }
  ],

  space: [
    {
      id: 'space-1',
      title: 'Cosmic Night Sky with Andromeda Galaxy',
      description: 'Deep space astrophotography revealing stars and nebulas',
      alt_description: 'Night sky filled with millions of stars and galactic dust',
      urlId: 'photo-1506703719100-a0f3a48c0f86',
      width: 4000,
      height: 2600,
      likes: 7890,
      color: '#0f172a',
      photographer: { name: 'Graham Holtshausen', username: 'graham_h' },
      tags: ['space', 'stars', 'galaxy', 'astronomy', 'cosmos', 'universe', 'night']
    },
    {
      id: 'space-2',
      title: 'Planet Earth Glowing Atmosphere from Orbit',
      description: 'Orbital view of Earth continents surrounded by blue atmosphere',
      alt_description: 'Planet Earth seen from outer space',
      urlId: 'photo-1451187580459-43490279c0fa',
      width: 4200,
      height: 2800,
      likes: 9120,
      color: '#0284c7',
      photographer: { name: 'NASA', username: 'nasa' },
      tags: ['space', 'earth', 'planet', 'nasa', 'orbit', 'globe']
    }
  ]
};

// Search our local photo database by query keywords
export function queryCuratedDatabase(searchQuery, page = 1, perPage = 12) {
  const query = (searchQuery || '').trim().toLowerCase();
  if (!query) {
    return { rawPhotos: [], total: 0, totalPages: 0 };
  }

  const tokens = query.split(/\s+/).filter(Boolean);

  // Exact category / brand direct aliases
  const categoryMap = {
    // Cricket
    cricket: 'cricket',
    ipl: 'cricket',
    batsman: 'cricket',
    bowler: 'cricket',
    wicket: 'cricket',

    // BMW
    bmw: 'bmw',
    'bmw m4': 'bmw',
    'bmw m3': 'bmw',
    'bmw m8': 'bmw',
    bimmer: 'bmw',

    // Cars & Supercars
    car: 'cars',
    cars: 'cars',
    auto: 'cars',
    automobile: 'cars',
    vehicle: 'cars',
    vehicles: 'cars',
    supercar: 'cars',
    supercars: 'cars',
    ferrari: 'cars',
    porsche: 'cars',
    lamborghini: 'cars',
    mustang: 'cars',
    corvette: 'cars',
    audi: 'cars',
    mercedes: 'cars',

    // Football
    football: 'football',
    soccer: 'football',
    fifa: 'football',

    // Coffee
    coffee: 'coffee',
    latte: 'coffee',
    espresso: 'coffee',
    cafe: 'coffee',

    // Nature
    nature: 'nature',
    mountain: 'nature',
    mountains: 'nature',
    forest: 'nature',
    landscape: 'nature',

    // Dogs
    dog: 'dogs',
    dogs: 'dogs',
    puppy: 'dogs',
    puppies: 'dogs',
    husky: 'dogs',
    retriever: 'dogs',

    // Cats
    cat: 'cats',
    cats: 'cats',
    kitten: 'cats',
    kittens: 'cats',

    // Shoes
    shoes: 'shoes',
    shoe: 'shoes',
    sneakers: 'shoes',
    sneaker: 'shoes',

    // Tech
    tech: 'technology',
    technology: 'technology',
    coding: 'technology',
    code: 'technology',
    developer: 'technology',

    // Space
    space: 'space',
    galaxy: 'space',
    stars: 'space'
  };

  // Check if any token matches our direct categories
  let targetCategory = null;
  for (const token of tokens) {
    if (categoryMap[token]) {
      targetCategory = categoryMap[token];
      break;
    }
  }

  let matched = [];

  if (targetCategory && MOCK_DATABASE[targetCategory]) {
    matched = [...MOCK_DATABASE[targetCategory]];
  } else {
    // Search across all items by matching tags or words in title/description
    const all = Object.values(MOCK_DATABASE).flat();
    const scored = all.map((photo) => {
      let score = 0;
      const title = photo.title.toLowerCase();
      const desc = photo.description.toLowerCase();
      const tags = photo.tags || [];

      for (const token of tokens) {
        if (tags.includes(token)) score += 5;
        if (title.includes(token)) score += 3;
        if (desc.includes(token)) score += 2;
        if (tags.some((t) => t.includes(token) || token.includes(t))) score += 2;
      }
      return { photo, score };
    });

    const results = scored.filter((s) => s.score > 0).sort((a, b) => b.score - a.score);
    if (results.length > 0) {
      matched = results.map((r) => r.photo);
    } else {
      // Fallback: pick diverse photos with stable deterministic seed
      const allPhotos = Object.values(MOCK_DATABASE).flat();
      const seed = query.split('').reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
      matched = [...allPhotos].sort((a, b) => {
        const diffA = (a.id.charCodeAt(0) + seed) % 11;
        const diffB = (b.id.charCodeAt(0) + seed) % 11;
        return diffA - diffB;
      }).slice(0, 8);
    }
  }

  const total = matched.length;
  const totalPages = Math.ceil(total / perPage) || 1;
  const start = (page - 1) * perPage;
  const rawPhotos = matched.slice(start, start + perPage);

  return { rawPhotos, total, totalPages };
}
