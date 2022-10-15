import React, { useState, useEffect } from "react";
import axios from "axios";



const InventoryAll = props => {

    const [invList, setInvList] = useState([]);
    
    const passInvList = (data) => {
        setInvList(data);
    };

    const getInventoryList = () => {
        axios
            .get('http://localhost:8080/inventory')
            .then(res => {
                setInvList(res.data);
            });
    }

    useEffect(() => {
        getInventoryList();
      }, []);


    return(
        <>
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Inventory Item
                            <span className='tableAction'>
                                <img 
                                    src={require('../../assets/icons/sort-24px.svg').default}
                                    alt='Sort' className="iconAction" />
                            </span>
                        </th>
                        <th>
                            Category
                            <span className='tableAction'>
                                <img 
                                    src={require('../../assets/icons/sort-24px.svg').default}
                                    alt='Sort' className="iconAction" />
                            </span>
                        </th>
                        <th>
                            Status
                            <span className='tableAction'>
                                <img 
                                    src={require('../../assets/icons/sort-24px.svg').default}
                                    alt='Sort' className="iconAction" />
                            </span>
                        </th>
                        <th>
                            Qty
                            <span className='tableAction'>
                                <img 
                                    src={require('../../assets/icons/sort-24px.svg').default}
                                    alt='Sort' className="iconAction" />
                            </span>
                        </th>
                        <th>
                            Warehouse
                            <span className='tableAction'>
                                <img 
                                    src={require('../../assets/icons/sort-24px.svg').default}
                                    alt='Sort' className="iconAction" />
                            </span>
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                
                <tbody>
                {invList.map((item) => (
                    <tr key={item.id}>
                        <td>{item.itemName}</td>
                        <td>{item.category}</td>
                        <td>{item.status}</td>
                        <td>{item.quantity}</td>
                        <td>{item.warehouseName}</td>
                        <td>
                            <span className='tableAction'>
                                <img 
                                    src={require('../../assets/icons/delete_outline-24px.svg').default} 
                                    alt='Delete' className="iconAction" />
                            </span>
                            <span className='tableAction'>
                                <img 
                                    src={require('../../assets/icons/edit-24px.svg').default} 
                                    alt='Edit' className="iconAction" />
                            </span>
                        </td>
                    </tr>
                ))}
                </tbody>
                
            </table>
        </div>
        </>
    )
}


export default InventoryAll;



//references:
//https://blog.logrocket.com/creating-react-sortable-table/
//https://github.com/Ibaslogic/react-sortable-table/blob/main/src/index.css