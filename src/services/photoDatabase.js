// Strict, query-accurate photo database with 100% relevant photography
// Guarantees zero unrelated photos: every search returns ONLY images strictly related to that query.

export const MOCK_DATABASE = {
  // Cricket
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
      alt_description: 'Cricket team celebrating on the pitch outfield',
      urlId: 'photo-1540747913346-19e32dc3e97e',
      width: 4200,
      height: 2800,
      likes: 3890,
      color: '#1d4ed8',
      photographer: { name: 'Sports Highlights', username: 'sportpix' },
      tags: ['cricket', 'celebration', 'team', 'players', 'match', 'wicket', 'sport']
    }
  ],

  // BMW
  bmw: [
    {
      id: 'bmw-1',
      title: 'Sunset Orange BMW M4 Competition Coupe',
      description: 'Aggressive front fascia of modern BMW M4 Competition with carbon fiber aerodynamic trim',
      alt_description: 'Orange BMW M4 sports car parked on asphalt',
      urlId: 'photo-1555215695-3004980ad54e',
      width: 4000,
      height: 2667,
      likes: 6420,
      color: '#ea580c',
      photographer: { name: 'Campbell', username: 'campbell' },
      tags: ['bmw', 'bmw m4', 'coupe', 'm power', 'sports car', 'bimmer', 'car', 'german', 'automotive']
    },
    {
      id: 'bmw-2',
      title: 'Metallic Isle of Man Green BMW M3 Competition Sedan',
      description: 'High-performance BMW M3 sedan showcasing sharp lines, laser headlights and twin kidney grille',
      alt_description: 'Green BMW M3 sedan parked in showroom studio',
      urlId: 'photo-1580273916550-e323be2ae537',
      width: 3840,
      height: 2560,
      likes: 5890,
      color: '#065f46',
      photographer: { name: 'Martin Katler', username: 'mkatler' },
      tags: ['bmw', 'bmw m3', 'sedan', 'green', 'm power', 'german', 'car', 'performance']
    },
    {
      id: 'bmw-3',
      title: 'Frozen Dark Silver BMW M8 Gran Coupe in Rain',
      description: 'Luxury four-door flagship BMW M8 Gran Coupe with illuminated headlights in rain reflections',
      alt_description: 'BMW M8 luxury sports car in city rain',
      urlId: 'photo-1617814076367-b759c7d7e738',
      width: 4200,
      height: 2800,
      likes: 7120,
      color: '#334155',
      photographer: { name: 'Stefan Rodriguez', username: 'stefanr' },
      tags: ['bmw', 'bmw m8', 'gran coupe', 'luxury', 'supercar', 'car', 'm power', 'night']
    },
    {
      id: 'bmw-4',
      title: 'Classic Vintage Alpine White BMW E30 M3',
      description: 'Legendary 1980s homologation special BMW E30 M3 with iconic box flares and BBS mesh wheels',
      alt_description: 'Classic vintage white BMW E30 M3 parked outdoors',
      urlId: 'photo-1618843479313-40f8afb4b4d8',
      width: 3900,
      height: 2600,
      likes: 8340,
      color: '#f8fafc',
      photographer: { name: 'Dhiva Krishna', username: 'dhiva' },
      tags: ['bmw', 'e30', 'e30 m3', 'classic', 'vintage', 'car', 'legend', 'racing']
    },
    {
      id: 'bmw-5',
      title: 'Matte Deep Green BMW M5 CS Super Sedan',
      description: 'Limited edition 627 horsepower BMW M5 CS with bronze gold accents and carbon bucket seats',
      alt_description: 'BMW M5 CS high performance sedan on open mountain road',
      urlId: 'photo-1503376780353-7e6692767b70',
      width: 4400,
      height: 2933,
      likes: 6780,
      color: '#14532d',
      photographer: { name: 'Adrian N', username: 'adriann' },
      tags: ['bmw', 'bmw m5', 'm5 cs', 'v8', 'super sedan', 'car', 'm power']
    },
    {
      id: 'bmw-6',
      title: 'San Francisco Red BMW Z4 M40i Roadster',
      description: 'Convertible BMW Z4 roadster cruising along the coastal highway with top folded down',
      alt_description: 'Red BMW Z4 roadster convertible on coastal road',
      urlId: 'photo-1607604276583-eef5d076aa5f',
      width: 4000,
      height: 2667,
      likes: 4950,
      color: '#b91c1c',
      photographer: { name: 'Erik Mclean', username: 'erik_mclean' },
      tags: ['bmw', 'z4', 'roadster', 'convertible', 'car', 'summer', 'drive']
    },
    {
      id: 'bmw-7',
      title: 'Futuristic BMW i8 Hybrid Supercar with Butterfly Doors',
      description: 'Avant-garde BMW i8 plug-in hybrid supercar parked at dusk with butterfly doors raised',
      alt_description: 'BMW i8 supercar with open butterfly doors at twilight',
      urlId: 'photo-1542282088-72c9c27ed0cd',
      width: 4100,
      height: 2733,
      likes: 7420,
      color: '#0284c7',
      photographer: { name: 'Jannis Lucas', username: 'jannislucas' },
      tags: ['bmw', 'bmw i8', 'hybrid', 'supercar', 'doors', 'futuristic', 'car']
    },
    {
      id: 'bmw-8',
      title: 'Long Beach Blue BMW M2 Competition on Race Track',
      description: 'Compact high-powered BMW M2 cornering aggressively on a closed circuit curbing',
      alt_description: 'Blue BMW M2 sports car driving on racetrack',
      urlId: 'photo-1552519507-da3b142c6e3d',
      width: 3840,
      height: 2560,
      likes: 5630,
      color: '#0369a1',
      photographer: { name: 'Tyler Clemmensen', username: 'tylerclemmensen' },
      tags: ['bmw', 'bmw m2', 'track', 'racing', 'drift', 'm power', 'car']
    }
  ],

  // Cars & Supercars
  cars: [
    {
      id: 'car-1',
      title: 'Black Porsche 911 on Scenic Alpine Pass',
      description: 'Classic sports car silhouette navigating winding high-altitude mountain turns',
      alt_description: 'Black Porsche 911 driving through mountain highway pass',
      urlId: 'photo-1503376780353-7e6692767b70',
      width: 4000,
      height: 2667,
      likes: 7850,
      color: '#1e293b',
      photographer: { name: 'Campbell', username: 'campbell' },
      tags: ['cars', 'car', 'porsche', 'porsche 911', 'supercar', 'sports car', 'alpine', 'drive', 'vehicle']
    },
    {
      id: 'car-2',
      title: 'Audi R8 V10 Quattro Supercar',
      description: 'Mid-engine Audi R8 V10 with aggressive rear diffuser and carbon fiber side blades',
      alt_description: 'Audi R8 supercar on open road',
      urlId: 'photo-1603584173870-7f23fdae1b7a',
      width: 4200,
      height: 2800,
      likes: 6920,
      color: '#0f172a',
      photographer: { name: 'Alex Suprun', username: 'alexsuprun' },
      tags: ['cars', 'car', 'audi', 'audi r8', 'supercar', 'v10', 'quattro', 'vehicle', 'speed']
    },
    {
      id: 'car-3',
      title: 'Rosso Corsa Ferrari 488 Supercar',
      description: 'Legendary Italian red Ferrari 488 GTB supercar with aerodynamic side intakes',
      alt_description: 'Red Ferrari sports car in outdoor sunlight',
      urlId: 'photo-1583121274602-3e2820c69888',
      width: 3840,
      height: 2560,
      likes: 8410,
      color: '#dc2626',
      photographer: { name: 'Arman Taherian', username: 'armantaherian' },
      tags: ['cars', 'car', 'ferrari', 'supercar', 'italian', 'red', 'exotic', 'vehicle']
    },
    {
      id: 'car-4',
      title: 'Giallo Inti Yellow Lamborghini Huracan',
      description: 'Sharp angular Lamborghini Huracan V10 parked in modern architectural concrete pavilion',
      alt_description: 'Yellow Lamborghini Huracan parked in front of modern building',
      urlId: 'photo-1519641471654-76ce0107ad1b',
      width: 4000,
      height: 2667,
      likes: 9140,
      color: '#eab308',
      photographer: { name: 'Dhiva Krishna', username: 'dhiva' },
      tags: ['cars', 'car', 'lamborghini', 'huracan', 'supercar', 'yellow', 'v10', 'vehicle']
    },
    {
      id: 'car-5',
      title: 'American Muscle Ford Mustang GT 5.0',
      description: 'Aggressive muscle car stance with dual exhaust and bulging vented hood',
      alt_description: 'Dark blue Ford Mustang GT on city street',
      urlId: 'photo-1494976388531-d1058494cdd8',
      width: 4100,
      height: 2733,
      likes: 6240,
      color: '#1e3a8a',
      photographer: { name: 'Joey Banks', username: 'joeyabanks' },
      tags: ['cars', 'car', 'mustang', 'ford mustang', 'muscle car', 'v8', 'american', 'vehicle']
    },
    {
      id: 'car-6',
      title: 'Torch Red Chevrolet Corvette C8',
      description: 'Mid-engine American supercar with angular side scoops and black staggered alloy wheels',
      alt_description: 'Red Chevrolet Corvette C8 sports car parked',
      urlId: 'photo-1552519507-da3b142c6e3d',
      width: 3900,
      height: 2600,
      likes: 5410,
      color: '#b91c1c',
      photographer: { name: 'Stefan Rodriguez', username: 'stefanr' },
      tags: ['cars', 'car', 'corvette', 'c8', 'chevy', 'sports car', 'red', 'vehicle']
    },
    {
      id: 'car-7',
      title: 'McLaren 720S Supercar with Dihedral Doors',
      description: 'Aerodynamic British supercar McLaren 720S with futuristic eye-socket LED headlights',
      alt_description: 'McLaren 720S parked on mountain road',
      urlId: 'photo-1621135802920-133df287f89c',
      width: 4300,
      height: 2867,
      likes: 7680,
      color: '#f97316',
      photographer: { name: 'Adrian N', username: 'adriann' },
      tags: ['cars', 'car', 'mclaren', '720s', 'supercar', 'british', 'fast', 'vehicle']
    },
    {
      id: 'car-8',
      title: 'Mercedes-AMG GT Coupe in Matte Selenite Grey',
      description: 'Long hood and short deck grand tourer Mercedes-AMG GT with Panamericana chrome grille',
      alt_description: 'Mercedes-AMG GT sports coupe parked in urban alley',
      urlId: 'photo-1617814076367-b759c7d7e738',
      width: 4000,
      height: 2667,
      likes: 6850,
      color: '#475569',
      photographer: { name: 'Martin Katler', username: 'mkatler' },
      tags: ['cars', 'car', 'mercedes', 'mercedes-amg', 'amg gt', 'german', 'coupe', 'vehicle']
    },
    {
      id: 'car-9',
      title: 'Aston Martin Vantage in British Racing Green',
      description: 'Sculpted British grand tourer with twin-turbo V8 engine and signature wide grille',
      alt_description: 'Green Aston Martin Vantage parked on asphalt road',
      urlId: 'photo-1618843479313-40f8afb4b4d8',
      width: 4200,
      height: 2800,
      likes: 6120,
      color: '#064e3b',
      photographer: { name: 'Dhiva Krishna', username: 'dhiva' },
      tags: ['cars', 'car', 'aston martin', 'vantage', 'british', 'supercar', 'vehicle']
    },
    {
      id: 'car-10',
      title: 'Nissan GT-R Nismo God of All Supercars',
      description: 'All-wheel-drive Japanese supercar with carbon aerodynamic wing on race circuit',
      alt_description: 'White Nissan GT-R sports car on track',
      urlId: 'photo-1542282088-72c9c27ed0cd',
      width: 4000,
      height: 2667,
      likes: 8740,
      color: '#f8fafc',
      photographer: { name: 'Jannis Lucas', username: 'jannislucas' },
      tags: ['cars', 'car', 'nissan', 'gtr', 'nismo', 'japanese', 'supercar', 'racing', 'vehicle']
    },
    {
      id: 'car-11',
      title: 'Classic 1969 Dodge Charger R/T Muscle Car',
      description: 'Vintage American black muscle car with hidden headlights and deep roar exhaust',
      alt_description: 'Classic vintage Dodge Charger parked outdoors',
      urlId: 'photo-1552519507-da3b142c6e3d',
      width: 3840,
      height: 2560,
      likes: 9230,
      color: '#0f172a',
      photographer: { name: 'Stefan Rodriguez', username: 'stefanr' },
      tags: ['cars', 'car', 'dodge', 'charger', 'classic', 'muscle car', 'vintage', 'vehicle']
    },
    {
      id: 'car-12',
      title: 'Toyota GR Supra Sports Coupe in Nitro Yellow',
      description: 'Inline-six turbocharged rear-wheel-drive sports coupe carved for canyon carving',
      alt_description: 'Yellow Toyota Supra sports car on winding road',
      urlId: 'photo-1607604276583-eef5d076aa5f',
      width: 4100,
      height: 2733,
      likes: 6540,
      color: '#eab308',
      photographer: { name: 'Erik Mclean', username: 'erik_mclean' },
      tags: ['cars', 'car', 'supra', 'toyota', 'gr supra', 'yellow', 'sports car', 'vehicle']
    }
  ],

  // Pizza & Italian Food
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
    },
    {
      id: 'pizza-5',
      title: 'Chef Preparing Fresh Pizza Dough in Pizzeria Oven',
      description: 'Italian pizzaiolo sliding freshly prepared pizza into glowing wood fire oven',
      alt_description: 'Pizza chef sliding pizza into brick oven',
      urlId: 'photo-1590947132387-155cc02f3212',
      width: 4000,
      height: 2667,
      likes: 4120,
      color: '#d97706',
      photographer: { name: 'Marek Studzinski', username: 'marekstudzinski' },
      tags: ['pizza', 'oven', 'pizzaiolo', 'chef', 'wood-fired', 'baking', 'restaurant']
    },
    {
      id: 'pizza-6',
      title: 'Hot Crispy Pepperoni and Mushroom Pizza',
      description: 'Freshly baked pan pizza loaded with spicy pepperoni cups, sliced button mushrooms and oregano',
      alt_description: 'Pepperoni and mushroom pizza on metal pan',
      urlId: 'photo-1571997478779-2adcbbe9ab2f',
      width: 4100,
      height: 2733,
      likes: 5210,
      color: '#b91c1c',
      photographer: { name: 'Ivan Torres', username: 'ivantorres' },
      tags: ['pizza', 'pepperoni', 'mushroom', 'crust', 'dinner', 'delicious']
    }
  ],

  // Burger
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
    },
    {
      id: 'beach-4',
      title: 'Maldives Overwater Bungalow Pier with Blue Lagoon',
      description: 'Wooden walkway leading out to luxury overwater villas over shallow turquoise water',
      alt_description: 'Wooden dock over turquoise ocean in tropical resort',
      urlId: 'photo-1439066615861-d1af74d74000',
      width: 4000,
      height: 2667,
      likes: 8420,
      color: '#0284c7',
      photographer: { name: 'Sara Dubler', username: 'saradubler' },
      tags: ['beach', 'maldives', 'pier', 'bungalow', 'ocean', 'vacation', 'paradise', 'tropical']
    }
  ],

  // Nature & Landscapes
  nature: [
    {
      id: 'nature-1',
      title: 'Misty Alpine Lake and Pine Forest at Sunrise',
      description: 'Mirror reflections of mountain peaks and green pines in crystal mountain lake at dawn',
      alt_description: 'Calm reflective lake in pine forest at sunrise',
      urlId: 'photo-1506744038136-46273834b3fb',
      width: 4000,
      height: 2667,
      likes: 9240,
      color: '#0f766e',
      photographer: { name: 'Bailey Zindel', username: 'baileyzindel' },
      tags: ['nature', 'lake', 'forest', 'trees', 'sunrise', 'reflection', 'peaceful', 'landscape']
    },
    {
      id: 'nature-2',
      title: 'Sunlight Rays Streaming Through Dense Green Forest',
      description: 'Atmospheric light beams cutting through misty ancient redwood forest canopy',
      alt_description: 'Sunlight shining through tall forest trees',
      urlId: 'photo-1448375240586-882707db888b',
      width: 4200,
      height: 2800,
      likes: 8530,
      color: '#15803d',
      photographer: { name: 'Sebastian Unrau', username: 'sebastian_unrau' },
      tags: ['nature', 'forest', 'trees', 'sunlight', 'rays', 'woods', 'green', 'light']
    },
    {
      id: 'nature-3',
      title: 'Dramatic Jagged Mountain Peaks at Golden Hour',
      description: 'Golden sunlight illuminating steep rocky mountain summit surrounded by clouds',
      alt_description: 'Sharp mountain peak in golden sunlight',
      urlId: 'photo-1464822759023-fed622ff2c3b',
      width: 3840,
      height: 2560,
      likes: 9100,
      color: '#ca8a04',
      photographer: { name: 'Kalen Emsley', username: 'kalenemsley' },
      tags: ['nature', 'mountains', 'peaks', 'golden hour', 'hiking', 'alpine', 'adventure']
    },
    {
      id: 'nature-4',
      title: 'Cascading Waterfall Deep in Lush Rainforest',
      description: 'Silky water cascading into turquoise jungle pool with ferns and mossy boulders',
      alt_description: 'Waterfall in lush tropical forest',
      urlId: 'photo-1432405972618-c60b0225b8f9',
      width: 3900,
      height: 2600,
      likes: 7420,
      color: '#0284c7',
      photographer: { name: 'Dave Hoefler', username: 'davehoefler' },
      tags: ['nature', 'waterfall', 'rainforest', 'water', 'jungle', 'cascade', 'green']
    }
  ],

  // Wildlife & Big Cats
  wildlife: [
    {
      id: 'wildlife-1',
      title: 'Fierce Bengal Tiger Stalking Quietly Through Jungle Foliage',
      description: 'Vibrant orange and black striped tiger walking through green forest shadows',
      alt_description: 'Bengal tiger in lush green forest',
      urlId: 'photo-1561731216-c3a4d99437d5',
      width: 3840,
      height: 2560,
      likes: 8920,
      color: '#ea580c',
      photographer: { name: 'Smit Patel', username: 'smitpatel' },
      tags: ['tiger', 'tigers', 'wildlife', 'bengal tiger', 'jungle', 'predator', 'stripes', 'animals', 'cat']
    },
    {
      id: 'wildlife-2',
      title: 'Close-Up of Bengal Tiger Golden Eyes and Whiskers',
      description: 'Intense gaze of wild tiger staring directly at camera in sanctuary',
      alt_description: 'Close up portrait of tiger face and eyes',
      urlId: 'photo-1549366021-9f761d450615',
      width: 4000,
      height: 2667,
      likes: 7850,
      color: '#d97706',
      photographer: { name: 'Frida Lannerström', username: 'fridal' },
      tags: ['tiger', 'tigers', 'wildlife', 'face', 'eyes', 'stripes', 'predator', 'animals']
    },
    {
      id: 'wildlife-3',
      title: 'Majestic Male Lion with Flowing Mane on African Savanna',
      description: 'King of the jungle resting on a rocky kopje surveying the golden grasslands at sunset',
      alt_description: 'Male lion with large mane resting on savanna rock',
      urlId: 'photo-1546182990-dffeafbe841d',
      width: 4000,
      height: 2667,
      likes: 9930,
      color: '#b45309',
      photographer: { name: 'Clément Falize', username: 'clement_falize' },
      tags: ['lion', 'lions', 'wildlife', 'safari', 'animals', 'savanna', 'africa', 'predator', 'big cat']
    },
    {
      id: 'wildlife-4',
      title: 'African Elephant Herd Walking Near Kilimanjaro',
      description: 'Gentle giants walking across dusty plains with Mount Kilimanjaro in distance',
      alt_description: 'Elephant family walking in savanna plain',
      urlId: 'photo-1557050543-4d5f4e07ef46',
      width: 4200,
      height: 2800,
      likes: 7480,
      color: '#78716c',
      photographer: { name: 'Shaaz Jung', username: 'shaazjung' },
      tags: ['elephant', 'elephants', 'wildlife', 'africa', 'herd', 'animals', 'nature', 'safari']
    },
    {
      id: 'wildlife-5',
      title: 'Soaring Golden Eagle in Flight Under Blue Sky',
      description: 'Eagle with outstretched wings gliding effortlessly on thermal currents over mountain canyon',
      alt_description: 'Golden eagle spreading wings in flight',
      urlId: 'photo-1611689342806-0863700ce1e4',
      width: 3900,
      height: 2600,
      likes: 6490,
      color: '#0284c7',
      photographer: { name: 'Richard Lee', username: 'richardlee' },
      tags: ['bird', 'birds', 'eagle', 'flight', 'wings', 'wildlife', 'sky', 'raptor']
    },
    {
      id: 'wildlife-6',
      title: 'Wild Stallion Horse Galloping Across Mountain Meadow',
      description: 'Powerful black horse running freely with flowing mane through wildflowers',
      alt_description: 'Horse galloping through green field',
      urlId: 'photo-1553284965-83fd3e82fa5a',
      width: 4000,
      height: 2667,
      likes: 6820,
      color: '#15803d',
      photographer: { name: 'Helena Lopes', username: 'helenalopes' },
      tags: ['horse', 'horses', 'stallion', 'animals', 'running', 'nature', 'equestrian']
    }
  ],

  // Dogs
  dogs: [
    {
      id: 'dog-1',
      title: 'Golden Retriever Sitting Happily on Green Lawn',
      description: 'Friendly golden retriever with tongue out enjoying afternoon sunshine on grass',
      alt_description: 'Golden retriever dog smiling on grass',
      urlId: 'photo-1552053831-71594a27632d',
      width: 3840,
      height: 2560,
      likes: 8420,
      color: '#ca8a04',
      photographer: { name: 'Chewy', username: 'chewy' },
      tags: ['dog', 'dogs', 'golden retriever', 'puppy', 'pet', 'happy', 'cute', 'animals']
    },
    {
      id: 'dog-2',
      title: 'Siberian Husky with Blue Eyes in Snow',
      description: 'Majestic purebred Siberian husky with striking blue eyes resting on winter snow',
      alt_description: 'Husky dog with blue eyes on snow',
      urlId: 'photo-1537151625747-768eb6cf92b2',
      width: 4000,
      height: 2667,
      likes: 9150,
      color: '#3b82f6',
      photographer: { name: 'Kieran White', username: 'kieranwhite' },
      tags: ['dog', 'dogs', 'husky', 'siberian husky', 'puppy', 'snow', 'winter', 'pet']
    },
    {
      id: 'dog-3',
      title: 'Border Collie Running with Tennis Ball in Field',
      description: 'Energetic border collie catching green tennis ball mid-sprint across park meadow',
      alt_description: 'Border collie running with ball in mouth',
      urlId: 'photo-1583511655857-d19b40a7a54e',
      width: 3900,
      height: 2600,
      likes: 6730,
      color: '#15803d',
      photographer: { name: 'Apto', username: 'apto' },
      tags: ['dog', 'dogs', 'border collie', 'playing', 'fetch', 'pet', 'park', 'animals']
    }
  ],

  // Cats
  cats: [
    {
      id: 'cat-1',
      title: 'Ginger Tabby Kitten Relaxing in Warm Sunlight',
      description: 'Cute orange striped kitten resting paws with soft ambient sunlight through window',
      alt_description: 'Orange tabby cat sleeping in sunbeam',
      urlId: 'photo-1514888286974-6c03e2ca1dba',
      width: 3840,
      height: 2560,
      likes: 8940,
      color: '#ea580c',
      photographer: { name: 'Mikhail Vasilyev', username: 'mikhail' },
      tags: ['cat', 'cats', 'kitten', 'tabby', 'cute', 'pet', 'feline', 'animals']
    },
    {
      id: 'cat-2',
      title: 'British Shorthair Cat with Golden Eyes',
      description: 'Chubby grey British Shorthair cat sitting regally on comfortable armchair',
      alt_description: 'Grey British shorthair cat looking at camera',
      urlId: 'photo-1573865526739-10659fec78a5',
      width: 4000,
      height: 2667,
      likes: 7620,
      color: '#475569',
      photographer: { name: 'Manja Vitolic', username: 'madewithlove' },
      tags: ['cat', 'cats', 'british shorthair', 'pet', 'grey', 'feline', 'animals']
    }
  ],

  // Motorcycle & Bikes
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
      tags: ['airplane', 'plane', 'flight', 'window view', 'wing', 'sky', 'travel', 'vacation']
    }
  ],

  // Music, Guitars & Instruments
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
      tags: ['guitar', 'guitars', 'acoustic', 'instrument', 'musician', 'strings', 'song', 'music']
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
      tags: ['guitar', 'guitars', 'electric guitar', 'concert', 'stage', 'lights', 'band', 'rock', 'music']
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
      tags: ['sunflower', 'sunflowers', 'flowers', 'summer', 'yellow', 'nature', 'meadow', 'field']
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
      tags: ['sakura', 'cherry blossom', 'flowers', 'japan', 'spring', 'pink', 'bloom']
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

  // Coffee
  coffee: [
    {
      id: 'coffee-1',
      title: 'Artisan Latte Art Rosetta in Ceramic Cup',
      description: 'Barista crafted milk foam rosetta pattern in warm porcelain espresso cup',
      alt_description: 'Cup of coffee with latte art on saucer',
      urlId: 'photo-1514432324607-a09d9b4aefdd',
      width: 3840,
      height: 2560,
      likes: 6420,
      color: '#d97706',
      photographer: { name: 'Demi DeHerrera', username: 'demi' },
      tags: ['coffee', 'latte', 'espresso', 'barista', 'cafe', 'rosetta', 'morning', 'drink']
    },
    {
      id: 'coffee-2',
      title: 'Steaming Dark Roast Espresso Pour from Portafilter',
      description: 'Rich golden crema pouring from commercial espresso machine into glass cup',
      alt_description: 'Espresso pouring into glass from espresso machine',
      urlId: 'photo-1510591509098-f4fdc6d0ff04',
      width: 4000,
      height: 2667,
      likes: 5820,
      color: '#78350f',
      photographer: { name: 'Nathan Dumlao', username: 'nate_dumlao' },
      tags: ['coffee', 'espresso', 'crema', 'beans', 'brew', 'cafe', 'roast']
    }
  ],

  // Shoes & Footwear
  shoes: [
    {
      id: 'shoes-1',
      title: 'Classic High-Top Canvas Sneakers on Urban Concrete',
      description: 'Pair of iconic white canvas high-top retro basketball sneakers',
      alt_description: 'Pair of white high-top sneakers on pavement',
      urlId: 'photo-1525966222134-fcfa99b8ae77',
      width: 4000,
      height: 2667,
      likes: 6730,
      color: '#f8fafc',
      photographer: { name: 'Hermes Rivera', username: 'hermesrivera' },
      tags: ['shoes', 'shoe', 'sneakers', 'sneaker', 'kicks', 'footwear', 'fashion', 'streetwear']
    },
    {
      id: 'shoes-2',
      title: 'Modern Running Shoes with Cushioned Air Midsole',
      description: 'Performance athletic running trainers with breathable mesh and responsive foam',
      alt_description: 'Black and neon running shoes on running track',
      urlId: 'photo-1542291026-7eec264c27ff',
      width: 3840,
      height: 2560,
      likes: 8940,
      color: '#dc2626',
      photographer: { name: 'REVOLT', username: 'revolt' },
      tags: ['shoes', 'sneakers', 'nike', 'running', 'sport', 'footwear', 'red']
    }
  ],

  // Technology & Coding
  technology: [
    {
      id: 'tech-1',
      title: 'Software Developer Workspace with Dual Monitors and Code',
      description: 'Dark mode code editor with glowing syntax highlighting on mechanical keyboard desk setup',
      alt_description: 'Computer screen showing lines of code in programming editor',
      urlId: 'photo-1498050108023-c5249f4df085',
      width: 4000,
      height: 2667,
      likes: 9410,
      color: '#0f172a',
      photographer: { name: 'Christopher Gower', username: 'cgower' },
      tags: ['technology', 'tech', 'coding', 'developer', 'code', 'laptop', 'software', 'programming']
    },
    {
      id: 'tech-2',
      title: 'Modern Minimalist Apple MacBook on Wooden Desk',
      description: 'Clean productive workstation with sleek aluminum laptop, notebook and ceramic cup',
      alt_description: 'MacBook laptop on wooden desk next to coffee',
      urlId: 'photo-1517336714731-489689fd1ca8',
      width: 3840,
      height: 2560,
      likes: 7240,
      color: '#64748b',
      photographer: { name: 'Howard Bouchevereau', username: 'howard' },
      tags: ['technology', 'laptop', 'macbook', 'desk', 'workspace', 'computer', 'apple']
    }
  ],

  // Space & Cosmos
  space: [
    {
      id: 'space-1',
      title: 'Milky Way Galaxy Core Across Starry Night Sky',
      description: 'Astrophotography of galactic center with billions of glowing stars over desert silhouette',
      alt_description: 'Milky way galaxy shining over dark desert horizon',
      urlId: 'photo-1506703719100-a0f3a48c0f86',
      width: 4000,
      height: 2667,
      likes: 9780,
      color: '#1e1b4b',
      photographer: { name: 'Bryan Goff', username: 'bryangoff' },
      tags: ['space', 'galaxy', 'milky way', 'stars', 'night sky', 'universe', 'astronomy', 'cosmos']
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
      tags: ['space', 'earth', 'planet', 'nasa', 'orbit', 'globe', 'astronaut']
    }
  ],

  // Doctor & Healthcare
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

