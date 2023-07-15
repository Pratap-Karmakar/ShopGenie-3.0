import "../styles/globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "ShopGenie || Make a wish!",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body>
        {/* to make the header dynamically available in all pages */}
        <Header />
        <div className="w-full flex pt-3 px-2">
          <Sidebar />
          <div className="w-full md:ml-5  h-[80vh] overflow-y-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
