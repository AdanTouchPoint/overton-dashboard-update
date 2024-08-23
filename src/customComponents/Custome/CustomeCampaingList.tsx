import React, {useState} from "react";
import DefaultList from "payload/dist/admin/components/views/collections/Edit/Default.js";
import { useAuth } from "payload/components/utilities";
import './campaingList.css'
import { MinimalTemplate } from "payload/components/templates";
import { Button } from "payload/components/elements";
const CustomList = (props) => {
  const user = useAuth();
  const clientId = user.user.id;
  const reg = user.user.region;
  const [hide,setHide]=useState(true)
  const openmodal = () => { 
  return setHide(false)
}
const closemodal = ()=>{
  return setHide(true)
}
  return (
    <> 
      <MinimalTemplate>
      <Button onClick={openmodal}>Deploy Page Info</Button>
        { hide === true ? null : 
        <div className="modal-overlay" >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Este es el Modal</h2>
            <p>Aquí puedes poner cualquier contenido.</p>
            <Button onClick={closemodal} className="close-button">Cerrar</Button>
          </div>
        </div>
        }
        </MinimalTemplate>
    </>
  );
};

export default CustomList;
