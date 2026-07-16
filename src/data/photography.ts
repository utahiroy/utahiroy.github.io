/**
 * Photography page content.
 * Photos live in /public/photos/ (EXIF and GPS stripped before publishing).
 * Edit this file to add/remove photos or update captions.
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

export const photography = {
  headline: "Through the Lens",
  summary:
    "Street and travel photography, shot on a Sony α7 — a first-generation full-frame body that still earns its place in my bag. Less about perfect technique, more about noticing what's worth keeping.",
  camera: "Sony α7 · full-frame mirrorless",
};

export const photos: Photo[] = [
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
    src: "/photos/aurora.jpg",
    alt: "Red and green northern lights above a treeline",
    caption: "Northern lights, Minnesota",
    year: "2025",
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
    src: "/photos/valle-de-la-luna-dunes.jpg",
    alt: "Footprints crossing a sand dune in a lunar desert valley",
    caption: "Valle de la Luna, Atacama, Chile",
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
    src: "/photos/arequipa-basilica-pigeons.jpg",
    alt: "Pigeons scattering on the steps of a carved stone church facade",
    caption: "Arequipa, Peru",
    year: "2026",
    width: 1067,
    height: 1600,
  },
  {
    src: "/photos/desert-toast.jpg",
    alt: "A hand raising a glass of sparkling wine over desert hills at sunset",
    caption: "Sunset toast, Atacama Desert, Chile",
    year: "2026",
    width: 1600,
    height: 1067,
  },
  {
    src: "/photos/shanghai-pudong.jpg",
    alt: "The Oriental Pearl Tower and Lujiazui skyline across the river",
    caption: "Lujiazui from the Bund, Shanghai",
    year: "2026",
    width: 1067,
    height: 1600,
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
    src: "/photos/speed-sign-moon.jpg",
    alt: "A speed-limit sign at dusk with the moon beside it",
    caption: "Roadside moon, Atacama, Chile",
    year: "2026",
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
    src: "/photos/suzhou-garden.jpg",
    alt: "A classical garden pond framed by willows and pavilion eaves",
    caption: "Classical garden, Suzhou",
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
  {
    src: "/photos/hallstatt-overlook.jpg",
    alt: "A lake and valley town seen from a mountain viewpoint",
    caption: "Above Hallstatt, Austria",
    year: "2025",
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
    src: "/photos/split-rock-lighthouse.jpg",
    alt: "A lighthouse on a cliff over Lake Superior in autumn",
    caption: "Split Rock Lighthouse, Minnesota",
    year: "2025",
    width: 1067,
    height: 1600,
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
    src: "/photos/desert-moonrise.jpg",
    alt: "The moon rising in a pale gradient sky over a desert ridge",
    caption: "Moonrise over the Atacama, Chile",
    year: "2026",
    width: 1067,
    height: 1600,
  },
];

export const photographyFooter =
  "All photographs shot on the Sony α7. Locations span Japan, China, Peru, Bolivia, Chile, Austria, Canada, and the United States.";
