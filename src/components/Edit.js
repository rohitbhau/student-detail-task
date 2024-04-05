import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
 
function Edit() {
    
    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [mobile, setmobile] = useState("");
    const [address, setaddress] = useState("");
    const [email, setemail] = useState("");
    const [id, setid] = useState("");
 
   
    let history = useNavigate();
 
    // Getting an index of an entry with an id
    let index = array
        .map(function (e) {
            return e.id;
        })
        .indexOf(id);
 
    // Function for handling the edit and
    // pushing changes of editing/updating
    const handelSubmit = (e) => {
        e.preventDefault();
        if (name == "" || age == "" || mobile == "" || address == "" || email == "") {
            alert("invalid input");
            return;
        }
 
        // Getting an index of an array
        let a = array[index];
 
      
        a.Name = name;
        a.Age = age;
        a.Mobile = mobile;
        a.Address = address;
        a.Email = email;
       
 
        // Redirecting to main page
        history("/");
    };
 
  
    useEffect(() => {
        setname(localStorage.getItem("Name"));
        setage(localStorage.getItem("Age"));
        setmobile(localStorage.getItem("Mobile"));
        setaddress(localStorage.getItem("Address"));
        setemail(localStorage.getItem("Email"));
        setid(localStorage.getItem("id"));
    }, []);
 
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
                    onClick={(e) => handelSubmit(e)}
                    variant="primary"
                    type="submit"
                    size="lg"
                >
                    Update
                </Button>
 
                {/* Redirecting to main page after editing */}
                <Link className="d-grid gap-2" to="/">
                    <Button variant="warning" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}
 
export default Edit;