import Link from "next/link";
import Header from "../components/Header";
import Head from "next/head";
const about=()=>{

  return(<>
     <Head>
    <title>About Me</title>
     <meta charset="UTF-8"/ >
  <meta name="description" content="Free Web tutorials"/>
  <meta name="keywords" content="HTML, CSS, JavaScript"/>
  <meta name="author" content="John Doe"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
    <div className="homediv">
     <Header/>    

       <div className="star">
        <p className="heading">About</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
       </div>

           </div>
    </>)

}

export default about;