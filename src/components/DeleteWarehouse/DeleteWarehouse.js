import React from 'react'; 
import axios from "axios";
import { useParams } from "react-router-dom";

import './DeleteWarehouse.scss';


  
const DeleteWarehouse = () => {

  let params = useParams();

  const delWarehouse = (e) => {
    e.preventDefault();
    
    axios
      .delete('http://localhost:8080/warehouses' + params.warehouseId)
      .then((response) => {
        this.setState({
          warehouses: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
    
      
  }

  
return (
  <>
    <div className="modalContainer" id='popUpModal'>
      <div className='deleteWarehouse'>

        <div className='deleteWarehouse__titlebar'>
          <p className="anchorModalClose">X</p>
        </div>

        <div className='deleteWarehouse__title'>
          <h1>Delete {params.warehouseName} Warehouse?</h1>
        </div>
        
        <div className='deleteWarehouse__body'>
          <p>Please confirm that you'd like to delete the {params.warehouseName} from
          the list of warehouses. You won't be able to undo this action.</p>
        </div>

        <div className='deleteWarehouse__buttonbar'>
            <button className="anchorModalButton">Cancel</button>

            <button className="anchorModalButton" onClick={delWarehouse}> Delete</button>
        </div>
      </div>
      
    </div>
    
  </>
)
}


export default DeleteWarehouse;