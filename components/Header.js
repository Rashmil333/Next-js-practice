import Link from "next/link";
const Header=()=>{

  return(<>
  
     <div className="header">
        <Link href="/home">
          <li className="navbarli">
          <a>Home</a></li>
        </Link>
          <Link href="/about">
          <li className="navbarli">
          <a >About</a></li>
        </Link>
          <Link href="/contact">
          <li className="navbarli">
          <a >Contact</a></li>
        </Link>
    

     
       </div>
 
    </>)

}

export default Header;