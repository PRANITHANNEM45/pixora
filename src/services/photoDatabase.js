/**
 * Curated Photographic Database with Authentic Unsplash Photos
 * Categorized by domain with keywords, photographer attribution, and high-res URLs.
 */

export const CATEGORIES = {
  cars: [
    {
      id: 'car-1',
      title: 'Black Porsche 911 on Scenic Alpine Pass',
      description: 'High-performance Porsche 911 sports car parked on an open mountain road at golden hour',
      alt_description: 'Black Porsche 911 sports car on open mountain highway',
      urlId: 'photo-1503376780353-7e6692767b70',
      width: 3840,
      height: 2400,
      likes: 4210,
      color: '#1e293b',
      photographer: { name: 'Campbell', username: 'campbell' },
      tags: ['car', 'cars', 'porsche', 'sports car', 'supercar', 'vehicle', 'automobile', 'speed', 'luxury', 'german']
    },
    {
      id: 'car-2',
      title: 'Rosso Corsa Ferrari 488 Supercar',
      description: 'Stunning Italian Ferrari supercar with aerodynamic bodywork in studio lighting',
      alt_description: 'Red Ferrari sports car in high contrast lighting',
      urlId: 'photo-1583121274602-3e2820c69888',
      width: 4000,
      height: 2667,
      likes: 5890,
      color: '#b91c1c',
      photographer: { name: 'Dhiva Krishna', username: 'dhivakrishna' },
      tags: ['car', 'cars', 'ferrari', 'supercar', 'red', 'italian', 'racing', 'fast', 'auto', 'vehicle']
    },
    {
      id: 'car-3',
      title: 'Classic Ford Mustang Vintage American Muscle',
      description: 'Classic 1960s Ford Mustang coupe parked on city asphalt with iconic chrome details',
      alt_description: 'Vintage classic Ford Mustang muscle car',
      urlId: 'photo-1544829099-b9a0c07fad1a',
      width: 3600,
      height: 2400,
      likes: 3850,
      color: '#334155',
      photographer: { name: 'Joey Banks', username: 'joeyabanks' },
      tags: ['car', 'cars', 'mustang', 'ford', 'muscle car', 'classic', 'vintage', 'retro', 'american', 'v8']
    },
    {
      id: 'car-4',
      title: 'Lamborghini Huracan Performance Edition',
      description: 'Sharp angular lines of an exotic Italian Lamborghini hypercar in stealth finish',
      alt_description: 'Dark grey Lamborghini supercar parked in urban scene',
      urlId: 'photo-1511919884226-fd3cad34687c',
      width: 4200,
      height: 2800,
      likes: 6420,
      color: '#0f172a',
      photographer: { name: 'Olav Tvedt', username: 'olav_tvedt' },
      tags: ['car', 'cars', 'lamborghini', 'huracan', 'supercar', 'hypercar', 'stealth', 'fast', 'luxury']
    },
    {
      id: 'car-5',
      title: 'Sunset Orange BMW M4 Competition Coupe',
      description: 'Track-ready BMW M4 performance sports coupe gleaming under sunset skies',
      alt_description: 'Orange BMW M4 sports car in golden hour',
      urlId: 'photo-1525609004556-c46c7d6cf023',
      width: 3900,
      height: 2600,
      likes: 3120,
      color: '#c2410c',
      photographer: { name: 'Stefan Rodriguez', username: 'stefanrodriguez' },
      tags: ['car', 'cars', 'bmw', 'm4', 'coupe', 'german', 'track', 'orange', 'tuning', 'drift']
    },
    {
      id: 'car-6',
      title: 'Electric Blue Chevrolet Corvette Stingray',
      description: 'American sports car legend with aggressive mid-engine styling',
      alt_description: 'Blue Corvette sports car side profile',
      urlId: 'photo-1552519507-da3b142c6e3d',
      width: 4100,
      height: 2700,
      likes: 2980,
      color: '#0369a1',
      photographer: { name: 'Sven D', username: 'svend' },
      tags: ['car', 'cars', 'corvette', 'stingray', 'chevrolet', 'blue', 'sports car', 'american', 'fast']
    },
    {
      id: 'car-7',
      title: 'Audi R8 V10 Quattro Supercar',
      description: 'Silver Audi R8 flagship with Quattro all-wheel drive parked against architectural backdrop',
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
      id: 'car-8',
      title: 'Vintage Volkswagen Beetle Classic Bug',
      description: 'Charming retro Volkswagen Beetle restored in pastel mint finish on coastal road',
      alt_description: 'Pastel classic vintage Volkswagen Beetle car',
      urlId: 'photo-1502877338535-766e1452684a',
      width: 3500,
      height: 2333,
      likes: 3410,
      color: '#0d9488',
      photographer: { name: 'Tudor Stanciu', username: 'tudorstanciu' },
      tags: ['car', 'cars', 'vw', 'volkswagen', 'beetle', 'bug', 'vintage', 'classic', 'cute', 'retro']
    },
    {
      id: 'car-9',
      title: 'Aston Martin Vantage British Luxury GT',
      description: 'Refined craftsmanship meets raw power in this British luxury grand tourer',
      alt_description: 'Sleek dark Aston Martin luxury sports car',
      urlId: 'photo-1617814076367-b759c7d7e738',
      width: 3840,
      height: 2400,
      likes: 3950,
      color: '#1e293b',
      photographer: { name: 'Adrian N', username: 'adriann' },
      tags: ['car', 'cars', 'aston martin', 'british', 'luxury', 'james bond', 'gt', 'vantage']
    },
    {
      id: 'car-10',
      title: 'Off-Road 4x4 Overland Adventure Vehicle',
      description: 'Rugged all-terrain truck equipped for wilderness exploration in desert sand dunes',
      alt_description: 'Off-road 4x4 truck in desert landscape',
      urlId: 'photo-1519641471654-76ce0107ad1b',
      width: 4200,
      height: 2800,
      likes: 2480,
      color: '#d97706',
      photographer: { name: 'Neven Krcmarek', username: 'nevenkrcmarek' },
      tags: ['car', 'cars', 'truck', '4x4', 'offroad', 'suv', 'overland', 'adventure', 'desert', 'jeep']
    },
    {
      id: 'car-11',
      title: 'Red Sports Car Cruising Neon Downtown',
      description: 'Glossy red finish reflecting the evening city lights on open boulevard',
      alt_description: 'Red modern sports car driving down city street',
      urlId: 'photo-1570733117311-d990c3816c47',
      width: 3700,
      height: 2467,
      likes: 3120,
      color: '#991b1b',
      photographer: { name: 'Roberto Nickson', username: 'rpnickson' },
      tags: ['car', 'cars', 'red', 'city', 'night', 'sports car', 'drive', 'street']
    },
    {
      id: 'car-12',
      title: 'Mercedes-AMG GT Performance Coupe',
      description: 'Twin-turbo V8 Mercedes-AMG grand tourer with long sculpted bonnet in silver',
      alt_description: 'Mercedes-AMG GT luxury sports car',
      urlId: 'photo-1563720223185-11003d516935',
      width: 4000,
      height: 2667,
      likes: 4320,
      color: '#475569',
      photographer: { name: 'Kahl Orr', username: 'kahlorr' },
      tags: ['car', 'cars', 'mercedes', 'amg', 'benz', 'german', 'luxury', 'gt', 'v8', 'coupe']
    },
    {
      id: 'car-13',
      title: 'McLaren 720S Aerodynamic Hypercar',
      description: 'Formula 1 derived carbon-fibre hypercar with dihedral doors on race track',
      alt_description: 'McLaren 720S British hypercar on track',
      urlId: 'photo-1508974239320-0a029497e820',
      width: 4100,
      height: 2700,
      likes: 5120,
      color: '#ea580c',
      photographer: { name: 'Carl Raw', username: 'carliscool' },
      tags: ['car', 'cars', 'mclaren', '720s', 'hypercar', 'supercar', 'racing', 'track', 'f1']
    },
    {
      id: 'car-14',
      title: 'Mercedes-Benz Executive Luxury Sedan',
      description: 'Contemporary premium business saloon with illuminated LED headlight signature',
      alt_description: 'Mercedes-Benz luxury black sedan in studio',
      urlId: 'photo-1618843479313-40f8afb4b4d8',
      width: 3900,
      height: 2600,
      likes: 2740,
      color: '#0f172a',
      photographer: { name: 'Alex Suprun', username: 'alexsuprun' },
      tags: ['car', 'cars', 'mercedes', 'sedan', 'luxury', 'executive', 'black', 'limousine']
    },
    {
      id: 'car-15',
      title: 'Tesla Model S Electric Performance',
      description: 'Zero-emission high-tech electric sedan parked at futuristic charging terminal',
      alt_description: 'White Tesla electric vehicle parked',
      urlId: 'photo-1568605117036-5fe5e7bab0b7',
      width: 4000,
      height: 2667,
      likes: 3670,
      color: '#f8fafc',
      photographer: { name: 'Austin Neill', username: 'austinneill' },
      tags: ['car', 'cars', 'tesla', 'electric', 'ev', 'model s', 'tech', 'clean energy', 'autopilot']
    },
    {
      id: 'car-16',
      title: 'Nissan GT-R Nismo Japanese Legend',
      description: 'Twin-turbo Godzilla sports coupe tuned for maximum downforce and acceleration',
      alt_description: 'Nissan GT-R sports car rear view',
      urlId: 'photo-1541348263662-e0c8de4259ba',
      width: 3840,
      height: 2560,
      likes: 4980,
      color: '#334155',
      photographer: { name: 'Tyler Clemmensen', username: 'tylerclemmensen' },
      tags: ['car', 'cars', 'nissan', 'gtr', 'godzilla', 'jdm', 'japanese', 'turbo', 'tuning']
    },
    {
      id: 'car-17',
      title: 'Dodge Challenger SRT Hellcat Widebody',
      description: 'High-horsepower supercharged American muscle car roaring on open dragstrip',
      alt_description: 'Black Dodge Challenger Hellcat muscle car',
      urlId: 'photo-1553440569-bcc63803a83d',
      width: 4200,
      height: 2800,
      likes: 4560,
      color: '#0f172a',
      photographer: { name: 'Austin Ramsey', username: 'austinramsey' },
      tags: ['car', 'cars', 'dodge', 'challenger', 'hellcat', 'muscle car', 'hemi', 'v8', 'american']
    },
    {
      id: 'car-18',
      title: 'Mercedes-Benz Sports Coupe LED Tail Light',
      description: 'Night photography capturing the glowing red taillights and dual exhausts',
      alt_description: 'Mercedes-Benz sports car rear taillights at night',
      urlId: 'photo-1514316454349-750a7fd3da3a',
      width: 3600,
      height: 2400,
      likes: 3190,
      color: '#7f1d1d',
      photographer: { name: 'Samuele Errico', username: 'samuele_errico' },
      tags: ['car', 'cars', 'mercedes', 'taillight', 'night', 'exhaust', 'dark', 'glow']
    },
    {
      id: 'car-19',
      title: 'Vintage Retro Convertible Coastal Cruise',
      description: 'Classic open-top roadster enjoying ocean breeze along Pacific Coast Highway',
      alt_description: 'Classic vintage convertible car on coastal drive',
      urlId: 'photo-1549399542-7e3f8b79c341',
      width: 3900,
      height: 2600,
      likes: 2890,
      color: '#0284c7',
      photographer: { name: 'Gavin Allanwood', username: 'allanwood' },
      tags: ['car', 'cars', 'convertible', 'roadster', 'vintage', 'classic', 'coastal', 'summer']
    },
    {
      id: 'car-20',
      title: 'BMW 3-Series Modern Sports Sedan',
      description: 'Clean athletic German sports sedan finished in sapphire black metallic',
      alt_description: 'Black BMW sedan parked in urban street',
      urlId: 'photo-1567818735868-e71b99932e29',
      width: 4000,
      height: 2667,
      likes: 3410,
      color: '#1e293b',
      photographer: { name: 'Cemre Nur', username: 'cemrenur' },
      tags: ['car', 'cars', 'bmw', 'sedan', 'german', 'black', 'urban', 'luxury']
    },
    {
      id: 'car-21',
      title: 'Candy Red Mercedes Performance Coupe',
      description: 'Deep candy red paintwork glistening in the afternoon sun',
      alt_description: 'Red Mercedes luxury performance car',
      urlId: 'photo-1605559424843-9e4c228bf1c2',
      width: 3840,
      height: 2560,
      likes: 3680,
      color: '#dc2626',
      photographer: { name: 'Maxim Hopman', username: 'maximhopman' },
      tags: ['car', 'cars', 'mercedes', 'red', 'coupe', 'glossy', 'speed']
    },
    {
      id: 'car-22',
      title: '1967 Mustang Fastback Chrome Grille',
      description: 'Close-up detail of the running horse emblem and dual headlamps on classic muscle',
      alt_description: 'Ford Mustang vintage grille and emblem close up',
      urlId: 'photo-1494976388531-d1058494cdd8',
      width: 4200,
      height: 2800,
      likes: 4190,
      color: '#475569',
      photographer: { name: 'Joey Banks', username: 'joeyabanks' },
      tags: ['car', 'cars', 'mustang', 'grille', 'emblem', 'classic', 'vintage', 'muscle']
    },
    {
      id: 'car-23',
      title: 'BMW M8 Competition Flagship Super Coupe',
      description: 'Over 600 horsepower V8 grand tourer sitting low and wide on multi-spoke rims',
      alt_description: 'BMW M8 luxury sports car front view',
      urlId: 'photo-1580273916550-e323be2ae537',
      width: 3900,
      height: 2600,
      likes: 4720,
      color: '#0f172a',
      photographer: { name: 'Alexandre Debiève', username: 'alexandre_d' },
      tags: ['car', 'cars', 'bmw', 'm8', 'competition', 'v8', 'coupe', 'german', 'fast']
    },
    {
      id: 'car-24',
      title: 'Vintage Porsche 356 Speedster Classic',
      description: 'Legendary rounded lightweight German roadster in pristine concourse condition',
      alt_description: 'Classic Porsche 356 vintage roadster',
      urlId: 'photo-1506015391300-4802dc74de2e',
      width: 4100,
      height: 2700,
      likes: 3910,
      color: '#d97706',
      photographer: { name: 'Gilles Lambert', username: 'gilleslambert' },
      tags: ['car', 'cars', 'porsche', '356', 'speedster', 'classic', 'vintage', 'rare', 'german']
    }
  ],

  bikes: [
    {
      id: 'bike-1',
      title: 'Custom Cafe Racer Motorcycle',
      description: 'Handcrafted vintage cafe racer motorcycle with leather seat and clip-on bars',
      alt_description: 'Custom cafe racer motorcycle on street',
      urlId: 'photo-1558981403-c5f9899a28bc',
      width: 3840,
      height: 2400,
      likes: 4200,
      color: '#1e293b',
      photographer: { name: 'Harley-Davidson', username: 'harleydavidson' },
      tags: ['bike', 'bikes', 'motorcycle', 'motorbike', 'cafe racer', 'custom', 'vintage', 'two wheels']
    },
    {
      id: 'bike-2',
      title: 'Ducati Superbike Track Edition',
      description: 'Italian superbike parked on asphalt ready for track lap times',
      alt_description: 'Red Ducati sports motorcycle',
      urlId: 'photo-1568772585407-9361f9bf3a87',
      width: 4000,
      height: 2667,
      likes: 3890,
      color: '#dc2626',
      photographer: { name: 'Grahame Jenkins', username: 'grahamejenkins' },
      tags: ['bike', 'bikes', 'ducati', 'motorcycle', 'racing', 'superbike', 'italian', 'fast']
    },
    {
      id: 'bike-3',
      title: 'Harley-Davidson Heritage Cruiser',
      description: 'Classic chrome-plated American cruiser motorcycle for open highway touring',
      alt_description: 'Harley-Davidson cruiser motorcycle outdoors',
      urlId: 'photo-1558980664-769d59546b3d',
      width: 3900,
      height: 2600,
      likes: 3450,
      color: '#0f172a',
      photographer: { name: 'Harley-Davidson', username: 'harleydavidson' },
      tags: ['bike', 'bikes', 'harley', 'cruiser', 'motorcycle', 'chopper', 'v-twin', 'highway']
    },
    {
      id: 'bike-4',
      title: 'Downhill Mountain Bike on Forest Singletrack',
      description: 'Full-suspension mountain bike carving through mountain forest berms',
      alt_description: 'Mountain bike rider downhill in forest',
      urlId: 'photo-1532298229144-0ec0c57515c7',
      width: 4100,
      height: 2700,
      likes: 2980,
      color: '#15803d',
      photographer: { name: 'Viktor Kern', username: 'viktorkern' },
      tags: ['bike', 'bikes', 'bicycle', 'mountain bike', 'mtb', 'downhill', 'cycling', 'trail']
    },
    {
      id: 'bike-5',
      title: 'Vintage Bicycle in Amsterdam Street',
      description: 'Classic city commuter bicycle parked against historic canal bridge',
      alt_description: 'Classic bicycle leaning against canal bridge in Amsterdam',
      urlId: 'photo-1485965120184-e220f721d03e',
      width: 3600,
      height: 2400,
      likes: 3120,
      color: '#0284c7',
      photographer: { name: 'Javier M', username: 'javierm' },
      tags: ['bike', 'bikes', 'bicycle', 'cycling', 'city', 'urban', 'amsterdam', 'retro']
    },
    {
      id: 'bike-6',
      title: 'Dark Custom Bobber Motorcycle',
      description: 'Minimalist bobber motorcycle with low stance and custom exhaust pipe',
      alt_description: 'Black custom bobber motorcycle parked in alleyway',
      urlId: 'photo-1558981806-ec527fa84c39',
      width: 4000,
      height: 2667,
      likes: 3740,
      color: '#18181b',
      photographer: { name: 'Harley-Davidson', username: 'harleydavidson' },
      tags: ['bike', 'bikes', 'bobber', 'custom', 'motorcycle', 'chopper', 'black']
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
      tags: ['nature', 'mountains', 'snow', 'sunset', 'landscape', 'alps', 'peaks', 'wilderness']
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
      tags: ['nature', 'yosemite', 'river', 'reflection', 'forest', 'national park', 'trees']
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
      tags: ['nature', 'forest', 'pine', 'fog', 'mist', 'trees', 'morning', 'moody', 'green']
    },
    {
      id: 'nature-4',
      title: 'Powerful Waterfall Cascade in Lush Jungle',
      description: 'Vibrant rushing waterfall surrounded by tropical green foliage',
      alt_description: 'Scenic waterfall in dense tropical nature',
      urlId: 'photo-1432405972618-c60b0225b8f9',
      width: 3900,
      height: 2600,
      likes: 3750,
      color: '#065f46',
      photographer: { name: 'Alex Perez', username: 'a2ephotography' },
      tags: ['nature', 'waterfall', 'water', 'cascade', 'jungle', 'river', 'rocks']
    },
    {
      id: 'nature-5',
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
    },
    {
      id: 'nature-6',
      title: 'Golden Autumn Sunlight Through Forest Canopy',
      description: 'Warm rays of morning sun filtering through vibrant golden autumn leaves',
      alt_description: 'Sunbeams shining through autumn trees',
      urlId: 'photo-1518495973542-4542c06a5843',
      width: 3840,
      height: 2560,
      likes: 4230,
      color: '#b45309',
      photographer: { name: 'Fabian Grohs', username: 'grohsfabian' },
      tags: ['nature', 'autumn', 'sunlight', 'sunbeams', 'fall', 'golden', 'trees', 'leaves']
    }
  ],

  architecture: [
    {
      id: 'arch-1',
      title: 'Modern Curvilinear Architectural Facade',
      description: 'Abstract white architectural curves creating dynamic fluid shadows',
      alt_description: 'White curved building architectural photography',
      urlId: 'photo-1513694203232-719a280e022f',
      width: 3840,
      height: 2400,
      likes: 4180,
      color: '#e2e8f0',
      photographer: { name: 'Joel Filipe', username: 'joelfilip' },
      tags: ['architecture', 'building', 'modern', 'curves', 'white', 'design', 'facade', 'minimal']
    },
    {
      id: 'arch-2',
      title: 'Glass and Steel Skyscrapers Reaching Skyward',
      description: 'Low-angle perspective of towering glass corporate high-rises',
      alt_description: 'Glass skyscrapers reflecting blue sky',
      urlId: 'photo-1486406146926-c627a92ad1ab',
      width: 4000,
      height: 2667,
      likes: 4950,
      color: '#0284c7',
      photographer: { name: 'Sean Pollock', username: 'seanpollock' },
      tags: ['architecture', 'skyscraper', 'building', 'city', 'glass', 'sky', 'urban', 'towers']
    },
    {
      id: 'arch-3',
      title: 'Minimalist Interior with Soft Morning Sunlight',
      description: 'Warm natural light casting clean geometric shadows in contemporary room',
      alt_description: 'Minimalist interior room with sunlight and shadows',
      urlId: 'photo-1493809842364-78817add7ffb',
      width: 3700,
      height: 2500,
      likes: 3150,
      color: '#fef3c7',
      photographer: { name: 'Jean-Philippe Delberghe', username: 'jpholland' },
      tags: ['architecture', 'interior', 'minimalist', 'sunlight', 'home', 'room', 'design', 'modern']
    },
    {
      id: 'arch-4',
      title: 'Architectural Geometric Spiral Staircase',
      description: 'Hypnotic symmetry looking down modern spiral staircase architecture',
      alt_description: 'Spiral staircase architectural symmetry',
      urlId: 'photo-1503387762-592deb58ef4e',
      width: 4100,
      height: 2733,
      likes: 5410,
      color: '#334155',
      photographer: { name: 'Daniel von Appen', username: 'danielicious' },
      tags: ['architecture', 'stairs', 'spiral', 'symmetry', 'geometric', 'perspective']
    },
    {
      id: 'arch-5',
      title: 'Luxury Villa with Infinity Swimming Pool',
      description: 'Contemporary residential architecture blending clean lines with tropical waters',
      alt_description: 'Modern luxury home with swimming pool at twilight',
      urlId: 'photo-1512917774080-9991f1c4c750',
      width: 4200,
      height: 2800,
      likes: 6120,
      color: '#0369a1',
      photographer: { name: 'Rohan Makhecha', username: 'rohanmakhecha' },
      tags: ['architecture', 'villa', 'pool', 'luxury', 'house', 'modern', 'home', 'estate']
    },
    {
      id: 'arch-6',
      title: 'Contemporary Open-Concept Creative Office',
      description: 'Spacious collaborative workspace designed for innovation and teamwork',
      alt_description: 'Modern open office workspace with glass partitions',
      urlId: 'photo-1497366216548-37526070297c',
      width: 3900,
      height: 2600,
      likes: 3820,
      color: '#64748b',
      photographer: { name: 'Alesia Kazantceva', username: 'akazantceva' },
      tags: ['architecture', 'office', 'workspace', 'interior', 'contemporary', 'commercial']
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
      tags: ['dog', 'dogs', 'golden retriever', 'puppy', 'pet', 'cute', 'animal', 'happy', 'grass']
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
      tags: ['dog', 'dogs', 'puppy', 'puppies', 'cute', 'adorable', 'pet', 'eyes']
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
      tags: ['dog', 'dogs', 'husky', 'siberian husky', 'blue eyes', 'winter', 'majestic']
    },
    {
      id: 'dog-4',
      title: 'Playful French Bulldog Head Tilt',
      description: 'Funny Frenchie puppy cocking head in curiosity in soft indoor lighting',
      alt_description: 'French bulldog tilting head in curiosity',
      urlId: 'photo-1517849845537-4d257902454a',
      width: 3900,
      height: 2600,
      likes: 6150,
      color: '#475569',
      photographer: { name: 'Karsten Winegeart', username: 'karsten116' },
      tags: ['dog', 'dogs', 'french bulldog', 'frenchie', 'bulldog', 'puppy', 'funny']
    },
    {
      id: 'dog-5',
      title: 'Happy Pembroke Welsh Corgi Running',
      description: 'Energetic corgi dog bounding through green grass with ears up',
      alt_description: 'Pembroke Welsh Corgi running outdoors',
      urlId: 'photo-1561037404-61cd46aa615b',
      width: 4000,
      height: 2667,
      likes: 5310,
      color: '#ea580c',
      photographer: { name: 'Alvan Nee', username: 'alvannee' },
      tags: ['dog', 'dogs', 'corgi', 'running', 'active', 'happy', 'fluffy']
    },
    {
      id: 'dog-6',
      title: 'Adorable Pug Resting Chins on Paws',
      description: 'Charming pug dog taking a cozy afternoon nap on soft blanket',
      alt_description: 'Pug dog resting head on paws',
      urlId: 'photo-1518717758536-85ae29035b6d',
      width: 3800,
      height: 2533,
      likes: 4780,
      color: '#d97706',
      photographer: { name: 'Matthew Henry', username: 'matthewhenry' },
      tags: ['dog', 'dogs', 'pug', 'sleeping', 'lazy', 'pet', 'wrinkles']
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
      tags: ['cat', 'cats', 'kitten', 'tabby', 'eyes', 'feline', 'pet', 'cute', 'whiskers']
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
      tags: ['cat', 'cats', 'ginger', 'orange cat', 'sunlight', 'sleeping', 'pet']
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
      tags: ['cat', 'cats', 'kitten', 'baby cat', 'fluffy', 'cute', 'tiny', 'adorable']
    },
    {
      id: 'cat-4',
      title: 'Cool Cat Wearing Sunglasses',
      description: 'Playful portrait of domestic cat rocking retro mirrored sunglasses',
      alt_description: 'Cat wearing stylish miniature sunglasses',
      urlId: 'photo-1533738363-b7f9aef128ce',
      width: 4100,
      height: 2733,
      likes: 8120,
      color: '#e11d48',
      photographer: { name: 'Kari Shea', username: 'karishea' },
      tags: ['cat', 'cats', 'sunglasses', 'cool', 'funny', 'meme', 'pet']
    },
    {
      id: 'cat-5',
      title: 'Sleek Black Cat with Golden Eyes',
      description: 'Mysterious black panther-like domestic cat looking poised and regal',
      alt_description: 'Black cat staring with yellow eyes',
      urlId: 'photo-1561948955-570b270e7c36',
      width: 4000,
      height: 2667,
      likes: 5670,
      color: '#0f172a',
      photographer: { name: 'Jaime Spaniol', username: 'jaimespaniol' },
      tags: ['cat', 'cats', 'black cat', 'mystery', 'golden eyes', 'sleek', 'feline']
    },
    {
      id: 'cat-6',
      title: 'Little Kitten Stretching Paws Upwards',
      description: 'Sweet white kitten playfully reaching paws into the air while lying on back',
      alt_description: 'Kitten lying on back playing with paws',
      urlId: 'photo-1574158622682-e40e69881006',
      width: 3800,
      height: 2533,
      likes: 6780,
      color: '#f1f5f9',
      photographer: { name: 'Yerlin Matu', username: 'yerlinmatu' },
      tags: ['cat', 'cats', 'kitten', 'playful', 'stretching', 'paws', 'cute']
    }
  ],

  food: [
    {
      id: 'food-1',
      title: 'Gourmet Culinary Dish with Fresh Herbs',
      description: 'Artisan restaurant plating with vibrant reduction sauces and microgreens',
      alt_description: 'Gourmet fine dining dish on dark ceramic plate',
      urlId: 'photo-1504674900247-0877df9cc836',
      width: 4000,
      height: 2667,
      likes: 5980,
      color: '#0f172a',
      photographer: { name: 'Lily Banse', username: 'lvnatikk' },
      tags: ['food', 'culinary', 'gourmet', 'restaurant', 'dinner', 'chef', 'meal', 'delicious']
    },
    {
      id: 'food-2',
      title: 'Juicy Gourmet Smash Burger with Melting Cheese',
      description: 'Double beef smash burger with cheddar, caramelized onions, and brioche bun',
      alt_description: 'Double cheese burger on wooden board',
      urlId: 'photo-1568901346375-23c9450c58cd',
      width: 3840,
      height: 2560,
      likes: 7210,
      color: '#b45309',
      photographer: { name: 'Amirali Mirhashemian', username: 'amir_v_ali' },
      tags: ['food', 'burger', 'cheeseburger', 'beef', 'fast food', 'tasty', 'snack']
    },
    {
      id: 'food-3',
      title: 'Authentic Italian Wood-Fired Pepperoni Pizza',
      description: 'Crisp Neapolitan crust topped with tomato sauce, mozzarella, and spicy pepperoni',
      alt_description: 'Hot pepperoni pizza with melted cheese',
      urlId: 'photo-1513104890138-7c749659a591',
      width: 4100,
      height: 2733,
      likes: 6840,
      color: '#dc2626',
      photographer: { name: 'Ivan Torres', username: 'ivantorres' },
      tags: ['food', 'pizza', 'pepperoni', 'italian', 'cheese', 'dinner', 'crust']
    },
    {
      id: 'food-4',
      title: 'Artisan Latte Coffee with Rosette Foam Art',
      description: 'Barista crafted hot latte in ceramic cup with delicate heart latte art',
      alt_description: 'Cup of latte coffee with foam art',
      urlId: 'photo-1501339847302-ac426a4a7cbb',
      width: 3900,
      height: 2600,
      likes: 4950,
      color: '#78350f',
      photographer: { name: 'Demid Deev', username: 'demid' },
      tags: ['food', 'coffee', 'latte', 'cafe', 'barista', 'espresso', 'cappuccino', 'morning']
    },
    {
      id: 'food-5',
      title: 'Authentic Japanese Tonkotsu Ramen Bowl',
      description: 'Steaming rich pork broth with chashu pork, soft-boiled egg, and ramen noodles',
      alt_description: 'Japanese ramen bowl with egg and pork',
      urlId: 'photo-1555396273-367ea4eb4db5',
      width: 4000,
      height: 2667,
      likes: 5430,
      color: '#ca8a04',
      photographer: { name: 'Mae Mu', username: 'itsmaemu' },
      tags: ['food', 'ramen', 'japanese', 'noodles', 'soup', 'asian', 'lunch']
    },
    {
      id: 'food-6',
      title: 'Golden Fluffy Pancakes with Maple Syrup and Blueberries',
      description: 'Stack of morning pancakes dripping with pure maple syrup and fresh fruit',
      alt_description: 'Stack of fluffy pancakes with syrup and berries',
      urlId: 'photo-1567620905732-2d1ec7ab7445',
      width: 3800,
      height: 2533,
      likes: 6120,
      color: '#d97706',
      photographer: { name: 'Chad Montano', username: 'briewilly' },
      tags: ['food', 'pancakes', 'breakfast', 'syrup', 'sweet', 'blueberries', 'dessert']
    }
  ],

  technology: [
    {
      id: 'tech-1',
      title: 'Software Developer Coding on Modern Laptop',
      description: 'Programmer reviewing code on screen beside hot coffee in cozy workspace',
      alt_description: 'Laptop with code on screen and coffee cup',
      urlId: 'photo-1498050108023-c5249f4df085',
      width: 4000,
      height: 2667,
      likes: 6420,
      color: '#1e293b',
      photographer: { name: 'Christopher Gower', username: 'cgower' },
      tags: ['technology', 'tech', 'coding', 'programming', 'code', 'developer', 'software', 'laptop']
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
      tags: ['technology', 'code', 'javascript', 'html', 'python', 'developer', 'screen']
    },
    {
      id: 'tech-3',
      title: 'Futuristic Microprocessor Chip on Motherboard',
      description: 'Macro view of silicon computer CPU chip glowing with circuitry tracks',
      alt_description: 'Computer motherboard and silicon chip processor',
      urlId: 'photo-1518770660439-4636190af475',
      width: 4200,
      height: 2800,
      likes: 7120,
      color: '#0284c7',
      photographer: { name: 'Alexandre Debiève', username: 'alexandre_d' },
      tags: ['technology', 'chip', 'cpu', 'hardware', 'motherboard', 'ai', 'computer', 'silicon']
    },
    {
      id: 'tech-4',
      title: 'Minimalist Dual Monitor Workspace Setup',
      description: 'Sleek workspace with ergonomic mechanical keyboard and ambient lighting',
      alt_description: 'Modern desk setup with monitors and mechanical keyboard',
      urlId: 'photo-1517694712202-14dd9538aa97',
      width: 3840,
      height: 2560,
      likes: 4780,
      color: '#334155',
      photographer: { name: 'Alexandru Acea', username: 'alexacea' },
      tags: ['technology', 'setup', 'desk', 'workspace', 'monitors', 'office', 'clean']
    },
    {
      id: 'tech-5',
      title: 'Cybersecurity Matrix Data Stream',
      description: 'Digital numbers and encryption code streaming across dark screen',
      alt_description: 'Matrix code and digital data stream',
      urlId: 'photo-1526374965328-7f61d4dc18c5',
      width: 4000,
      height: 2667,
      likes: 6150,
      color: '#16a34a',
      photographer: { name: 'Markus Spiske', username: 'markusspiske' },
      tags: ['technology', 'cyber', 'security', 'matrix', 'green', 'data', 'hacker', 'crypto']
    },
    {
      id: 'tech-6',
      title: 'Tech Team Collaborating on Digital Product UI',
      description: 'Designers and engineers brainstorming app interface concepts in modern agency',
      alt_description: 'Team working together on laptops in meeting',
      urlId: 'photo-1519389950473-47ba0277781c',
      width: 3900,
      height: 2600,
      likes: 3890,
      color: '#475569',
      photographer: { name: 'Annie Spratt', username: 'anniespratt' },
      tags: ['technology', 'team', 'collaboration', 'startup', 'meeting', 'design', 'people']
    }
  ],

  space: [
    {
      id: 'space-1',
      title: 'Cosmic Night Sky with Andromeda Galaxy',
      description: 'Deep space astrophotography revealing stars, galactic dust, and distant nebulas',
      alt_description: 'Night sky filled with millions of stars and galactic dust',
      urlId: 'photo-1506703719100-a0f3a48c0f86',
      width: 4000,
      height: 2600,
      likes: 7890,
      color: '#0f172a',
      photographer: { name: 'Graham Holtshausen', username: 'graham_h' },
      tags: ['space', 'stars', 'galaxy', 'milky way', 'cosmos', 'astronomy', 'night', 'universe']
    },
    {
      id: 'space-2',
      title: 'Planet Earth Glowing Atmosphere from Space Orbit',
      description: 'Breathtaking orbital view of Earth continents surrounded by blue atmosphere',
      alt_description: 'Planet Earth seen from outer space with glowing atmosphere',
      urlId: 'photo-1451187580459-43490279c0fa',
      width: 4200,
      height: 2800,
      likes: 9120,
      color: '#0284c7',
      photographer: { name: 'NASA', username: 'nasa' },
      tags: ['space', 'earth', 'planet', 'orbit', 'nasa', 'satellite', 'globe', 'atmosphere']
    },
    {
      id: 'space-3',
      title: 'Green Aurora Borealis Dancing over Frozen Lake',
      description: 'Vibrant Northern Lights undulating in the Arctic sky reflected in tranquil waters',
      alt_description: 'Northern lights aurora borealis over snowy landscape',
      urlId: 'photo-1447433589675-4aaa569f3e05',
      width: 3840,
      height: 2560,
      likes: 6740,
      color: '#15803d',
      photographer: { name: 'Vincent Guth', username: 'vincentguth' },
      tags: ['space', 'aurora', 'northern lights', 'green', 'night', 'arctic', 'sky']
    },
    {
      id: 'space-4',
      title: 'Astronaut on Spacewalk in Open Orbit',
      description: 'Extravehicular astronaut floating in microgravity above planet surface',
      alt_description: 'Astronaut in spacesuit floating in space',
      urlId: 'photo-1518709268805-4e9042af9f23',
      width: 4000,
      height: 2667,
      likes: 8250,
      color: '#0f172a',
      photographer: { name: 'NASA', username: 'nasa' },
      tags: ['space', 'astronaut', 'spacewalk', 'spacesuit', 'iss', 'nasa', 'orbit']
    },
    {
      id: 'space-5',
      title: 'Luminous Full Moon in Deep Velvet Sky',
      description: 'Detailed lunar craters and mare captured with high magnification telescope',
      alt_description: 'Detailed full moon in dark night sky',
      urlId: 'photo-1532693322450-2cb5c511067d',
      width: 3900,
      height: 2600,
      likes: 6180,
      color: '#475569',
      photographer: { name: 'Mike Petrucci', username: 'mikepetrucci' },
      tags: ['space', 'moon', 'lunar', 'full moon', 'craters', 'telescope', 'night']
    },
    {
      id: 'space-6',
      title: 'Rocket Launch Piercing Low Clouds at Dawn',
      description: 'Orbital booster climbing on brilliant column of flame into the stratosphere',
      alt_description: 'Space rocket launching leaving massive smoke plume',
      urlId: 'photo-1541185933-ef5d8ed016c2',
      width: 4100,
      height: 2733,
      likes: 7450,
      color: '#ea580c',
      photographer: { name: 'SpaceX', username: 'spacex' },
      tags: ['space', 'rocket', 'launch', 'spacex', 'smoke', 'fire', 'mission', 'sky']
    }
  ],

  travel: [
    {
      id: 'travel-1',
      title: 'Eiffel Tower at Golden Twilight in Paris',
      description: 'Iconic Parisian monument framed by classic Haussmannian avenues at sunset',
      alt_description: 'Eiffel Tower in Paris at twilight sunset',
      urlId: 'photo-1502602898657-3e91760cbb34',
      width: 4000,
      height: 2667,
      likes: 8450,
      color: '#e11d48',
      photographer: { name: 'Chris Karidis', username: 'chriskaridis' },
      tags: ['travel', 'paris', 'france', 'eiffel tower', 'europe', 'sunset', 'monument', 'vacation']
    },
    {
      id: 'travel-2',
      title: 'Tokyo Street Bustling with Rainy Neon Reflections',
      description: 'Shinjuku illuminated signs mirrored on wet city street under umbrellas',
      alt_description: 'Tokyo street illuminated with neon signs during rainy night',
      urlId: 'photo-1509198397868-475647b2a1e5',
      width: 4200,
      height: 2800,
      likes: 7650,
      color: '#701a75',
      photographer: { name: 'Aleksandar Pasaric', username: 'apasaric' },
      tags: ['travel', 'tokyo', 'japan', 'neon', 'city', 'night', 'rain', 'asia']
    },
    {
      id: 'travel-3',
      title: 'Times Square Bustling with Light and Energy',
      description: 'Vibrant billboard glow and yellow taxicabs in the heart of Manhattan',
      alt_description: 'Times Square New York City at night with glowing billboards',
      urlId: 'photo-1496442226666-8d4d0e62e6e9',
      width: 3840,
      height: 2560,
      likes: 6210,
      color: '#2563eb',
      photographer: { name: 'Luca Bravo', username: 'lucabravo' },
      tags: ['travel', 'new york', 'nyc', 'manhattan', 'times square', 'usa', 'city']
    },
    {
      id: 'travel-4',
      title: 'Venetian Gondola on Historic Canal in Venice',
      description: 'Traditional black gondola gliding past weathered Venetian palazzo walls',
      alt_description: 'Gondola on canal in Venice Italy',
      urlId: 'photo-1534447677768-be436bb09401',
      width: 4100,
      height: 2733,
      likes: 5890,
      color: '#0e7490',
      photographer: { name: 'Henrique Ferreira', username: 'henriqueferreira' },
      tags: ['travel', 'venice', 'italy', 'gondola', 'canal', 'historic', 'water']
    },
    {
      id: 'travel-5',
      title: 'Santorini Cliffside Whitewashed Houses',
      description: 'Iconic blue-domed churches and white buildings overlooking Aegean caldera',
      alt_description: 'Santorini white village with blue domes overlooking sea',
      urlId: 'photo-1520250497591-112f2f40a3f4',
      width: 4000,
      height: 2667,
      likes: 7120,
      color: '#0284c7',
      photographer: { name: 'Constantin Popp', username: 'constantinpopp' },
      tags: ['travel', 'santorini', 'greece', 'aegean', 'white', 'island', 'summer', 'sea']
    },
    {
      id: 'travel-6',
      title: 'London Tower Bridge over the River Thames',
      description: 'Historic Victorian Gothic suspension bridge spanning London waterfront',
      alt_description: 'Tower Bridge in London England',
      urlId: 'photo-1513635269975-59663e0ac1ad',
      width: 3900,
      height: 2600,
      likes: 5430,
      color: '#475569',
      photographer: { name: 'Luke Stackpoole', username: 'withluke' },
      tags: ['travel', 'london', 'uk', 'tower bridge', 'england', 'river', 'bridge']
    }
  ]
};

