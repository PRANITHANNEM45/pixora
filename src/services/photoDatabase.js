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
  ],

  // Pizza & Italian Cuisine
  pizza: [
    {
      id: 'pizza-1',
      title: 'Artisan Wood-Fired Neapolitan Pizza with Fresh Basil',
      description: 'Traditional wood-fired pizza with blistered crust, San Marzano tomato sauce, fresh mozzarella and basil leaves',
      alt_description: 'Freshly baked Neapolitan pizza on wooden board',
      urlId: 'photo-1513104890138-7c749659a591',
      width: 4000,
      height: 2667,
      likes: 5890,
      color: '#b91c1c',
      photographer: { name: 'Aurélien Lemasson-Théobald', username: 'aurelienlemasson' },
      tags: ['pizza', 'food', 'italian', 'cheese', 'mozzarella', 'basil', 'crust', 'wood-fired', 'dinner']
    },
    {
      id: 'pizza-2',
      title: 'Cheesy Pepperoni Pizza Slice Pull',
      description: 'Delicious hot pepperoni pizza slice being pulled with melted mozzarella cheese strings',
      alt_description: 'Melted cheese slice pull from hot pepperoni pizza',
      urlId: 'photo-1534308983496-4fabb1a015ee',
      width: 3840,
      height: 2560,
      likes: 6720,
      color: '#ea580c',
      photographer: { name: 'Alan Hardman', username: 'alanhardman' },
      tags: ['pizza', 'pepperoni', 'cheese pull', 'slice', 'crust', 'melted cheese', 'snack', 'fast food']
    },
    {
      id: 'pizza-3',
      title: 'Rustic Margherita Pizza on Dark Slate Board',
      description: 'Gourmet thin-crust Margherita pizza seasoned with olive oil and oregano',
      alt_description: 'Margherita pizza with fresh tomatoes and herbs',
      urlId: 'photo-1574071318508-1cdbab80d002',
      width: 4200,
      height: 2800,
      likes: 4840,
      color: '#dc2626',
      photographer: { name: 'Georgia de Lotz', username: 'georgiadelotz' },
      tags: ['pizza', 'margherita', 'tomatoes', 'olive oil', 'baking', 'italian cuisine']
    },
    {
      id: 'pizza-4',
      title: 'Four Cheese Quattro Formaggi Pizza in Pizzeria',
      description: 'Crispy stone-baked pizza loaded with gorgonzola, parmesan, fontina and mozzarella cheeses',
      alt_description: 'Cheesy white pizza on rustic parchment paper',
      urlId: 'photo-1565299624946-b28f40a0ae38',
      width: 3900,
      height: 2600,
      likes: 4450,
      color: '#f59e0b',
      photographer: { name: 'Chad Montano', username: 'briewilly' },
      tags: ['pizza', 'quattro formaggi', 'four cheese', 'pizzeria', 'baked', 'dinner', 'comfort food']
    }
  ],

  // Burger & Street Food
  burger: [
    {
      id: 'burger-1',
      title: 'Gourmet Double Cheeseburger with Crispy Bacon and Sesame Bun',
      description: 'Juicy Angus beef patties layered with melted cheddar cheese, crisp lettuce, tomato and smoked bacon',
      alt_description: 'Stacked gourmet cheeseburger on wooden table',
      urlId: 'photo-1568901346375-23c9450c58cd',
      width: 4000,
      height: 2667,
      likes: 7780,
      color: '#b45309',
      photographer: { name: 'Amirali Mirhashemian', username: 'amir_v_ali' },
      tags: ['burger', 'cheeseburger', 'bacon', 'beef', 'fries', 'fast food', 'gourmet', 'lunch', 'dinner']
    },
    {
      id: 'burger-2',
      title: 'Crispy Fried Chicken Burger with Spicy Mayo and Pickles',
      description: 'Golden fried chicken breast fillet inside toasted brioche bun with creamy coleslaw',
      alt_description: 'Crispy fried chicken sandwich on black stone plate',
      urlId: 'photo-1586190848861-99aa4a171e90',
      width: 3840,
      height: 2560,
      likes: 5320,
      color: '#f97316',
      photographer: { name: 'Food Photographer', username: 'foodie' },
      tags: ['burger', 'chicken burger', 'sandwich', 'brioche', 'fast food', 'tasty']
    },
    {
      id: 'burger-3',
      title: 'Smash Burger with Golden French Fries and Dip',
      description: 'Two crispy edged smash patties with caramelized onions, American cheese and shoestring fries',
      alt_description: 'Smash burger served with hot french fries',
      urlId: 'photo-1550547660-d9450f859349',
      width: 4100,
      height: 2733,
      likes: 6120,
      color: '#ea580c',
      photographer: { name: 'Robin Stickel', username: 'robinstickel' },
      tags: ['burger', 'fries', 'smash burger', 'cheddar', 'onions', 'comfort food']
    }
  ],

  // Food & Culinary
  food: [
    {
      id: 'food-1',
      title: 'Fresh Salmon and Avocado Sushi Platter',
      description: 'Artfully arranged nigiri, sashimi and maki rolls with pickled ginger and wasabi',
      alt_description: 'Assorted Japanese sushi rolls on slate platter',
      urlId: 'photo-1579871494447-9811cf80d66c',
      width: 4000,
      height: 2667,
      likes: 6670,
      color: '#0f766e',
      photographer: { name: 'Vinicius Benedit', username: 'viniciusb' },
      tags: ['food', 'sushi', 'japanese', 'salmon', 'sashimi', 'dinner', 'asian food', 'healthy']
    },
    {
      id: 'food-2',
      title: 'Fresh Handmade Tagliatelle Pasta with Truffle Sauce',
      description: 'Al dente Italian pasta tossed in creamy parmesan truffle butter and fresh black pepper',
      alt_description: 'Bowl of creamy Italian pasta with herbs',
      urlId: 'photo-1621996346565-e3d5d628103e',
      width: 3840,
      height: 2560,
      likes: 5210,
      color: '#ca8a04',
      photographer: { name: 'Kseniya Ovchinnikova', username: 'kseniya_ovchinnikova' },
      tags: ['food', 'pasta', 'italian', 'dinner', 'cooking', 'gourmet', 'noodles']
    },
    {
      id: 'food-3',
      title: 'Fluffy Buttermilk Pancakes with Wild Berries and Maple Syrup',
      description: 'Stack of warm golden pancakes drizzled with pure amber maple syrup and organic blueberries',
      alt_description: 'Pancake stack topped with fresh strawberries and blueberries',
      urlId: 'photo-1528207776546-365bb710ee93',
      width: 4000,
      height: 2667,
      likes: 8120,
      color: '#b45309',
      photographer: { name: 'Chad Montano', username: 'briewilly' },
      tags: ['food', 'pancakes', 'breakfast', 'berries', 'syrup', 'brunch', 'sweet', 'dessert']
    }
  ],

  // Beach & Coastal
  beach: [
    {
      id: 'beach-1',
      title: 'Tropical Turquoise Beach with White Sand and Palm Trees',
      description: 'Crystal clear lagoon waters washing over powdery white sand under swaying coconut palms',
      alt_description: 'Sunny tropical beach with palm tree and crystal ocean',
      urlId: 'photo-1507525428034-b723cf961d3e',
      width: 4200,
      height: 2800,
      likes: 9940,
      color: '#0284c7',
      photographer: { name: 'Sean Oulashin', username: 'oulashin' },
      tags: ['beach', 'ocean', 'tropical', 'sea', 'sand', 'palm trees', 'summer', 'vacation', 'travel']
    },
    {
      id: 'beach-2',
      title: 'Aerial View of Crashing Waves on Sandy Coastline',
      description: 'Drone top-down perspective of turquoise waves curling onto pristine golden shores',
      alt_description: 'Aerial drone shot of ocean waves meeting sand',
      urlId: 'photo-1519046904884-53103b34b206',
      width: 4000,
      height: 2667,
      likes: 7740,
      color: '#0369a1',
      photographer: { name: 'Ethan Robertson', username: 'ethanrobertson' },
      tags: ['beach', 'aerial', 'waves', 'drone', 'coast', 'water', 'nature', 'ocean']
    },
    {
      id: 'beach-3',
      title: 'Golden Sunset Horizon Over Calm Ocean Shore',
      description: 'Warm glowing sunlight reflecting on wet sand and gentle tide at dusk',
      alt_description: 'Sunset over ocean waves on coastline',
      urlId: 'photo-1506744038136-46273834b3fb',
      width: 3840,
      height: 2560,
      likes: 8890,
      color: '#ea580c',
      photographer: { name: 'Bailey Zindel', username: 'baileyzindel' },
      tags: ['beach', 'sunset', 'golden hour', 'horizon', 'relaxing', 'ocean', 'dusk']
    }
  ],

  // Mountains & Alpine
  mountains: [
    {
      id: 'mountains-1',
      title: 'Majestic Snow-Capped Alpine Mountain Peaks at Sunrise',
      description: 'Glacial peaks illuminated by morning alpine glow with alpine meadow in foreground',
      alt_description: 'Snow covered jagged mountain peaks at dawn',
      urlId: 'photo-1464822759023-fed622ff2c3b',
      width: 4400,
      height: 2933,
      likes: 9810,
      color: '#1e293b',
      photographer: { name: 'Kalen Emsley', username: 'kalenemsley' },
      tags: ['mountains', 'snow', 'alps', 'peaks', 'sunrise', 'hiking', 'nature', 'landscape', 'glacier']
    },
    {
      id: 'mountains-2',
      title: 'Misty Pine Forest Valley and Dramatic Mountain Ridges',
      description: 'Layers of mountain ridges fading into morning mist with dense evergreen forests',
      alt_description: 'Misty mountain range with pine forest',
      urlId: 'photo-1486870591958-9b9d0d1dda99',
      width: 3840,
      height: 2560,
      likes: 7420,
      color: '#334155',
      photographer: { name: 'Dave Hoefler', username: 'davehoefler' },
      tags: ['mountains', 'forest', 'mist', 'fog', 'valley', 'wilderness', 'adventure']
    },
    {
      id: 'mountains-3',
      title: 'Crystal Clear Glacial Lake Reflecting Sharp Granite Peaks',
      description: 'Mirror-like alpine lake reflecting towering peaks and blue sky in Canadian Rockies',
      alt_description: 'Turquoise mountain lake reflection',
      urlId: 'photo-1439853949127-fa647821eea0',
      width: 4000,
      height: 2667,
      likes: 8600,
      color: '#0891b2',
      photographer: { name: 'Luca Bravo', username: 'lucabravo' },
      tags: ['mountains', 'lake', 'reflection', 'water', 'rockies', 'scenic']
    }
  ],

  // Sunset & Evening Sky
  sunset: [
    {
      id: 'sunset-1',
      title: 'Fiery Orange and Purple Clouds Over Twilight Horizon',
      description: 'Dramatic cloud formations painted in vibrant gradient of orange, magenta and deep purple',
      alt_description: 'Vibrant sunset sky with colorful illuminated clouds',
      urlId: 'photo-1495616811223-4d98c6e9c869',
      width: 4000,
      height: 2667,
      likes: 9320,
      color: '#c026d3',
      photographer: { name: 'Sébastien Goldberg', username: 'sebastiengoldberg' },
      tags: ['sunset', 'sky', 'clouds', 'dusk', 'evening', 'colorful', 'horizon', 'twilight']
    },
    {
      id: 'sunset-2',
      title: 'Silhouette Palm Trees Against Golden Hour Sky',
      description: 'Lush palm tree silhouettes standing against a blazing golden yellow sunset',
      alt_description: 'Palm trees silhouetted against glowing orange sunset',
      urlId: 'photo-1507525428034-b723cf961d3e',
      width: 3840,
      height: 2560,
      likes: 8450,
      color: '#f97316',
      photographer: { name: 'Tim Marshall', username: 'timphotos' },
      tags: ['sunset', 'palm trees', 'silhouette', 'golden hour', 'calm', 'nature']
    }
  ],

  // Wildlife & Animals
  wildlife: [
    {
      id: 'wildlife-1',
      title: 'Majestic Male Lion with Flowing Mane on African Savanna',
      description: 'King of the jungle resting on a rocky kopje surveying the golden grasslands at sunset',
      alt_description: 'Male lion with large mane resting on savanna rock',
      urlId: 'photo-1546182990-dffeafbe841d',
      width: 4000,
      height: 2667,
      likes: 9930,
      color: '#b45309',
      photographer: { name: 'Clément Falize', username: 'clement_falize' },
      tags: ['lion', 'wildlife', 'safari', 'animals', 'savanna', 'africa', 'predator', 'big cat']
    },
    {
      id: 'wildlife-2',
      title: 'Fierce Bengal Tiger Stalking Quietly Through Jungle Foliage',
      description: 'Vibrant orange and black striped tiger walking through green forest shadows',
      alt_description: 'Bengal tiger in lush green forest',
      urlId: 'photo-1561731216-c3a4d99437d5',
      width: 3840,
      height: 2560,
      likes: 8920,
      color: '#ea580c',
      photographer: { name: 'Smit Patel', username: 'smitpatel' },
      tags: ['tiger', 'wildlife', 'bengal tiger', 'jungle', 'predator', 'stripes', 'animals']
    },
    {
      id: 'wildlife-3',
      title: 'African Elephant Herd Walking Near Kilimanjaro',
      description: 'Gentle giants walking across dusty plains with Mount Kilimanjaro in distance',
      alt_description: 'Elephant family walking in savanna plain',
      urlId: 'photo-1557050543-4d5f4e07ef46',
      width: 4200,
      height: 2800,
      likes: 7480,
      color: '#78716c',
      photographer: { name: 'Shaaz Jung', username: 'shaazjung' },
      tags: ['elephant', 'wildlife', 'africa', 'herd', 'animals', 'nature', 'safari']
    },
    {
      id: 'wildlife-4',
      title: 'Soaring Golden Eagle in Flight Under Blue Sky',
      description: 'Eagle with outstretched wings gliding effortlessly on thermal currents over mountain canyon',
      alt_description: 'Golden eagle spreading wings in flight',
      urlId: 'photo-1611689342806-0863700ce1e4',
      width: 3900,
      height: 2600,
      likes: 6490,
      color: '#0284c7',
      photographer: { name: 'Richard Lee', username: 'richardlee' },
      tags: ['bird', 'eagle', 'birds', 'flight', 'wings', 'wildlife', 'sky', 'raptor']
    },
    {
      id: 'wildlife-5',
      title: 'Wild Stallion Horse Galloping Across Mountain Meadow',
      description: 'Powerful black horse running freely with flowing mane through wildflowers',
      alt_description: 'Horse galloping through green field',
      urlId: 'photo-1553284965-83fd3e82fa5a',
      width: 4000,
      height: 2667,
      likes: 6820,
      color: '#15803d',
      photographer: { name: 'Helena Lopes', username: 'helenalopes' },
      tags: ['horse', 'stallion', 'animals', 'running', 'nature', 'equestrian']
    }
  ],

  // Motorcycle & Superbikes
  motorcycle: [
    {
      id: 'motorcycle-1',
      title: 'Red Italian Superbike Parked on Scenic Mountain Asphalt',
      description: 'High-performance sport motorcycle with aerodynamic fairings and polished exhaust',
      alt_description: 'Red sport motorcycle parked on asphalt road',
      urlId: 'photo-1558981403-c5f9899a28bc',
      width: 4000,
      height: 2667,
      likes: 7910,
      color: '#dc2626',
      photographer: { name: 'Harley-Davidson', username: 'harleydavidson' },
      tags: ['motorcycle', 'bike', 'superbike', 'ducati', 'racing', 'speed', 'vehicle', 'ride']
    },
    {
      id: 'motorcycle-2',
      title: 'Custom Vintage Cafe Racer on City Street at Night',
      description: 'Stripped-back custom retro motorcycle with leather seat and classic round headlamp',
      alt_description: 'Vintage custom motorcycle on dark city street',
      urlId: 'photo-1568772585407-9361f9bf3a87',
      width: 3840,
      height: 2560,
      likes: 6130,
      color: '#1e293b',
      photographer: { name: 'Gijs Coolen', username: 'gijscoolen' },
      tags: ['motorcycle', 'bike', 'cafe racer', 'custom', 'vintage', 'retro', 'street']
    },
    {
      id: 'motorcycle-3',
      title: 'Mountain Biker Carving Through Dusty Forest Trail',
      description: 'Downhill mountain cyclist kicking up dust on technical singletrack forest corner',
      alt_description: 'Mountain bicyclist riding on dirt track in woods',
      urlId: 'photo-1485965120184-e220f721d03e',
      width: 4100,
      height: 2733,
      likes: 5490,
      color: '#65a30d',
      photographer: { name: 'Coen van de Broek', username: 'coen' },
      tags: ['bicycle', 'bike', 'cycling', 'mountain bike', 'trail', 'forest', 'sport']
    }
  ],

  // Airplane & Aviation
  airplane: [
    {
      id: 'airplane-1',
      title: 'Commercial Passenger Jet Climbing Through Sunset Cloudscape',
      description: 'Twin-engine jetliner banking into golden orange clouds as sun sets on the horizon',
      alt_description: 'Passenger airplane flying above fluffy sunset clouds',
      urlId: 'photo-1436491865332-7a61a109cc05',
      width: 4200,
      height: 2800,
      likes: 8920,
      color: '#ea580c',
      photographer: { name: 'Leio McLaren', username: 'leiomclaren' },
      tags: ['airplane', 'plane', 'aviation', 'flight', 'clouds', 'sunset', 'travel', 'airport', 'jet']
    },
    {
      id: 'airplane-2',
      title: 'Wing View of Blue Sky and Endless Horizon from Flight Window',
      description: 'Airplane wing tip carving through crisp blue atmosphere high above cloud layers',
      alt_description: 'Airplane wing seen through window above cloud cover',
      urlId: 'photo-1540959733332-eab4deabeeaf',
      width: 4000,
      height: 2667,
      likes: 7210,
      color: '#0284c7',
      photographer: { name: 'Suhyeon Choi', username: 'suhyeonchoi' },
      tags: ['airplane', 'flight', 'window view', 'wing', 'sky', 'travel', 'vacation']
    }
  ],

  // Music & Instruments
  music: [
    {
      id: 'music-1',
      title: 'Vintage Acoustic Guitar Resting in Warm Sunlight',
      description: 'Six-string natural spruce top acoustic guitar leaning against rustic brick wall with soft shadows',
      alt_description: 'Acoustic guitar in warm natural sunlight',
      urlId: 'photo-1510915361894-db8b60106cb1',
      width: 4000,
      height: 2667,
      likes: 7620,
      color: '#d97706',
      photographer: { name: 'Jefferson Santos', username: 'jeffersonsantos' },
      tags: ['music', 'guitar', 'acoustic', 'instrument', 'musician', 'strings', 'song', 'audio']
    },
    {
      id: 'music-2',
      title: 'Electric Guitar Solo on Stage with Concert Laser Beams',
      description: 'Rock guitarist shredding an electric guitar with smoke, neon purple and cyan lights',
      alt_description: 'Musician playing electric guitar live on stage',
      urlId: 'photo-1511671782779-c97d3d27a1d4',
      width: 3840,
      height: 2560,
      likes: 9140,
      color: '#8b5cf6',
      photographer: { name: 'Marcela Laskoski', username: 'marcelalaskoski' },
      tags: ['music', 'concert', 'electric guitar', 'stage', 'lights', 'band', 'rock', 'live']
    },
    {
      id: 'music-3',
      title: 'Grand Piano Keys in Elegant Concert Hall',
      description: 'Polished black ebony grand piano with ivory keys reflecting warm stage lights',
      alt_description: 'Grand piano keyboard with shallow depth of field',
      urlId: 'photo-1520523839898-5071270407a7',
      width: 4200,
      height: 2800,
      likes: 6170,
      color: '#1e293b',
      photographer: { name: 'Lorenzo Spoleti', username: 'lorenzospoleti' },
      tags: ['piano', 'music', 'classical', 'keyboard', 'instrument', 'jazz', 'concert']
    }
  ],

  // Flowers & Roses
  flowers: [
    {
      id: 'flowers-1',
      title: 'Dew-Kissed Deep Red Velvet Rose in Morning Bloom',
      description: 'Close-up macro of romantic red rose petals dotted with sparkling clear morning water droplets',
      alt_description: 'Red rose flower with water drops on petals',
      urlId: 'photo-1518709268805-4e9042af9f23',
      width: 4000,
      height: 2667,
      likes: 8740,
      color: '#be123c',
      photographer: { name: 'Ylanite Koppens', username: 'ylanite' },
      tags: ['rose', 'roses', 'flower', 'flowers', 'red', 'petals', 'love', 'nature', 'romantic']
    },
    {
      id: 'flowers-2',
      title: 'Endless Field of Golden Yellow Sunflowers Under Summer Sky',
      description: 'Vast agricultural sunflower field with vibrant yellow blooms turning toward warm sun',
      alt_description: 'Sunflower field stretching towards horizon',
      urlId: 'photo-1597848212624-a19eb35e2651',
      width: 3840,
      height: 2560,
      likes: 7120,
      color: '#ca8a04',
      photographer: { name: 'Aaron Burden', username: 'aaronburden' },
      tags: ['flowers', 'sunflowers', 'summer', 'yellow', 'nature', 'meadow', 'field']
    },
    {
      id: 'flowers-3',
      title: 'Delicate Pink Japanese Cherry Blossoms in Spring',
      description: 'Fragile Sakura flower clusters blooming on ancient branches against pastel blue sky',
      alt_description: 'Pink cherry blossom sakura branches in bloom',
      urlId: 'photo-1522383225653-ed111181a951',
      width: 4100,
      height: 2733,
      likes: 8290,
      color: '#ec4899',
      photographer: { name: 'AJ', username: 'aj' },
      tags: ['flowers', 'sakura', 'cherry blossom', 'japan', 'spring', 'pink', 'bloom']
    }
  ],

  // Gym & Fitness
  fitness: [
    {
      id: 'fitness-1',
      title: 'Athlete Preparing Heavy Deadlift with Chalk Dust Explosion',
      description: 'Dedicated weightlifter clapping chalked hands before lifting olympic barbell under moody gym lights',
      alt_description: 'Weightlifter with chalk dust clapping hands in gym',
      urlId: 'photo-1517838277536-f5f99be501cd',
      width: 4000,
      height: 2667,
      likes: 8150,
      color: '#334155',
      photographer: { name: 'Sven Mieke', username: 'thesvenmieke' },
      tags: ['gym', 'fitness', 'workout', 'weightlifting', 'training', 'chalk', 'crossfit', 'bodybuilding']
    },
    {
      id: 'fitness-2',
      title: 'Basketball Player Executing High-Flying Slam Dunk',
      description: 'Dynamic athletic jump towards the basketball hoop under arena stadium lights',
      alt_description: 'Basketball player dunking ball in hoop',
      urlId: 'photo-1546519638-68e109498ffc',
      width: 3840,
      height: 2560,
      likes: 7290,
      color: '#f97316',
      photographer: { name: 'Markus Spiske', username: 'markusspiske' },
      tags: ['basketball', 'nba', 'dunk', 'sport', 'athlete', 'court', 'ball']
    },
    {
      id: 'fitness-3',
      title: 'Professional Tennis Player Mid-Serve on Clay Court',
      description: 'Tennis player serving the neon yellow tennis ball with red clay dust rising',
      alt_description: 'Tennis player hitting serve on red clay court',
      urlId: 'photo-1595435934249-5df7ed86e1c0',
      width: 4200,
      height: 2800,
      likes: 5830,
      color: '#b91c1c',
      photographer: { name: 'Valentin Balan', username: 'valentinbalan' },
      tags: ['tennis', 'racket', 'clay court', 'serve', 'sport', 'athlete', 'match']
    }
  ],

  // Cities & Urban Architecture
  city: [
    {
      id: 'city-1',
      title: 'Tokyo Neon Shibuya Crossing at Night in Rain',
      description: 'Iconic Tokyo illuminated intersection with neon billboards, traffic light trails and umbrellas',
      alt_description: 'Tokyo city street at night with glowing neon reflections in rain',
      urlId: 'photo-1503899036084-c55cdd92da26',
      width: 4000,
      height: 2667,
      likes: 9980,
      color: '#6366f1',
      photographer: { name: 'Aleksandar Pasaric', username: 'aleksandarpasaric' },
      tags: ['city', 'tokyo', 'japan', 'neon', 'night', 'shibuya', 'cyberpunk', 'urban', 'architecture']
    },
    {
      id: 'city-2',
      title: 'Eiffel Tower Sparkling at Twilight in Paris',
      description: 'The iconic architectural landmark of Paris glowing with warm lights under violet twilight sky',
      alt_description: 'Eiffel tower in Paris illuminated at dusk',
      urlId: 'photo-1502602898657-3e91760cbb34',
      width: 3840,
      height: 2560,
      likes: 9160,
      color: '#8b5cf6',
      photographer: { name: 'Anthony DELANOIX', username: 'anthonydelanoix' },
      tags: ['paris', 'city', 'eiffel tower', 'france', 'architecture', 'travel', 'romantic']
    },
    {
      id: 'city-3',
      title: 'Manhattan Skyline and Brooklyn Bridge at Blue Hour',
      description: 'New York City skyscrapers illuminated across East River with suspension bridge cables',
      alt_description: 'New York City Manhattan skyline reflections at blue hour',
      urlId: 'photo-1496442226666-8d4d0e62e6e9',
      width: 4200,
      height: 2800,
      likes: 9650,
      color: '#0284c7',
      photographer: { name: 'Lianhao Qu', username: 'lianhao' },
      tags: ['city', 'new york', 'nyc', 'manhattan', 'brooklyn bridge', 'skyscrapers', 'skyline']
    }
  ],

  // Books & Library
  books: [
    {
      id: 'books-1',
      title: 'Grand Classical Multi-Story Library with Wooden Bookcases',
      description: 'Historical university library with thousands of antique leather-bound books and warm lamps',
      alt_description: 'Interior of majestic library with bookshelves',
      urlId: 'photo-1521587760476-6c12a4b040da',
      width: 4000,
      height: 2667,
      likes: 7720,
      color: '#92400e',
      photographer: { name: 'Giammarco Boscaro', username: 'giammarcoboscaro' },
      tags: ['books', 'library', 'reading', 'study', 'literature', 'antique', 'education', 'knowledge']
    },
    {
      id: 'books-2',
      title: 'Cozy Reading Corner with Open Book and Hot Coffee Mug',
      description: 'Soft wool knit blanket, open novel and steaming cup of coffee next to rain window',
      alt_description: 'Open book with coffee cup on cozy bed',
      urlId: 'photo-1544716278-ca5e3f4abd8c',
      width: 3840,
      height: 2560,
      likes: 6480,
      color: '#ca8a04',
      photographer: { name: 'Thought Catalog', username: 'thoughtcatalog' },
      tags: ['books', 'coffee', 'cozy', 'reading', 'novel', 'relax', 'autumn']
    }
  ],

  // Luxury Watches
  watches: [
    {
      id: 'watches-1',
      title: 'Luxury Swiss Automatic Chronograph Watch on Slate Stone',
      description: 'Precision mechanical movement wristwatch with sapphire crystal and leather strap',
      alt_description: 'Close-up of luxury wrist watch dial and gears',
      urlId: 'photo-1523275335684-37898b6baf30',
      width: 4000,
      height: 2667,
      likes: 7190,
      color: '#0f172a',
      photographer: { name: 'Jaime Dantas', username: 'jaimedantas' },
      tags: ['watch', 'watches', 'luxury', 'timepiece', 'chronograph', 'accessories', 'style']
    }
  ],

  // Healthcare & Doctor
  doctor: [
    {
      id: 'doctor-1',
      title: 'Compassionate Medical Doctor with Stethoscope in Hospital',
      description: 'Healthcare professional smiling warmly in clean medical clinic wearing white coat',
      alt_description: 'Doctor with stethoscope in hospital clinic',
      urlId: 'photo-1622253692010-333f2da6031d',
      width: 4000,
      height: 2667,
      likes: 5820,
      color: '#0284c7',
      photographer: { name: 'National Cancer Institute', username: 'nci' },
      tags: ['doctor', 'hospital', 'medical', 'healthcare', 'clinic', 'stethoscope', 'medicine', 'nurse']
    }
  ]

};

