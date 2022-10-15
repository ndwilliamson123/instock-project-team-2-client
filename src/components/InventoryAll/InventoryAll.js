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


    const getStatus = (status) => {
        if (status.toLowerCase() === 'in stock'){
            return 'btnStatus active'
        } else {
            return 'btnStatus'
        }
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
                        <td>
                            <a href={'/inventory/item?id=' + item.id}>
                                {item.itemName} <img alt='Edit' className="iconAction"
                                src={require('../../assets/icons/chevron_right-24px.svg').default} />
                            </a>
                        </td>
                        <td>{item.category}</td>
                        <td>
                            <label className={getStatus(item.status)}>
                                {item.status}
                            </label>
                        </td>
                        <td>{item.quantity}</td>
                        <td>{item.warehouseName}</td>
                        <td>
                            <span className='tableAction'>
                                <a href={'/inventory/item?id=' + item.id + "&action=delete"}>
                                <img 
                                    src={require('../../assets/icons/delete_outline-24px.svg').default} 
                                    alt='Delete' className="iconAction" />
                                </a>
                            </span>
                            <span className='tableAction'>
                                <a href={'/inventory/item?id=' + item.id + "&action=edit"}>
                                <img 
                                    src={require('../../assets/icons/edit-24px.svg').default} 
                                    alt='Edit' className="iconAction" />
                                </a>
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