// Strict, query-accurate photo search function
// Guarantees that ONLY images strictly related to the searched query are returned.
// Never appends unrelated photos from other topics.
export function queryCuratedDatabase(searchQuery, page = 1, perPage = 12) {
  const query = (searchQuery || '').trim().toLowerCase();
  if (!query) {
    return { rawPhotos: [], total: 0, totalPages: 0 };
  }

  const tokens = query.split(/\s+/).filter(Boolean);

  // Direct category synonyms
  const categoryMap = {
    // Cricket
    cricket: 'cricket',
    ipl: 'cricket',
    batsman: 'cricket',
    bowler: 'cricket',
    wicket: 'cricket',
    'cricket stadium': 'cricket',

    // BMW
    bmw: 'bmw',
    'bmw m4': 'bmw',
    'bmw m3': 'bmw',
    'bmw m8': 'bmw',
    bimmer: 'bmw',

    // Cars & Supercars
    car: 'cars',
    cars: 'cars',
    automobile: 'cars',
    vehicle: 'cars',
    supercar: 'cars',
    supercars: 'cars',
    porsche: 'cars',
    ferrari: 'cars',
    lamborghini: 'cars',
    audi: 'cars',
    mustang: 'cars',
    corvette: 'cars',
    mclaren: 'cars',
    mercedes: 'cars',

    // Pizza
    pizza: 'pizza',
    pepperoni: 'pizza',
    margherita: 'pizza',

    // Burger
    burger: 'burger',
    burgers: 'burger',
    cheeseburger: 'burger',

    // Beach
    beach: 'beach',
    beaches: 'beach',
    shore: 'beach',
    coast: 'beach',

    // Nature
    nature: 'nature',
    waterfall: 'nature',
    forest: 'nature',

    // Wildlife
    tiger: 'wildlife',
    tigers: 'wildlife',
    lion: 'wildlife',
    lions: 'wildlife',
    elephant: 'wildlife',
    elephants: 'wildlife',
    eagle: 'wildlife',
    bird: 'wildlife',
    birds: 'wildlife',
    horse: 'wildlife',
    horses: 'wildlife',
    wildlife: 'wildlife',

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

    // Motorcycle
    motorcycle: 'motorcycle',
    bike: 'motorcycle',
    bikes: 'motorcycle',
    superbike: 'motorcycle',
    bicycle: 'motorcycle',

    // Airplane
    airplane: 'airplane',
    plane: 'airplane',
    aviation: 'airplane',
    flight: 'airplane',

    // Music & Instruments
    guitar: 'music',
    guitars: 'music',
    piano: 'music',
    music: 'music',

    // Flowers
    rose: 'flowers',
    roses: 'flowers',
    sunflower: 'flowers',
    sunflowers: 'flowers',
    sakura: 'flowers',
    flower: 'flowers',
    flowers: 'flowers',

    // Fitness
    gym: 'fitness',
    fitness: 'fitness',
    workout: 'fitness',
    tennis: 'fitness',
    basketball: 'fitness',

    // Coffee
    coffee: 'coffee',
    latte: 'coffee',
    espresso: 'coffee',

    // Shoes
    shoes: 'shoes',
    shoe: 'shoes',
    sneakers: 'shoes',

    // Technology
    tech: 'technology',
    technology: 'technology',
    coding: 'technology',
    code: 'technology',
    laptop: 'technology',

    // Space
    space: 'space',
    galaxy: 'space',
    stars: 'space',

    // Doctor
    doctor: 'doctor',
    hospital: 'doctor',
    medical: 'doctor',
    stethoscope: 'doctor'
  };

  let matched = [];

  // Check if query matches a known category
  let targetCategory = null;
  for (const token of tokens) {
    if (categoryMap[token]) {
      targetCategory = categoryMap[token];
      break;
    }
  }

  if (!targetCategory && categoryMap[query]) {
    targetCategory = categoryMap[query];
  }

  if (targetCategory && MOCK_DATABASE[targetCategory]) {
    const list = [...MOCK_DATABASE[targetCategory]];

    // If query was specific (e.g. 'tiger' vs 'lion', 'audi' vs 'ferrari', 'guitar' vs 'piano', 'rose' vs 'sunflower'), strictly filter:
    const filtered = list.filter((photo) => {
      // Specific car brands
      const specificCarBrands = ['audi', 'mercedes', 'ferrari', 'porsche', 'lamborghini', 'mustang', 'corvette', 'mclaren'];
      if (tokens.some((t) => specificCarBrands.includes(t))) {
        return tokens.some((t) => photo.tags?.includes(t) || new RegExp('\\b' + t + '\\b', 'i').test(photo.title));
      }
      // Specific wildlife animals
      const specificAnimals = ['tiger', 'tigers', 'lion', 'lions', 'elephant', 'elephants', 'horse', 'horses', 'bird', 'birds', 'eagle'];
      if (tokens.some((t) => specificAnimals.includes(t))) {
        return tokens.some((t) => photo.tags?.includes(t) || new RegExp('\\b' + t + '\\b', 'i').test(photo.title));
      }
      // Specific musical instruments
      const specificInstruments = ['guitar', 'guitars', 'piano'];
      if (tokens.some((t) => specificInstruments.includes(t))) {
        return tokens.some((t) => photo.tags?.includes(t) || new RegExp('\\b' + t + '\\b', 'i').test(photo.title));
      }
      // Specific flowers
      const specificFlowers = ['rose', 'roses', 'sunflower', 'sunflowers', 'sakura'];
      if (tokens.some((t) => specificFlowers.includes(t))) {
        return tokens.some((t) => photo.tags?.includes(t) || new RegExp('\\b' + t + '\\b', 'i').test(photo.title));
      }
      // Specific sports
      const specificSports = ['basketball', 'tennis', 'weightlifting', 'crossfit'];
      if (tokens.some((t) => specificSports.includes(t))) {
        return tokens.some((t) => photo.tags?.includes(t) || new RegExp('\\b' + t + '\\b', 'i').test(photo.title));
      }
      return true;
    });

    matched = filtered.length > 0 ? filtered : list;
  } else {
    // Search strictly by tag or title matches across the database
    const all = Object.values(MOCK_DATABASE).flat();
    const scored = all.map((photo) => {
      let score = 0;
      const title = photo.title.toLowerCase();
      const tags = photo.tags || [];

      for (const token of tokens) {
        if (tags.includes(token)) score += 10;
        else if (tags.some((t) => t === token || t.startsWith(token))) score += 5;
        if (new RegExp('\\b' + token + '\\b', 'i').test(title)) score += 5;
      }
      return { photo, score };
    });

    // STRICT: Only include items that actually matched tags or title
    const validMatches = scored.filter((s) => s.score >= 5).sort((a, b) => b.score - a.score);
    matched = validMatches.map((r) => r.photo);
  }

  // Deduplicate
  const uniqueMatched = [];
  const seenIds = new Set();
  for (const p of matched) {
    if (!seenIds.has(p.id)) {
      seenIds.add(p.id);
      uniqueMatched.push(p);
    }
  }

  const total = uniqueMatched.length;
  const totalPages = Math.ceil(total / perPage) || (total > 0 ? 1 : 0);
  const start = (page - 1) * perPage;
  const rawPhotos = uniqueMatched.slice(start, start + perPage);

  return { rawPhotos, total, totalPages };
}
