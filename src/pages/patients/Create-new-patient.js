import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios';

import Input from "./../../components/forms/Input.js";
import Select from "./../../components/forms/Select"
import Container from "./../../components/layouts/Container";
import Card from "../../components/layouts/Card";


function Create() {
  const [input, setInput] = useState({});
  const [redirect, setRedirect] = useState(false); 


  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = async event => {
    event.preventDefault()
    const newPatient = {
        name: input.name,
        surname: input.surname,
        email: input.email,
        password: input.password
    }
    try {
      await axios.post('http://localhost:5000/create', newPatient)
      setRedirect(true) 
      console.log('Create page iiiiiiiis working baby!', redirect )
    } catch (err) {
      console.error(err)
    } 
  } 

  if(redirect){
    return <Redirect to='/patients'></Redirect>
  }


  return (
    <Container horizontalPadding="1.5rem">
        <form>

        <div>   
            <Card title="Personal Information">
                <Input
                    label="Name "
                    name= "name"
                    required
                    value={input.name} 
                    placeholder= "Name"
                    onChange= {handleChange}
                    type = "text"
                />
                <Input
                    label="Surname "
                    name= "surname"
                    required
                    value={input.surname} 
                    placeholder= "Surname"
                    onChange= {handleChange}
                    type = "text"
                />
                <Input
                    label="Email "
                    name= "email"
                    required
                    value={input.email} 
                    placeholder= "Enter your email"
                    onChange= {handleChange}
                    type = "text"
                />
                <Input
                    label="Phone"
                    name= "phone"
                    required
                    value={input.phone} 
                    placeholder= "Phone number"
                    onChange= {handleChange}
                    type = "number"
                />
                <Input
                    label="Address "
                    name= "adress"
                    value={input.adress} 
                    placeholder= "Adress"
                    onChange= {handleChange}
                    type = "text"
                />
                <Input
                    label="City "
                    name= "city"
                    value={input.city} 
                    placeholder= "City"
                    onChange= {handleChange}
                    type = "text"
                />
                <Input
                    label="State "
                    name= "state"
                    value={input.state} 
                    placeholder= "State"
                    onChange= {handleChange}
                    type = "text"
                />
                <Input
                    label="Postal code "
                    name= "postal"
                    required
                    value={input.postal} 
                    placeholder= "Postal code"
                    onChange= {handleChange}
                    type = "number"
                />
            </Card>

            <Card title="Contact Details">
                <Input
                    label="Name "
                    name= "contactname"
                    required
                    value={input.contactname} 
                    placeholder= "Name"
                    onChange= {handleChange}
                    type = "text"
                />
                <Input
                    label="Surname "
                    name= "contactsurname"
                    required
                    value={input.contactsurname} 
                    placeholder= "Surname"
                    onChange= {handleChange}
                    type = "text"
                />
                <Input
                    label="Email "
                    name= "contactemail"
                    required
                    value={input.contactemail} 
                    placeholder= "Enter your email"
                    onChange= {handleChange}
                    type = "text"
                />
                <Input
                    label="Phone"
                    name= "contactphone"
                    required
                    value={input.contactphone} 
                    placeholder= "Phone number"
                    onChange= {handleChange}
                    type = "number"
                />
            </Card>
            <Card title="Professional Assistance">
                <Select
                    label="Professional"
                    name= "professional"
                    required
                    value={input.professional} 
                    placeholder= "Professional Assigned"
                    onChange= {handleChange}
                    type = "text"
                >
                    <option value="prof1">Professional1</option>
                    <option value="prof">Professional</option>
                </Select>
            </Card>
            <button onClick= {handleClick}>Create account</button>
        </div>

        </form>
    </Container>
  );
}

export default Create;