import { Changa, Nunito } from "next/font/google";

  const inter = Nunito({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"],
    variable: "--font-sans",
    display: "swap",
  });

  const cairo = Changa({
    subsets: ["arabic", "latin"],
    weight: ["300", "400", "600", "700"],
    variable: "--font-ar",
    display: "swap",
  });

export default function RootLayout({ children }) {


  return (
    <html className={`${inter.variable} ${cairo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
