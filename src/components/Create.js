import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import array from "./array";
// import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
 
function Create() {
    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [mobile, setmobile] = useState("");
    const [address, setaddress] = useState("");
    const [email, setemail] = useState("");
    
   
    let history = useNavigate();
    const header= {"Access-Control-Allow-Origin": "*"};
    
    const handelSubmit = (event) => {
        event.preventDefault(); 
        let mlength=mobile.length;
        if(name == "" || age=="" || mobile=="" ||  address=="" || email==""){
            alert("enter values");
        }else if(mlength!==10){
            alert("enter valid number");
        }else{
        axios.post("https://66133b2a53b0d5d80f66fc45.mockapi.io/api/v1/array", {
            name:name,
            age:age,
            mobile:mobile,
            address:address,
            email:email,
            header,
        })
        .then(() => {
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
                    controlId="formBasicName"
                >
                    <Form.Control
                        onChange={(e) =>
                            setname(e.target.value)
                        }
                        type="text"
                        placeholder="Enter Name"
                        required
                    />
                </Form.Group>
 
               
                <Form.Group
                    className="mb-3"
                    controlId="formBasicAge"
                >
                    <Form.Control
                        onChange={(e) =>
                            setage(e.target.value)
                        }
                        type="number"
                        placeholder="Age"
                        required
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicMobile"
                >
                    <Form.Control
                     type="number"
                     placeholder="Mobile"
                     required
                        onChange={(e) =>
                            setmobile(e.target.value)
                        }
                       
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicAddress"
                >
                    <Form.Control
                        onChange={(e) =>
                            setaddress(e.target.value)
                        }
                        type="text"
                        placeholder="address"
                        required
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                >
                    <Form.Control
                        onChange={(e) =>
                            setemail(e.target.value)
                        }
                        type="email"
                        placeholder="Enter Email"
                        required
                    />
                </Form.Group>
                
                <Button
                    onClick={(e) => handelSubmit(e)}
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>
 
                {/* Redirecting back to home page */}
                <Link className="d-grid gap-2" to="/home">
                    <Button variant="info" size="lg">
                        Back
                    </Button>
                </Link>
            </Form>
        </div>
    );
}
 
export default Create;