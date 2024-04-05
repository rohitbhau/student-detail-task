import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
 
function Create() {
    
    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [mobile, setmobile] = useState("");
    const [address, setaddress] = useState("");
    const [email, setemail] = useState("");
    
    let history = useNavigate();
 
    
    const handelSubmit = (event) => {
        event.preventDefault(); 
 
        const ids = uuid(); // Creating unique id
        let uni = ids.slice(0, 8); // Slicing unique id
 
       
        let a = name,
            b = age,
            c = mobile,
            d = address,
            e = email;
        if (name == "" || age == "" || mobile == "" || address == "" || email == "") {
            alert("invalid input");
            return;
        }
        array.push({ id: uni, Name: a, Age: b , Mobile: c, Address:d, email:e});
 
        // Redirecting to home page after creation done
        history("/");
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
                    controlId="formBasicAge"
                >
                    <Form.Control
                        onChange={(e) =>
                            setmobile(e.target.value)
                        }
                        type="number"
                        placeholder="Mobile"
                        required
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicAge"
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
                    controlId="formBasicName"
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
                <Link className="d-grid gap-2" to="/">
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}
 
export default Create;