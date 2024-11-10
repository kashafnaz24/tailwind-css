
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";
import "./globals.css";

function RootLayout({children}:any){
  return(
    <html lang="en">
      <body className="bg-black text-[#2a8ef1] box-border">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
export default RootLayout;