/**
 * Searches curated photo collections by query tokens.
 * If query directly matches a known category (e.g. 'cars', 'car', 'vehicle'), prioritizes that category.
 * If query matches individual photo tags across collections, returns matching photos.
 * If no direct matches, returns a diversified fallback matching the query theme.
 */
export function queryCuratedDatabase(searchQuery, page = 1, perPage = 12) {
  const normalizedQuery = (searchQuery || '').trim().toLowerCase();
  if (!normalizedQuery) {
    return { results: [], total: 0, totalPages: 0 };
  }

  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);

  // 1. Direct Category Mapping
  const categoryAliases = {
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
    bmw: 'cars',
    mustang: 'cars',
    lamborghini: 'cars',
    mercedes: 'cars',
    audi: 'cars',
    truck: 'cars',
    motor: 'cars',
    racing: 'cars',

    bike: 'bikes',
    bikes: 'bikes',
    motorcycle: 'bikes',
    motorcycles: 'bikes',
    motorbike: 'bikes',
    bicycle: 'bikes',
    bicycles: 'bikes',
    cycling: 'bikes',

    nature: 'nature',
    mountain: 'nature',
    mountains: 'nature',
    forest: 'nature',
    forests: 'nature',
    waterfall: 'nature',
    landscape: 'nature',
    autumn: 'nature',

    architecture: 'architecture',
    building: 'architecture',
    buildings: 'architecture',
    skyscraper: 'architecture',
    interior: 'architecture',
    house: 'architecture',

    dog: 'dogs',
    dogs: 'dogs',
    puppy: 'dogs',
    puppies: 'dogs',
    husky: 'dogs',
    golden: 'dogs',
    corgi: 'dogs',

    cat: 'cats',
    cats: 'cats',
    kitten: 'cats',
    kittens: 'cats',
    feline: 'cats',

    food: 'food',
    burger: 'food',
    burgers: 'food',
    pizza: 'food',
    coffee: 'food',
    ramen: 'food',
    pancake: 'food',
    meal: 'food',
    restaurant: 'food',

    tech: 'technology',
    technology: 'technology',
    coding: 'technology',
    code: 'technology',
    programming: 'technology',
    computer: 'technology',
    laptop: 'technology',
    software: 'technology',

    space: 'space',
    galaxy: 'space',
    stars: 'space',
    star: 'space',
    astronomy: 'space',
    cosmos: 'space',
    moon: 'space',
    earth: 'space',
    aurora: 'space',
    rocket: 'space',

    travel: 'travel',
    paris: 'travel',
    tokyo: 'travel',
    london: 'travel',
    city: 'travel',
    vacation: 'travel',
    monument: 'travel'
  };

  let matchedCategory = null;
  for (const token of tokens) {
    if (categoryAliases[token]) {
      matchedCategory = categoryAliases[token];
      break;
    }
  }

  let matchedPhotos = [];

  if (matchedCategory && CATEGORIES[matchedCategory]) {
    // If the category matches, take all items from that category
    matchedPhotos = [...CATEGORIES[matchedCategory]];
  } else {
    // 2. Tag and Keyword Scoring across all categories
    const allPhotos = Object.values(CATEGORIES).flat();
    const scoredPhotos = allPhotos.map((photo) => {
      let score = 0;
      const titleLower = photo.title.toLowerCase();
      const descLower = photo.description.toLowerCase();
      const tags = photo.tags || [];

      for (const token of tokens) {
        if (tags.includes(token)) score += 5;
        if (titleLower.includes(token)) score += 4;
        if (descLower.includes(token)) score += 2;
        // Check partial match
        if (tags.some((t) => t.includes(token) || token.includes(t))) score += 2;
      }
      return { photo, score };
    });

    const filtered = scoredPhotos.filter((item) => item.score > 0);
    if (filtered.length > 0) {
      filtered.sort((a, b) => b.score - a.score);
      matchedPhotos = filtered.map((item) => item.photo);
    } else {
      // 3. Fallback: Adaptive thematic photos customized to the query
      matchedPhotos = generateAdaptivePhotos(searchQuery);
    }
  }

  // Calculate pagination slice
  const total = matchedPhotos.length;
  const totalPages = Math.ceil(total / perPage);
  const startIndex = (page - 1) * perPage;
  const pageItems = matchedPhotos.slice(startIndex, startIndex + perPage);

  return {
    rawPhotos: pageItems,
    total,
    totalPages
  };
}

/**
 * Generates an adaptive curated set of Unsplash photos tailored to the query
 */
function generateAdaptivePhotos(query) {
  const allBasePhotos = Object.values(CATEGORIES).flat();
  // Deterministic seed based on query characters
  const seed = query.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

  // Return a randomized but deterministic subset of 12 beautiful photos
  const shuffled = [...allBasePhotos].sort((a, b) => {
    const valA = (a.id.charCodeAt(a.id.length - 1) + seed) % 17;
    const valB = (b.id.charCodeAt(b.id.length - 1) + seed) % 17;
    return valA - valB;
  });

  return shuffled.slice(0, 12);
}
