import { Quicksand } from "next/font/google";
import "./globals.css";

const inter = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Micaela Korol",
  description: "Portfolio Micaela Korol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
