import React, { useState } from 'react';
import './App.css'
import axios from "axios";

function App() {


  const [formdata, setformdata] = useState({
        name: "",
        age: "",
        email: "",
        mobile_number: "",
        country: "",
        state: "",
        city: "",
        aadhar_number: "",
        pan_number: "",
        address: ""
    }
  )


const handlechange = (e) => {
  const {name, value} = e.target
  setformdata({
    ...formdata,
    [name]: value
  })
}

const handlesubmit = async (e) =>{
  e.preventDefault()
  try{
    const response = await axios.post(
      'http://localhost:5000/api/users',
       formdata)
       console.log(formdata)
       alert('Form submitted successfully!')
  }
  catch (error){
    console.log(error);
  }
}

  return (
   <>
   <form onSubmit={handlesubmit}>

    <input
      type="text"
      name="name"
      placeholder='Enter Your Name'
      value={formdata.name}
      onChange={handlechange}
    />
     <br /><br />

    <input
      type="number"
      name="age"
      placeholder='Enter Your Age'
      value={formdata.age}
      onChange={handlechange}
    />
     <br /><br />

    <input
      type="email"
      name="email"
      placeholder='Enter Your Email'
      value={formdata.email}
      onChange={handlechange}
    />
     <br /><br />

    <input
      type="number"
      name="mobile_number"
      placeholder='Enter Your Mobile Number'
      value={formdata.mobile_number}
      onChange={handlechange}
    />
     <br /><br />

     <input
      type="text"
      name="country"
      placeholder='Enter Your Country'
      value={formdata.country}
      onChange={handlechange}
    />
     <br /><br />

     <input
      type="text"
      name="state"
      placeholder='Enter Your State'
      value={formdata.state}
      onChange={handlechange}
    />
     <br /><br />

     <input
      type="text"
      name="city"
      placeholder='Enter Your City'
      value={formdata.city}
      onChange={handlechange}
    />
     <br /><br />

     <input
      type="number"
      name="aadhar_number"
      placeholder='Enter Your Aadhar Number'
      value={formdata.aadhar_number}
      onChange={handlechange}
    />
     <br /><br />

     <input
      type="text"
      name="pan_number"
      placeholder='Enter Your Pan Number'
      value={formdata.pan_number}
      onChange={handlechange}
    />
     <br /><br />

     <input
      type="text"
      name="address"
      placeholder='Enter Your Address'
      value={formdata.address}
      onChange={handlechange}
    />
     <br /><br />

     <button type='submit'>Submit</button>

   </form>

   </>
  )
}

export default App;
