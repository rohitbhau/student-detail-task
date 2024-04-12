// import React, { useEffect,useState } from 'react';
// import DataTable from 'react-data-table-component';
// import axios from 'axios';

// const columns=[
//     {
//         name:'Name',
//         selector:row => row.name
//     },
//     {
//         name:'Age',
//         selector:row => row.age
//     },
//     {
//         name:'Mobile',
//         selector:row => row.name
//     },
//     {
//         name:'Address',
//         selector:row => row.name
//     },
//     {
//         name:'Email',
//         selector:row => row.name
//     },
// ];
// function array() {
    
//     const [data,setData]= useState([]);
//     // const [totalRows,setTotalRows]= useState(0);
//     // const [perPage,setPerPage]=useState(10);

//     useEffect(()=>{
//         fetchData();
//     },[])

//     const fetchData = async() =>{

//         const res=await axios.get("https://66133b2a53b0d5d80f66fc45.mockapi.io/api/v1/array");
//                 console.log(res.data);
//                 setData(res.data);
//         }
//     // const handlePageChange = page => {
//     //     fetchData(page,perPage);
//     // }
//     // const handlePerRowsChange=async (newPerPage,page)=>{
//     //     setPerPage(newPerPage);
//     // }
    
//   return (
//     <div>
//         <DataTable 
//         columns={columns}
//         data={data}
//         // pagination
//         // paginationServer
//         // paginationTotalRows={totalRows}
//         // onChangePage={handlePageChange}
//         // onChangeRowsPerPage={handlePerRowsChange}
// >
//         </DataTable>
//     </div>
//   )
// }

// export default array