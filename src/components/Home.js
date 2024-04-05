import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";
 
function Home() {
    let history = useNavigate();
 
    
    function setID(id, name, age,mobile,address,email) {
        localStorage.setItem("id", id);
        localStorage.setItem("Name", name);
        localStorage.setItem("Age", age);
        localStorage.setItem("Mobile", mobile);
        localStorage.setItem("Address", address);
        localStorage.setItem("Email", email);
    }
 
    // Deleted function - functionality
    // for deleting the entry
    function deleted(id) {
        let index = array
            .map(function (e) {
                return e.id;
            })
            .indexOf(id);
 
        // deleting the entry with index
        array.splice(index, 1);
 
        //redirect to same page.
        history("/");
    }
 
    return (
        <div style={{ margin: "5rem" }}>
             <Link  to="/create">
                <Button variant="success" size="lg">
                    Create
                </Button>
            </Link>
            <Table striped bordered hover size="sm" style={{marginTop: "1rem"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                  
                    {array.map((item) => {
                        return (
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
                                <td>{item.Mobile}</td>
                                <td>{item.Address}</td>
                                <td>{item.Email}</td>
 
                        
                                <td>
                                    <Link to={`/edit`}>
                                        <Button
                                            onClick={(e) =>
                                                setID(
                                                    item.id,
                                                    item.Name,
                                                    item.Age,
                                                    item.Mobile,
                                                    item.Address,
                                                    item.Email
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
                                        onClick={(e) =>
                                            deleted(item.id)
                                        }
                                        variant="danger"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}
 
export default Home;