"use Client";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <Navbar />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
