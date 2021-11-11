import Link from "next/link"
import Header from "../components/Header";
import notfound from "../styles/notfound.module.css"
const Errorpage=()=>{

  return(<>
    <Header/>
    <div className='notfound'>

       <h1 className={notfound.text1}>404 Not found</h1>
       <Link href="/home">
       <a >Go back</a>
      
      </Link>
    </div>
 
    </>)

}

export default Errorpage;