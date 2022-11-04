import { useState, useMemo } from 'react';

import { sortRows, filterRows, displayStatus } from './InventoryAllFxn';



export const InventoryAllTable = ({ cols, rows }) => {

    //table function data
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState({ order: 'asc', orderBy: 'itemName' });
    

    const filteredRows = useMemo(() => filterRows(rows, filters), [rows, filters]);
    const sortedRows = useMemo(() => sortRows(filteredRows, sort), [filteredRows, sort]);

    const count = filteredRows.length;


    //events
    const handleSort = (accessor) => {
        setSort((prevSort) => ({
            order: prevSort.order === 'asc' && prevSort.orderBy === accessor ? 'desc' : 'asc',
            orderBy: accessor,
        }))
    }


    return (
        <>
        <table className='inventoryAll__table'>
            <thead>
                <tr>
                    {cols.map((column) => {
                        const sortIcon = () => {
                            if (column.accessor === sort.orderBy) {
                                if (sort.order === 'asc') {
                                    return '↑'
                                }
                                return '↓'
                            } else {
                                return '️↕️'
                            }
                        }

                        return (
                            <th key={column.accessor}>
                                <span>{column.label}</span>
                                <a onClick={() => handleSort(column.accessor)} className='colSort'>{sortIcon()}</a>
                            </th>
                        )
                    })}
                </tr>
            </thead>

            <tbody>
                {rows.map((row) => {
                    return (
                    <tr key={row.id}> 
                        {cols.map((column) => {
                        
                        if (column.accessor === 'itemName') {
                            return <td key={column.accessor}>
                            <a href={'/inventory?id=' + row.id}>
                                {row[column.accessor]}
                                <img 
                                        src={require('../../assets/icons/chevron_right-24px.svg').default} 
                                        alt='View' className="iconAction" />
                            </a>
                        </td>
                        }

                        if (column.accessor === 'status') {
                            return <td key={column.accessor}>
                            <label className={displayStatus(row[column.accessor])}>
                                {row[column.accessor]}
                            </label>
                        </td>
                        }

                        if (column.accessor === '') {
                            return <td key={column.accessor}>
                                <span className='tableAction'>
                                <a href={'/inventory?id=' + row.id + '&action=delete'}>
                                    <img 
                                        src={require('../../assets/icons/delete_outline-24px.svg').default} 
                                        alt='Delete' className="iconAction" /></a>
                                </span>
                                <span className='tableAction'>
                                    <a href={'/inventory?id=' + row.id + '&action=edit'}>
                                    <img 
                                        src={require('../../assets/icons/edit-24px.svg').default} 
                                        alt='Edit' className="iconAction" /></a>
                                    
                                </span>
                            </td>
                        }

                        return <td key={column.accessor}>{row[column.accessor]}</td>
                        })}
                    </tr>
                    )
                })}
            </tbody>
            
        </table>
        </>
    )
}