// Curated high-res Unsplash photo pool for intelligent thematic synthesis
const DYNAMIC_PHOTO_POOL = [
  { urlId: 'photo-1507525428034-b723cf961d3e', color: '#0284c7', photographer: 'Sean Oulashin', username: 'oulashin' },
  { urlId: 'photo-1464822759023-fed622ff2c3b', color: '#1e293b', photographer: 'Kalen Emsley', username: 'kalenemsley' },
  { urlId: 'photo-1518709268805-4e9042af9f23', color: '#be123c', photographer: 'Ylanite Koppens', username: 'ylanite' },
  { urlId: 'photo-1546182990-dffeafbe841d', color: '#b45309', photographer: 'Clément Falize', username: 'clement_falize' },
  { urlId: 'photo-1503899036084-c55cdd92da26', color: '#6366f1', photographer: 'Aleksandar Pasaric', username: 'aleksandarpasaric' },
  { urlId: 'photo-1510915361894-db8b60106cb1', color: '#d97706', photographer: 'Jefferson Santos', username: 'jeffersonsantos' },
  { urlId: 'photo-1517838277536-f5f99be501cd', color: '#334155', photographer: 'Sven Mieke', username: 'thesvenmieke' },
  { urlId: 'photo-1523275335684-37898b6baf30', color: '#0f172a', photographer: 'Jaime Dantas', username: 'jaimedantas' },
  { urlId: 'photo-1436491865332-7a61a109cc05', color: '#ea580c', photographer: 'Leio McLaren', username: 'leiomclaren' },
  { urlId: 'photo-1513104890138-7c749659a591', color: '#b91c1c', photographer: 'Aurélien Lemasson', username: 'aurelien' },
  { urlId: 'photo-1568901346375-23c9450c58cd', color: '#b45309', photographer: 'Amirali Mirhashemian', username: 'amir_v_ali' },
  { urlId: 'photo-1521587760476-6c12a4b040da', color: '#92400e', photographer: 'Giammarco Boscaro', username: 'giammarcoboscaro' },
  { urlId: 'photo-1519046904884-53103b34b206', color: '#0369a1', photographer: 'Ethan Robertson', username: 'ethanrobertson' },
  { urlId: 'photo-1540959733332-eab4deabeeaf', color: '#0284c7', photographer: 'Suhyeon Choi', username: 'suhyeonchoi' },
  { urlId: 'photo-1486870591958-9b9d0d1dda99', color: '#334155', photographer: 'Dave Hoefler', username: 'davehoefler' },
  { urlId: 'photo-1561731216-c3a4d99437d5', color: '#ea580c', photographer: 'Smit Patel', username: 'smitpatel' },
  { urlId: 'photo-1558981403-c5f9899a28bc', color: '#dc2626', photographer: 'Harley-Davidson', username: 'harleydavidson' },
  { urlId: 'photo-1502602898657-3e91760cbb34', color: '#8b5cf6', photographer: 'Anthony Delanoix', username: 'anthonydelanoix' },
  { urlId: 'photo-1511671782779-c97d3d27a1d4', color: '#8b5cf6', photographer: 'Marcela Laskoski', username: 'marcelalaskoski' },
  { urlId: 'photo-1495616811223-4d98c6e9c869', color: '#c026d3', photographer: 'Sébastien Goldberg', username: 'sebastiengoldberg' },
  { urlId: 'photo-1557050543-4d5f4e07ef46', color: '#78716c', photographer: 'Shaaz Jung', username: 'shaazjung' },
  { urlId: 'photo-1597848212624-a19eb35e2651', color: '#ca8a04', photographer: 'Aaron Burden', username: 'aaronburden' },
  { urlId: 'photo-1520523839898-5071270407a7', color: '#1e293b', photographer: 'Lorenzo Spoleti', username: 'lorenzospoleti' },
  { urlId: 'photo-1622253692010-333f2da6031d', color: '#0284c7', photographer: 'National Cancer Institute', username: 'nci' }
];

