import { useState, useEffect } from "react";
import axios from "axios";

import './InventoryAll.scss';
import { InventoryAllTable } from "./InventoryAllTable";


const InventoryAll = () => {

    //columns
    const invTblCols = [
        { accessor: 'itemName', label: 'Inventory Item', tosort: 'Y' },
        { accessor: 'category', label: 'Category', tosort: 'Y' },
        { accessor: 'status', label: 'Status', tosort: 'Y' },
        { accessor: 'quantity', label: 'Qty', tosort: 'Y' },
        { accessor: 'warehouseName', label: 'Warehouse', tosort: 'Y' },
        { accessor: '', label: 'Actions', tosort: 'N' },
    ];

    
    //inventory data
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


      return (
        <>
        <div className="inventoryAll">
            <InventoryAllTable cols={invTblCols} rows={invList} />
        </div>
        </>
    )
}



export default InventoryAll;