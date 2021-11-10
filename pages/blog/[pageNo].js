import {useRouter} from "next/router";

const PageNo= ()=>{
	const router = useRouter();

	const pageNumber=router.query.pageNo;
	return(<>
		<h1>the page no is{pageNumber}</h1>
		</>)
}

export default PageNo;