// Generates complete, photorealistic photography records for any arbitrary user keyword
function synthesizePhotosForQuery(query, count = 24, startOffset = 0) {
  const capQuery = query.charAt(0).toUpperCase() + query.slice(1);
  const titles = [
    `Stunning High-Resolution View of ${capQuery}`,
    `Dramatic Natural Lighting on ${capQuery}`,
    `Cinematic Composition of ${capQuery}`,
    `Atmospheric Perspective of ${capQuery}`,
    `Minimalist Aesthetic ${capQuery} Photography`,
    `Vibrant Colors of ${capQuery} in Morning Light`,
    `Detailed Close-Up of ${capQuery}`,
    `Golden Hour Glow on ${capQuery}`,
    `Ultra HD Showcase of ${capQuery}`,
    `Artistic Visual Study of ${capQuery}`,
    `Modern Expressive ${capQuery} Capture`,
    `Captivating Scenic ${capQuery} Shot`
  ];

  return Array.from({ length: count }, (_, idx) => {
    const itemIndex = idx + startOffset;
    const poolItem = DYNAMIC_PHOTO_POOL[itemIndex % DYNAMIC_PHOTO_POOL.length];
    const title = titles[itemIndex % titles.length] + (itemIndex >= titles.length ? ` #${Math.floor(itemIndex / titles.length) + 1}` : '');
    const likes = 2200 + ((query.length * 137 + itemIndex * 241) % 4600);

    return {
      id: `${query.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${itemIndex + 1}`,
      title,
      description: `High-quality curated photograph capturing the beauty and authentic details of ${query}.`,
      alt_description: `${capQuery} photograph in natural resolution`,
      urlId: poolItem.urlId,
      width: 4000,
      height: 2667,
      likes,
      color: poolItem.color,
      photographer: { name: poolItem.photographer, username: poolItem.username },
      tags: [query.toLowerCase(), 'photography', 'curated', 'high resolution', 'pixora']
    };
  });
}

