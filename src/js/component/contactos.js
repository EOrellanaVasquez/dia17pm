import React,{ useState, useContext } from "react";
import { BsFillTelephoneFill,BsFillEnvelopeFill, BsFillPinFill,BsFillPencilFill,BsFillTrashFill } from "react-icons/bs"
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";


export const Contactos = (props) => {
	
	const { store, actions } = useContext(Context);
	const setStore = actions.setStore;

	const borrarContacto = (id) => {
		fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
			method: "DELETE"
		})
			.then(() => {
				actions.loadSomeData(); 
			})
			.catch((error) => {
				console.error("Error deleting contact:", error);
			}); 
	  };

return (
<div className="card mx-3 pe-2" style={{width: "100%"}}>
	<div className="row g-0">
		<div className="col-md-3">
	  		<img src= "https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280-768x768.jpg" style={{width:"150px",height:"150px",borderRadius:"50%",marginTop:"10px",marginLeft:"100px"}} alt="..."/>
		</div>
		<div className="col-md-9">
			<div className="card-body">
				<div className="card-title">
					<span className="card-title h5" >
						{props.nombre}
					</span>
					<span className="botonescontacto float-end">
						<Link to={"/single/" + props.id} className ="">
							<BsFillPencilFill />
						</Link>
						<button
							type="button"
							style={{ border: "0px", background: "white" }}
							onClick={() => borrarContacto(props.id)}
						>
							<BsFillTrashFill />
						</button>
					</span>
				</div>
				<div className="card-icons text-muted">
					<p className="card-text m-0">
						<BsFillPinFill />
						<span className="ps-2">{props.address}</span>
					</p>
					<p className="card-text m-0">
						<BsFillTelephoneFill />
						<span className="ps-2">{props.phone}</span>
					</p>
					<p className="card-text text-muted m-0">
						<BsFillEnvelopeFill />
						<span className="ps-2">{props.email}</span>
					</p>
				</div>
			</div>
	  	</div>
	</div>
</div>
)
};

export default Contactos;