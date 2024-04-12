import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import DataTable from 'react-data-table-component';
// import Spinner from "react-bootstrap/Spinner";
import Pagination from "react-bootstrap/Pagination";

function Home() {
  let history = useNavigate();
  const [data, setData] = useState([]);

  

  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const setToLocalStorage = (id, name, age, mobile, address, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("address", address);
    localStorage.setItem("email", email);
  };
  const getData = async () => {
    const res = await axios.get(
      "https://66133b2a53b0d5d80f66fc45.mockapi.io/api/v1/array"
    );

    console.log(res.data);
    setData(res.data);
    setFilterRecords(res.data);
  };

  function handleDelete(id) {
    axios
      .delete("https://66133b2a53b0d5d80f66fc45.mockapi.io/api/v1/array/" + id)
      .then(() => {
        getData();
        history("/home");
      });
  }

  const handleNext=() => {
    if(page === pageCount) return page;
    setPage(page+1)
  }

  const handlePrev=() => {
    if(page=== 1) return page;
    setPage(page-1)
  }

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(()=>{
    const pagedatacount=Math.ceil(data.length/10);
    setPageCount(pagedatacount);

    if(page){
        const LIMIT =10;
        const skip= LIMIT * page;
        const dataskip = data.slice(page ===1 ? 0 : skip-LIMIT,skip);
        setPageData(dataskip);
    }
  },[data]);

 
const [filterRecords,setFilterRecords]= useState([])

const handleFilter= (event)=> {
    const newData =filterRecords.filter(row => row.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setData(newData);
}

  return (
    <div style={{ margin: "5rem" }}>
      <Link to="/create">
        <Button variant="success" size="lg">
          Create
        </Button>
      </Link>
        <input style={{float:"right"}} type="text" placeholder="search..." onChange={handleFilter}/>
      <Link to="/Login">
        <Button variant="primary" size="lg" style={{ marginLeft: "10px" }}>
          Logout
        </Button>
      </Link>
      <Table striped bordered hover size="sm" style={{ marginTop: "1rem" }} >
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            pageData.length > 0 ?
          pageData.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.mobile}</td>
                <td>{item.address}</td>
                <td>{item.email}</td>

                <td>
                  <Link to="/edit">
                    <Button
                      onClick={() =>
                        setToLocalStorage(
                          item.id,
                          item.name,
                          item.age,
                          item.mobile,
                          item.address,
                          item.email
                        )
                      }
                      variant="info"
                    >
                      Update
                    </Button>
                  </Link>
                </td>

                <td>
                  <Button
                    onClick={() => handleDelete(item.id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          }) : <div className="d-flex justify-content-center mt-4">
            No Data Found
            {/* <Spinner animation="border" variant="danger"/> */}
          </div>
        
        }
        </tbody>
      </Table>
      <div className="d-flex justify-content-end">
        <Pagination>
          
          <Pagination.Prev onClick={handlePrev} disabled={page === 1}/>
         {
            Array(pageCount).fill(null).map((ele,index)=>{
                return(
                    <>
                    <Pagination.Item active={page === index + 1 ? true : false} onClick={ () => setPage(index + 1)}>{index+1}</Pagination.Item>
                </>
                )
            })
         }
          <Pagination.Next onClick={handleNext} disabled={page === pageCount}/>
     
        </Pagination>
      </div>
    </div>
  );
}

export default Home;
