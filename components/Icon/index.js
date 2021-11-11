import Image from "next/image";
const Icon=(props)=>{
	return(<>
		<Image src={`require(../../images/${props.iconname})`}/>
		</>)
}

export default Icon;