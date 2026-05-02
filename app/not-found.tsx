import { Metadata } from "next";
import css from "./page.module.css";

export const metadata: Metadata = {
  title: "NoteHub - 404",
  description: "Error 404 - There is no such page at Notehub",
  openGraph: {
    title: "NoteHub - 404",
    description: "Error 404 - There is no such page at Notehub",
    url: "notehub.com",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Notehub",
      },
    ],
  },
};

export default function NotFound() {
  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
