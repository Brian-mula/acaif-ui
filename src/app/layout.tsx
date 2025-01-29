import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const poppins = Poppins({
  weight:['100','700','900','400'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Compaign Management",
  description: "We help you manage your compaigns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <StoreProvider>
        <Toaster
                toastOptions={{
                  style: {
                    fontSize: '10px'
                  }
                }}
                position="top-right"
              />
          {children}
        </StoreProvider>
        
      </body>
    </html>
  );
}