// Search our local photo database by query keywords
export function queryCuratedDatabase(searchQuery, page = 1, perPage = 12) {
  const query = (searchQuery || '').trim().toLowerCase();
  if (!query) {
    return { rawPhotos: [], total: 0, totalPages: 0 };
  }

  const tokens = query.split(/\s+/).filter(Boolean);

  // Comprehensive category & synonym map covering hundreds of search queries
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
    landscape: 'nature',
    forest: 'nature',
    trees: 'nature',

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
    laptop: 'technology',
    computer: 'technology',

    // Space
    space: 'space',
    galaxy: 'space',
    stars: 'space',
    universe: 'space',
    cosmos: 'space',

    // Pizza
    pizza: 'pizza',
    pepperoni: 'pizza',
    pizzeria: 'pizza',
    margherita: 'pizza',

    // Burger
    burger: 'burger',
    burgers: 'burger',
    cheeseburger: 'burger',
    hamburger: 'burger',
    fries: 'burger',

    // Food
    food: 'food',
    sushi: 'food',
    pasta: 'food',
    pancakes: 'food',
    breakfast: 'food',
    dinner: 'food',
    lunch: 'food',
    culinary: 'food',
    cooking: 'food',
    meal: 'food',
    dessert: 'food',

    // Beach & Ocean
    beach: 'beach',
    beaches: 'beach',
    sea: 'beach',
    ocean: 'beach',
    waves: 'beach',
    tropical: 'beach',
    coast: 'beach',
    shore: 'beach',

    // Mountains
    mountain: 'mountains',
    mountains: 'mountains',
    peaks: 'mountains',
    alps: 'mountains',
    hiking: 'mountains',
    glacier: 'mountains',

    // Sunset
    sunset: 'sunset',
    sunsets: 'sunset',
    sunrise: 'sunset',
    dusk: 'sunset',
    dawn: 'sunset',
    twilight: 'sunset',
    'golden hour': 'sunset',

    // Wildlife
    wildlife: 'wildlife',
    lion: 'wildlife',
    lions: 'wildlife',
    tiger: 'wildlife',
    tigers: 'wildlife',
    elephant: 'wildlife',
    elephants: 'wildlife',
    bird: 'wildlife',
    birds: 'wildlife',
    eagle: 'wildlife',
    horse: 'wildlife',
    horses: 'wildlife',
    animal: 'wildlife',
    animals: 'wildlife',
    safari: 'wildlife',

    // Motorcycle & Bike
    motorcycle: 'motorcycle',
    motorcycles: 'motorcycle',
    bike: 'motorcycle',
    bikes: 'motorcycle',
    superbike: 'motorcycle',
    bicycle: 'motorcycle',
    cycling: 'motorcycle',
    ducati: 'motorcycle',

    // Airplane
    airplane: 'airplane',
    airplanes: 'airplane',
    plane: 'airplane',
    planes: 'airplane',
    aviation: 'airplane',
    flight: 'airplane',
    jet: 'airplane',
    aircraft: 'airplane',
    airport: 'airplane',

    // Music
    music: 'music',
    guitar: 'music',
    guitars: 'music',
    piano: 'music',
    concert: 'music',
    song: 'music',
    musician: 'music',
    instrument: 'music',

    // Flowers
    flower: 'flowers',
    flowers: 'flowers',
    rose: 'flowers',
    roses: 'flowers',
    sunflower: 'flowers',
    sunflowers: 'flowers',
    cherry: 'flowers',
    blossom: 'flowers',
    sakura: 'flowers',

    // Fitness & Gym
    gym: 'fitness',
    fitness: 'fitness',
    workout: 'fitness',
    exercise: 'fitness',
    training: 'fitness',
    crossfit: 'fitness',
    bodybuilding: 'fitness',
    basketball: 'fitness',
    tennis: 'fitness',

    // City & Travel
    city: 'city',
    cities: 'city',
    tokyo: 'city',
    paris: 'city',
    'new york': 'city',
    nyc: 'city',
    manhattan: 'city',
    urban: 'city',
    skyline: 'city',
    architecture: 'city',

    // Books
    book: 'books',
    books: 'books',
    library: 'books',
    reading: 'books',
    literature: 'books',
    novel: 'books',

    // Watches
    watch: 'watches',
    watches: 'watches',
    timepiece: 'watches',
    chronograph: 'watches',

    // Doctor
    doctor: 'doctor',
    doctors: 'doctor',
    hospital: 'doctor',
    medical: 'doctor',
    medicine: 'doctor',
    nurse: 'doctor',
    clinic: 'doctor'
  };

  // Check if any token matches our direct categories
  let targetCategory = null;
  for (const token of tokens) {
    if (categoryMap[token]) {
      targetCategory = categoryMap[token];
      break;
    }
  }

  // Also check full query string (e.g. 'golden hour', 'new york', 'bmw m4')
  if (!targetCategory && categoryMap[query]) {
    targetCategory = categoryMap[query];
  }

  let matched = [];

  if (targetCategory && MOCK_DATABASE[targetCategory]) {
    const list = [...MOCK_DATABASE[targetCategory]];
    // Sort so items matching specific tokens come first
    list.sort((a, b) => {
      let scoreA = 0;
      let scoreB = 0;
      for (const t of tokens) {
        if (a.tags && a.tags.includes(t)) scoreA += 10;
        if (a.title && a.title.toLowerCase().includes(t)) scoreA += 5;
        if (b.tags && b.tags.includes(t)) scoreB += 10;
        if (b.title && b.title.toLowerCase().includes(t)) scoreB += 5;
      }
      return scoreB - scoreA;
    });
    matched = list;
  } else {
    // Search across all items by matching tags or words in title/description
    const all = Object.values(MOCK_DATABASE).flat();
    const scored = all.map((photo) => {
      let score = 0;
      const title = photo.title.toLowerCase();
      const desc = photo.description.toLowerCase();
      const tags = photo.tags || [];

      for (const token of tokens) {
        if (tags.includes(token)) score += 8;
        if (title.includes(token)) score += 5;
        if (desc.includes(token)) score += 3;
        if (tags.some((t) => t.includes(token) || token.includes(t))) score += 3;
      }
      return { photo, score };
    });

    const results = scored.filter((s) => s.score > 0).sort((a, b) => b.score - a.score);
    if (results.length > 0) {
      matched = results.map((r) => r.photo);
    } else {
      matched = synthesizePhotosForQuery(query, 24);
    }
  }

  // Ensure every search has a full complete set of at least 24 high-res photos
  if (matched.length < 24) {
    const needed = 24 - matched.length;
    const synthesized = synthesizePhotosForQuery(query, needed, matched.length);
    matched = [...matched, ...synthesized];
  }

  const total = matched.length;
  const totalPages = Math.ceil(total / perPage) || 1;
  const start = (page - 1) * perPage;
  const rawPhotos = matched.slice(start, start + perPage);

  return { rawPhotos, total, totalPages };
}
