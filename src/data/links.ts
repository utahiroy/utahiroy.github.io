/**
 * Central place to manage all contact and social links.
 * Edit this file to update links across the entire site.
 */

export interface SiteLink {
  label: string;
  href: string;
  external?: boolean;
}

/** Primary links — shown prominently on the homepage */
export const primaryLinks: SiteLink[] = [
  { label: "Email", href: "mailto:utahiroy@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/utahiroyoshimoto/", external: true },
  { label: "GitHub", href: "https://github.com/utahiroy", external: true },
];

/** Secondary links — shown in the footer / social row */
export const secondaryLinks: SiteLink[] = [
  { label: "X", href: "https://x.com/energilix", external: true },
  { label: "Instagram", href: "https://www.instagram.com/ffe1i_x/", external: true },
  { label: "Facebook", href: "https://www.facebook.com/utacebook", external: true },
  { label: "Spotify", href: "https://open.spotify.com/user/utahiroy-jp?si=nPHQmJiBTn6PYBXq9vh78g", external: true },
];
