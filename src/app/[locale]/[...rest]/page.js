import { notFound } from "next/navigation";

// Unmatched URLs under a locale render the localized not-found page.
export default function CatchAll() {
  notFound();
}
