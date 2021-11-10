import design from "../styles/design.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import usa1 from "../images/usa1.png";
import padlock4 from "../images/padlock4.png";
import lockbackg from "../images/lockbackg.png";
import LockIcon from '@mui/icons-material/Lock';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckIcon from '@mui/icons-material/Check';
const designpractice=()=>{
	return(<>
		<div className={design.divs}>
		<div  id={design.div1}>
			<div style={{marginTop:'20px'}} >
				<img className={design.profile_img} src="https://media.istockphoto.com/photos/elderly-man-and-woman-on-couch-in-nursing-home-picture-id528338699?k=20&m=528338699&s=612x612&w=0&h=vy0yNpyU4l-RnixHKm6TcKI9mbAgmflLm_DlOQTcwFA="
			/>
			</div>
			
		</div>
		<div className="row" style={{marginTop:'25px'}}>
			<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
			<div style={{display:'flex',marginLeft:'30px'}}>
			<div style={{display:'grid',width:'260px'}}>
			
			<div style={{display:'flex'}}>
				<p className={design.text_large}>Betty Jordan</p>
				<LockIcon className={design.lockicon}/>
			

			</div>

			<p className={design.text_small}>betty_jordan006</p>
			</div>

			<div className={design.dotted_line}>
					<MoreHorizIcon className={design.icon}/>
				</div>
			</div>

			</div>

			<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
			<div style={{display:'flex',marginLeft:'30px'}} id={design.friends_div}>
			<div style={{display:'grid',width:'260px'}}>
			
			<div style={{display:'flex'}}>
				<p className={design.text_blue}>934 <span style={{color:'#b6b6bc'}}>Friends</span></p>
				
			

			</div>

			
			</div>
			<div  className={design.text_blue2}>
			<p >934</p>
			 <span style={{color:'#b6b6bc',marginLeft:'10px',marginRight:'10px'}}>Friends</span>
			</div>
			
			<div className={design.dotted_line}>
					<div style={{display:'flex',margin:'20px 0px 0px 20px'}}>
							<CheckIcon style={{color:'#7EB4C0',fontWeight:'bold'}}/>
							<p style={{fontWeight:'400',marginLeft:'10px',fontWeight:'bold'}} id={design.request_text} >Request Sent</p>
						</div>
				</div>
			</div>
			
			</div>
			</div>
		</div>

		<div className={design.divs2} style={{backgorundColor:'red'}}>
			<div>
				<div style={{marginLeft:'20px',marginTop:'20px',float:'left'}}>
					<p style={{color:'#6E6E7A'}}>
				We love all animals 🐶 and donate a percentage of sales to marine life 🐠,<br/> Currently hanging out in  
				<Image src={usa1} width={20} height={20} style={{marginLeft:'5px'}}/>	
					</p>
				
				<div className={design.hr_line}>
				</div>

				<h2 style={{marginTop:'20px'}}>Private Account</h2>
				<p style={{color:'#6E6E7A'}}>
				Request to add friend and view their content
				</p>

				</div>
				
				
			</div>
			
		</div>
		</>)
}

export default designpractice