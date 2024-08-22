import React, {useState} from "react";
import DefaultList from "payload/dist/admin/components/views/collections/Edit/Default.js";
import { useAuth } from "payload/components/utilities";
import './campaingList.css'
import { useCollapsible } from 'payload/components/utilities'
const CustomList = (props) => {
  const user = useAuth();
  const clientId = user.user.id;
  const reg = user.user.region;
  console.log(useCollapsible())
  const {collapsed,isVisible, toggle} = useCollapsible()
  const closeModal = ()=>{
    toggle
  }
  return (
    <>
        <div hidden={collapsed} className="modal-overlay" >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Este es el Modal</h2>
            <p>Aquí puedes poner cualquier contenido.</p>
            <button onClick={toggle} className="close-button">Cerrar</button>
          </div>
        </div>
      <DefaultList {...props} />
    </>
  );
};

export default CustomList;
