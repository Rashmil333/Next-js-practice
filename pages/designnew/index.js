import styles from "../../styles/style.module.css";
import styles2 from "../../styles/MainTitle.module.css";
import Profilephoto from "../../components/Profilephoto";
import MainTitle from "../../components/MainTitle";
import Lockgrey from "../../images/Lockgrey.svg";
import Image from "next/image";
import DottedHLine from "../../components/DottedHLine"
const designnew=()=>{

	return(<>
		
		<div className={styles.card_div}>
			
			<div className={styles.cover}>
				<Profilephoto/>
			</div>
			
			<MainTitle/>

		</div>


		<div className={styles.card_div}>
			<div className={styles.floatleft}>
				<p className={styles.text}>We love all animals 🐶 and donate a percentage of sales to marine life 🐠, Currently hanging out in 🇵🇹</p>
				<DottedHLine/>
				<p className={styles2.h1}>Private Account</p>
				<p className={styles2.h3}>Request to add friend and view their content</p>
			</div>

			<div className={styles.floatright}>
				<Image src={Lockgrey}/>
			</div>
			
		</div>
		</>)

}

export default designnew;