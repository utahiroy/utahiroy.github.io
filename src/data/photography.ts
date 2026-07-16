/**
 * Photography page content, organized by category.
 * Every photo is shot on the Sony α7 (site-wide policy, 2026-07-16).
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
    "Street and travel photography, all shot on one camera: a Sony α7, a first-generation full-frame body that still earns its place in my bag. Less about perfect technique, more about noticing what's worth keeping.",
  camera: "Sony α7 · full-frame mirrorless · every photo on this site",
};

export const sections: PhotoSection[] = [
  {
    title: "Japan",
    description: "Home base — slow trains, temple roofs, and summer nights.",
    photos: [
      {
        src: "/photos/japan-train.jpg",
        alt: "A resort liner waiting at a small forest station",
        caption: "Local line through the woods, Japan",
        year: "2025",
        width: 1600,
        height: 1067,
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
        src: "/photos/kyushu-grassland.jpg",
        alt: "A green grassland ridge under summer clouds",
        caption: "Summer grassland, Kyushu",
        year: "2025",
        width: 1600,
        height: 1067,
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
        src: "/photos/fishing-line.jpg",
        alt: "Hands holding a fishing line over dark water",
        caption: "Handline, summer afternoon",
        year: "2025",
        width: 1600,
        height: 1067,
      },
    ],
  },
  {
    title: "Andes & Atacama",
    description:
      "Six weeks in South America — salt flats, ruins, and the driest desert on earth.",
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
        src: "/photos/mp-dawn.jpg",
        alt: "Machu Picchu and Huayna Picchu in first light",
        caption: "Machu Picchu, first light",
        year: "2026",
        width: 1067,
        height: 1600,
      },
      {
        src: "/photos/sacred-valley.jpg",
        alt: "A green valley floor framed by Andean peaks",
        caption: "Sacred Valley, Peru",
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
        src: "/photos/llamas-machu-picchu.jpg",
        alt: "Llamas grazing on a terrace above the mountains",
        caption: "Llamas, Machu Picchu",
        year: "2026",
        width: 1600,
        height: 1067,
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
        src: "/photos/lake-titicaca-boats.jpg",
        alt: "Reed boats moored at the floating Uros Islands",
        caption: "Uros Islands, Lake Titicaca, Peru",
        year: "2026",
        width: 1600,
        height: 1067,
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
        src: "/photos/desert-moonrise.jpg",
        alt: "The moon rising in a pale gradient sky over a desert ridge",
        caption: "Moonrise over the Atacama, Chile",
        year: "2026",
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
        src: "/photos/budapest-parliament.jpg",
        alt: "The Hungarian Parliament glowing gold at night",
        caption: "Hungarian Parliament at night, Budapest",
        year: "2025",
        width: 1600,
        height: 1067,
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
        src: "/photos/stephansdom-nave.jpg",
        alt: "The candlelit gothic nave of St. Stephen's Cathedral",
        caption: "Inside Stephansdom, Vienna",
        year: "2025",
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
        src: "/photos/gastown-rain.jpg",
        alt: "A rainy brick street with lampposts in Gastown",
        caption: "Gastown in the rain, Vancouver",
        year: "2025",
        width: 1600,
        height: 1067,
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
        src: "/photos/suzhou-garden.jpg",
        alt: "A classical garden pond framed by willows and pavilion eaves",
        caption: "Classical garden, Suzhou",
        year: "2026",
        width: 1067,
        height: 1600,
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
        src: "/photos/hallstatt-swan.jpg",
        alt: "A swan gliding on the lake in front of Hallstatt village",
        caption: "Swan on the lake, Hallstatt",
        year: "2025",
        width: 1067,
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
    ],
  },
  {
    title: "Seasons of the North",
    description:
      "A year between Minnesota, the Rockies, and the Alps — aurora, first snow, and fall color.",
    photos: [
      {
        src: "/photos/aurora.jpg",
        alt: "Red and green northern lights above a treeline",
        caption: "Northern lights, Minnesota",
        year: "2025",
        width: 1600,
        height: 1067,
      },
      {
        src: "/photos/autumn-lake.jpg",
        alt: "A lake ringed by autumn forest seen from an overlook",
        caption: "Autumn lake, northern Minnesota",
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
      {
        src: "/photos/bighorn-sheep.jpg",
        alt: "Bighorn sheep walking down a snowy mountain road",
        caption: "Bighorn sheep, Canadian Rockies",
        year: "2025",
        width: 1600,
        height: 1067,
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
        src: "/photos/yellowstone-terrace.jpg",
        alt: "Steam rising off mineral terraces in snow",
        caption: "Mammoth Hot Springs in winter, Yellowstone",
        year: "2025",
        width: 1600,
        height: 1067,
      },
      {
        src: "/photos/alpine-chapel.jpg",
        alt: "A stone chapel on a snowy summit under deep blue sky",
        caption: "Chapel on the Dachstein, Austria",
        year: "2025",
        width: 1600,
        height: 1067,
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
        src: "/photos/lotus-suzhou.jpg",
        alt: "Pink lotus flowers in a garden",
        caption: "Lotus, Suzhou",
        year: "2026",
        width: 1067,
        height: 1600,
      },
      {
        src: "/photos/fish-market.jpg",
        alt: "Fresh fish on ice at a public market counter",
        caption: "Fish counter, public market",
        year: "2025",
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
  "Every photograph on this site was shot on the Sony α7. Locations span Japan, China, Peru, Bolivia, Chile, Austria, Hungary, Canada, and the United States.";
