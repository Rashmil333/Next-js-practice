import styles from "../../styles/MainTitle.module.css";
import Head from "next/head";
import Image from "next/image";
import Icon_ from "../../images/Icon.svg";
import Moreicon_ from "../../images/MoreIcon.svg";
import Checkicon_ from "../../images/Checkicon.svg";
import DottedVLine from '../../components/DottedVLine';

const MainTitle=()=>{
	return(<>
		

	<Head>
		<link rel="preconnect" href="https://fonts.googleapis.com"/>
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
		<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap" rel="stylesheet"/>
	</Head>

	<div className={styles.MainTitle}>


		<div className={styles.floatleft}>
			<div className={styles.flexrow}>
				<p className={styles.h1} >Betty Jordan</p>
				<span className={styles.icon}>
					<Image src={Icon_} />
				</span>
				<DottedVLine/>
				<span className={styles.floatcenter}>
					<Image src={Moreicon_} />
				</span>
				

			</div>
		
			<p className={styles.h3}>betty_jordan006</p>
		
		</div>
	

		<div className={styles.floatright}>
			<div className={styles.flexrow}>
				<p className={styles.number}>934</p>
				<p className={styles.friends}>Friends</p>
				<DottedVLine/>
				<Image src={Checkicon_} />
				<p className={styles.request}>Request Sent</p>
			</div>
		
			
		
		</div>
	

	</div>


	</>)
}

export default MainTitle;