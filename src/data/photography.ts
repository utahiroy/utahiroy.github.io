/**
 * Photography page content, organized by category.
 * Photos live in /public/photos/ (EXIF and GPS stripped, unified color
 * treatment applied before publishing). Edit this file to add/remove photos.
 */

export interface Photo {
  /** File path under /public */
  src: string;
  /** Accessible description of the image */
  alt: string;
  /** Short caption shown under the photo */
  caption: string;
  year: string;
  /** Intrinsic pixel size (prevents layout shift) */
  width: number;
  height: number;
}

export interface PhotoSection {
  title: string;
  description: string;
  photos: Photo[];
}

export const photography = {
  headline: "Through the Lens",
  summary:
    "Street and travel photography — mostly on a Sony α7, sometimes whatever camera was in my pocket. Less about perfect technique, more about noticing what's worth keeping.",
  camera: "Sony α7 · full-frame mirrorless",
};

export const sections: PhotoSection[] = [
  {
    title: "Japan",
    description:
      "Home base — from Hokkaidō's blue rivers to a summer night game in Tokyo.",
    photos: [
      {
        src: "/photos/shirahige-falls.jpg",
        alt: "Thin waterfalls pouring into a pale blue river between green cliffs",
        caption: "Shirahige Falls, Biei, Hokkaidō",
        year: "2022",
        width: 1200,
        height: 1600,
      },
      {
        src: "/photos/futamigaura-torii.jpg",
        alt: "A white torii gate standing in the sea beside paired rocks",
        caption: "Itoshima coast, Fukuoka",
        year: "2023",
        width: 1600,
        height: 1200,
      },
      {
        src: "/photos/furano-flower-fields.jpg",
        alt: "Striped flower fields running toward wooded hills",
        caption: "Flower fields, Furano–Biei, Hokkaidō",
        year: "2022",
        width: 1200,
        height: 1600,
      },
      {
        src: "/photos/tokyo-skytree-dusk.jpg",
        alt: "Tokyo Skytree and the city skyline reflected in a river at dusk",
        caption: "Tokyo Skytree at dusk",
        year: "2019",
        width: 1600,
        height: 1066,
      },
      {
        src: "/photos/sakura-dusk.jpg",
        alt: "Cherry blossoms backlit by a low sun",
        caption: "Cherry blossoms",
        year: "2020",
        width: 1200,
        height: 1600,
      },
      {
        src: "/photos/temple-hall.jpg",
        alt: "A temple hall with golden roof ornaments under a summer sky",
        caption: "Temple hall, Japan",
        year: "2025",
        width: 1600,
        height: 1067,
      },
      {
        src: "/photos/hokkaido-blue-coast.jpg",
        alt: "Turquoise water and pale rocks seen from above",
        caption: "Clear water, Hokkaidō coast",
        year: "2022",
        width: 1200,
        height: 1600,
      },
      {
        src: "/photos/northern-alps-snow.jpg",
        alt: "Snow-streaked peaks above a still mountain reservoir",
        caption: "Northern Japanese Alps",
        year: "2022",
        width: 1600,
        height: 1200,
      },
      {
        src: "/photos/kyushu-grassland.jpg",
        alt: "A green grassland ridge under summer clouds",
        caption: "Summer grassland, Kyushu",
        year: "2025",
        width: 1600,
        height: 1067,
      },
      {
        src: "/photos/sunflower-field.jpg",
        alt: "A field of sunflowers under a summer sky",
        caption: "Sunflowers, Hokkaidō",
        year: "2022",
        width: 1200,
        height: 1600,
      },
      {
        src: "/photos/minatomirai-night.jpg",
        alt: "A lit ferris wheel and waterfront buildings reflected at night",
        caption: "Minato Mirai at night, Yokohama",
        year: "2025",
        width: 1600,
        height: 1067,
      },
      {
        src: "/photos/baseball-dusk.jpg",
        alt: "A baseball stadium at dusk with clouds over the floodlights",
        caption: "Summer night game, Tokyo",
        year: "2022",
        width: 1200,
        height: 1600,
      },
      {
        src: "/photos/industrial-night.jpg",
        alt: "A petrochemical plant glowing blue-white at night",
        caption: "Factory night view, Japan",
        year: "2019",
        width: 1600,
        height: 1066,
      },
    ],
  },
  {
    title: "Mountains & Wild Places",
    description:
      "Deserts, salt flats, granite, and the roads between them.",
    photos: [
      {
        src: "/photos/salt-flat-silhouette.jpg",
        alt: "Silhouette standing on a mirror-flat salt lake reflecting clouds",
        caption: "Salar de Uyuni, Bolivia",
        year: "2026",
        width: 1067,
        height: 1600,
      },
      {
        src: "/photos/atacama-volcano-vista.jpg",
        alt: "Desert ridges leading to a distant volcano under a clear sky",
        caption: "Atacama Desert, Chile",
        year: "2026",
        width: 1600,
        height: 1067,
      },
      {
        src: "/photos/machu-picchu.jpg",
        alt: "Machu Picchu seen from high above, framed by green peaks",
        caption: "Machu Picchu, Peru",
        year: "2026",
        width: 1067,
        height: 1600,
      },
      {
        src: "/photos/half-dome-sunset.jpg",
        alt: "Half Dome glowing at sunset above Yosemite Valley",
        caption: "Half Dome from Glacier Point, Yosemite",
        year: "2024",
        width: 1600,
        height: 1200,
      },
      {
        src: "/photos/andes-train.jpg",
        alt: "A train waiting at a small Andean station",
        caption: "On the way to Machu Picchu, Peru",
        year: "2026",
        width: 1067,
        height: 1600,
      },
      {
        src: "/photos/monument-valley.jpg",
        alt: "Sandstone buttes rising from the desert floor of Monument Valley",
        caption: "Monument Valley, Arizona–Utah",
        year: "2024",
        width: 1600,
        height: 1200,
      },
      {
        src: "/photos/delicate-arch.jpg",
        alt: "Delicate Arch glowing orange at dusk",
        caption: "Delicate Arch, Arches National Park",
        year: "2024",
        width: 1200,
        height: 1600,
      },
      {
        src: "/photos/grand-canyon.jpg",
        alt: "Layered cliffs of the Grand Canyon under a hazy sky",
        caption: "Grand Canyon, Arizona",
        year: "2024",
        width: 1600,
        height: 1200,
      },
      {
        src: "/photos/valle-de-la-luna-dunes.jpg",
        alt: "Footprints crossing a sand dune in a lunar desert valley",
        caption: "Valle de la Luna, Atacama, Chile",
        year: "2026",
        width: 1600,
        height: 1067,
      },
      {
        src: "/photos/titicaca-sunset.jpg",
        alt: "Dramatic clouds and golden light over a high-altitude lake",
        caption: "Sunset over Lake Titicaca",
        year: "2026",
        width: 1600,
        height: 1200,
      },
      {
        src: "/photos/bryce-dusk.jpg",
        alt: "Hoodoo spires of Bryce Canyon under evening light",
        caption: "Bryce Canyon at dusk, Utah",
        year: "2024",
        width: 1600,
        height: 1200,
      },
      {
        src: "/photos/zion-canyon.jpg",
        alt: "Sandstone walls of Zion Canyon under scattered clouds",
        caption: "Zion National Park, Utah",
        year: "2024",
        width: 1600,
        height: 1200,
      },
      {
        src: "/photos/aurora.jpg",
        alt: "Red and green northern lights above a treeline",
        caption: "Northern lights, Minnesota",
        year: "2025",
        width: 1600,
        height: 1067,
      },
      {
        src: "/photos/yosemite-valley.jpg",
        alt: "Granite cliffs rising above the forest of Yosemite Valley",
        caption: "Yosemite Valley, California",
        year: "2024",
        width: 1600,
        height: 1200,
      },
      {
        src: "/photos/lake-titicaca-boats.jpg",
        alt: "Reed boats moored at the floating Uros Islands",
        caption: "Uros Islands, Lake Titicaca, Peru",
        year: "2026",
        width: 1600,
        height: 1067,
      },
      {
        src: "/photos/bonneville-sunset.jpg",
        alt: "The sun setting over white salt flats",
        caption: "Salt flats at sunset, Utah",
        year: "2024",
        width: 1600,
        height: 1200,
      },
      {
        src: "/photos/desert-moonrise.jpg",
        alt: "The moon rising in a pale gradient sky over a desert ridge",
        caption: "Moonrise over the Atacama, Chile",
        year: "2026",
        width: 1067,
        height: 1600,
      },
      {
        src: "/photos/rockies-winter-road.jpg",
        alt: "A snow-lined mountain road under heavy winter clouds",
        caption: "Canadian Rockies",
        year: "2025",
        width: 1600,
        height: 1067,
      },
      {
        src: "/photos/bighorn-sheep.jpg",
        alt: "Bighorn sheep walking down a snowy mountain road",
        caption: "Bighorn sheep, Canadian Rockies",
        year: "2025",
        width: 1600,
        height: 1067,
      },
      {
        src: "/photos/split-rock-lighthouse.jpg",
        alt: "A lighthouse on a cliff over Lake Superior in autumn",
        caption: "Split Rock Lighthouse, Minnesota",
        year: "2025",
        width: 1067,
        height: 1600,
      },
    ],
  },
  {
    title: "Cities & Streets",
    description:
      "Old towns, waterfronts, and the hour when the lights come on.",
    photos: [
      {
        src: "/photos/shanghai-pudong.jpg",
        alt: "The Oriental Pearl Tower and Lujiazui skyline across the river",
        caption: "Lujiazui from the Bund, Shanghai",
        year: "2026",
        width: 1067,
        height: 1600,
      },
      {
        src: "/photos/hallstatt-lakefront.jpg",
        alt: "A lakeside village beneath steep mountains in winter light",
        caption: "Hallstatt, Austria",
        year: "2025",
        width: 1600,
        height: 1067,
      },
      {
        src: "/photos/yu-garden-street.jpg",
        alt: "Curved roofs and crowded lanes of Yu Garden's old town",
        caption: "Yu Garden old town, Shanghai",
        year: "2026",
        width: 1067,
        height: 1600,
      },
      {
        src: "/photos/arequipa-basilica-pigeons.jpg",
        alt: "Pigeons scattering on the steps of a carved stone church facade",
        caption: "Arequipa, Peru",
        year: "2026",
        width: 1067,
        height: 1600,
      },
      {
        src: "/photos/vienna-stephansdom.jpg",
        alt: "A gothic cathedral lit at night beside holiday lights",
        caption: "Stephansdom, Vienna",
        year: "2025",
        width: 1600,
        height: 1200,
      },
      {
        src: "/photos/suzhou-lantern-alley.jpg",
        alt: "Red lanterns above a busy evening alley",
        caption: "Shantang Street, Suzhou",
        year: "2026",
        width: 1067,
        height: 1600,
      },
      {
        src: "/photos/budapest-matthias.jpg",
        alt: "The tiled spire of Matthias Church against a winter sky",
        caption: "Matthias Church, Budapest",
        year: "2025",
        width: 1067,
        height: 1600,
      },
      {
        src: "/photos/malacca-mosque.jpg",
        alt: "A mosque standing over the water in soft evening light",
        caption: "Melaka Straits Mosque, Malaysia",
        year: "2023",
        width: 1600,
        height: 1200,
      },
      {
        src: "/photos/budapest-raven.jpg",
        alt: "A raven statue silhouetted above the Danube and parliament",
        caption: "Raven over the Danube, Budapest",
        year: "2025",
        width: 1067,
        height: 1600,
      },
      {
        src: "/photos/marina-bay-sands.jpg",
        alt: "Marina Bay Sands towering against an evening sky",
        caption: "Marina Bay Sands, Singapore",
        year: "2023",
        width: 1200,
        height: 1600,
      },
      {
        src: "/photos/suzhou-garden.jpg",
        alt: "A classical garden pond framed by willows and pavilion eaves",
        caption: "Classical garden, Suzhou",
        year: "2026",
        width: 1067,
        height: 1600,
      },
      {
        src: "/photos/petronas-towers.jpg",
        alt: "The Petronas Towers lit at dusk",
        caption: "Petronas Towers, Kuala Lumpur",
        year: "2023",
        width: 1200,
        height: 1600,
      },
      {
        src: "/photos/hallstatt-overlook.jpg",
        alt: "A lake and valley town seen from a mountain viewpoint",
        caption: "Above Hallstatt, Austria",
        year: "2025",
        width: 1067,
        height: 1600,
      },
      {
        src: "/photos/boston-street.jpg",
        alt: "Brick row houses on a winter street",
        caption: "Winter street, Boston",
        year: "2024",
        width: 1200,
        height: 1600,
      },
    ],
  },
  {
    title: "Details & Small Hours",
    description: "The small stuff that makes a trip a trip.",
    photos: [
      {
        src: "/photos/desert-toast.jpg",
        alt: "A hand raising a glass of sparkling wine over desert hills at sunset",
        caption: "Sunset toast, Atacama Desert, Chile",
        year: "2026",
        width: 1600,
        height: 1067,
      },
      {
        src: "/photos/shanghai-dumplings.jpg",
        alt: "Xiaolongbao in a bamboo steamer",
        caption: "Xiaolongbao, Shanghai",
        year: "2026",
        width: 1600,
        height: 1067,
      },
      {
        src: "/photos/speed-sign-moon.jpg",
        alt: "A speed-limit sign at dusk with the moon beside it",
        caption: "Roadside moon, Atacama, Chile",
        year: "2026",
        width: 1600,
        height: 1067,
      },
      {
        src: "/photos/fishing-line.jpg",
        alt: "Hands holding a fishing line over dark water",
        caption: "Handline, summer afternoon",
        year: "2025",
        width: 1600,
        height: 1067,
      },
      {
        src: "/photos/airplane-window.jpg",
        alt: "Dawn sky and tarmac through an airplane window",
        caption: "Window seat at dawn",
        year: "2026",
        width: 1067,
        height: 1600,
      },
      {
        src: "/photos/latte-art.jpg",
        alt: "Two lattes with heart latte art on a wooden table",
        caption: "Coffee stop, somewhere cold",
        year: "2025",
        width: 1600,
        height: 1067,
      },
    ],
  },
];

/** Flat list (used for counts or future features). */
export const photos: Photo[] = sections.flatMap((s) => s.photos);

export const photographyFooter =
  "Shot on the Sony α7, an iPhone, and a Canon EOS M3 along the way. Locations span Japan, China, Southeast Asia, Peru, Bolivia, Chile, Austria, Hungary, Canada, and the United States.";
