import React,{useState,useEffect} from  'react'
import {DataGrid} from '@material-ui/data-grid'

const columns = [
    {field:'id', headName:'Id'},
    {field:'name', headName:'Name',width:300},
    {field:'username', headName:'userName',width:300},
    {field:'email', headName:'Email, width:', width:300},
    {field:'address', headName:'Address',width:300}
]
const DataTable=()=>{
    const [tableData,setTableData] = useState([])
    useEffect( ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then( (data)=>data.json())
        .then( (data)=>setTableData(data))
    })
    return(

        <div style={{height:800, width:'100%'}}> 
       <DataGrid
       rows={tableData}
       columns={columns}
       pageSize={10}
       checkboxSelection
       />
        </div>
    )
}
export default DataTable