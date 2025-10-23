import "./globals.css";

export const metadata = {
  title: "ByThePound - Customer",
  description: "Shop fresh products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
