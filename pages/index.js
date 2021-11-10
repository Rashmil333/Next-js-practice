import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
const index=()=>{

  return(<>
    <Link href="/home">
    <p>Start Next Js Click me</p>
    </Link>
   

    <style jsx>
    {`
      p{
        color:red;
        font-size:30px;
        text-align:center;
        margin-top:20%
      }
      `}
    </style>
    </>)

}

export default index;