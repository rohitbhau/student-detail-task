import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import array from "./array";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"
 
function Edit() {
    const [id, setid] = useState("");
    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [mobile, setmobile] = useState("");
    const [address, setaddress] = useState("");
    const [email, setemail] = useState("");
 
    let history = useNavigate();

   useEffect(() => {
    setid(localStorage.getItem("id"));
    setname(localStorage.getItem("name"));
    setage(localStorage.getItem("age"));
    setmobile(localStorage.getItem("mobile"));
    setaddress(localStorage.getItem("address"));
    setemail(localStorage.getItem("email"));
   }, []);
    
 

    const handleUpdate = (e) => {
        e.preventDefault();
        let mlength=mobile.length;
        if(name == "" || age=="" || mobile=="" ||  address=="" || email==""){
            alert("enter values");
        }else if(mlength!==10){
            alert("enter valid number");
        }else{
       axios.put('https://66133b2a53b0d5d80f66fc45.mockapi.io/api/v1/array/'+id
    ,{
        name:name,
        age:age,
        mobile:mobile,
        address:address,
        email:email,
    }).then(() => {
        history("/home");
    });
        }

    };
 
  
   
 
    return (
        <div>
            <Form
                className="d-grid gap-2"
                style={{ margin: "5rem" }}
            >
             
                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                >
                    <Form.Control
                        value={name}
                        onChange={(e) =>
                            setname(e.target.value)
                        }
                        type="text"
                        placeholder="Enter Name"
                    />
                </Form.Group>
 
               
                <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                >
                    <Form.Control
                        value={age}
                        onChange={(e) =>
                            setage(e.target.value)
                        }
                        type="number"
                        placeholder="Age"
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                >
                    <Form.Control
                        value={mobile}
                        onChange={(e) =>
                            setmobile(e.target.value)
                        }
                        type="number"
                        placeholder="Mobile"
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                >
                    <Form.Control
                        value={address}
                        onChange={(e) =>
                            setaddress(e.target.value)
                        }
                        type="text"
                        placeholder="Address"
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                >
                    <Form.Control
                        value={email}
                        onChange={(e) =>
                            setemail(e.target.value)
                        }
                        type="email"
                        placeholder="Enter Email"
                    />
                </Form.Group>
                
                <Button
                    onClick={handleUpdate}
                    variant="primary"
                    type="submit"
                    size="lg"
                >
                    Update
                </Button>
 
                {/* Redirecting to main page after editing */}
                <Link className="d-grid gap-2" to="/home">
                    <Button variant="warning" size="lg">
                        Back
                    </Button>
                </Link>
            </Form>
        </div>
    );
}
 
export default Edit;