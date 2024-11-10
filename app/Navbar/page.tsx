import Link from "next/link"

export default function Navbar(){
    return(
      <nav className="flex w-full h-[60px] border-none justify-around">
        <p id="webname" className="font-[cursive] font-extrabold text-[35px]">SynapticAI</p>
        <ul className="flex justify-around">
          <li className="p-[15px] font-bold font-[cursive]"><Link href="/">HOME</Link></li>
          <li className="p-[15px] font-bold font-[cursive]"><Link href="/aboutPage">ABOUT US</Link></li>
          <li className="p-[15px] font-bold font-[cursive]"><Link href="/contactPage">CONTACT US</Link></li>
        </ul>
      </nav>
    )
  }