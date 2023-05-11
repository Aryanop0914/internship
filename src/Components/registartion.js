import React, { useState } from 'react';
import ''
import { Link, useNavigate } from 'react-router-dom'

const Registration = () => {

  const navigate = useNavigate();
  const [Companyname, setName] = useState("");
  const [companyownerName, setownername] = useState("");
  const [Companycontectno, setPhoneno] = useState("");
  const [CompanyAddress, setAddress] = useState("");
  // const [Adtype, setadtype] = useState("");
  const [productName, setproduct] = useState("");
  const [Ad_duration, setduration] = useState("");
  const [timeline, settimeline] = useState("");
  const handleSubmit = async () => {
   
    console.log(Companyname, companyownerName, Companycontectno, CompanyAddress,productName, Ad_duration, timeline);
    let result = await fetch("http://localhost:5000/regschema", {
      method: "post",
      body: JSON.stringify({ Companyname, companyownerName, Companycontectno, CompanyAddress,productName, Ad_duration, timeline }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();
    if (result) {
      navigate('/');
    }
    else {
      console.log("error has been occured..!!");
    }

  };

  return (
    <>
      <header>
        <h1>Clint Registration</h1>
      </header>

      <main>
        <div style={{display: "flex",flexDirection: "column"}}>

          <label htmlFor="name">Name</label>
          <input type="text" value={Companyname} onChange={(e) => { setName(e.target.value) }} name="name" className="text-box" placeholder="Company Name" required />

          <label htmlFor="owner">Owner</label>
          <input type="text" value={companyownerName} onChange={(e) => { setownername(e.target.value) }} name="name" className="text-box" placeholder="Enter Your Name" required />

          <label htmlFor="phone">Phone Number</label>
          <input type="text" value={Companycontectno} onChange={(e) => { setPhoneno(e.target.value) }} name="name" className="text-box" placeholder="Your Contect Number" required />

          <label htmlFor="Address">Address</label>
          <input type="text" value={CompanyAddress} onChange={(e) => { setAddress(e.target.value) }} name="name" className="text-box" placeholder="Company Address" required />

          {/* <label htmlFor="adtype">adtype </label>
          <input type="text" value={Adtype} onChange={(e) => { setadtype(e.target.value) }} name="name" className="text-box" placeholder="Ad Type" required /> */}

        
          <label htmlFor="Product Name">Product Name</label>
          <input type="text" value={productName} onChange={(e) => { setproduct(e.target.value) }} name="name" className="text-box" placeholder="Product Name" required />

          <label htmlFor="Duration">Duration</label>
          <input type="text" value={Ad_duration} onChange={(e) => { setduration(e.target.value) }} name="name" className="text-box" placeholder="Time Duration" required />

          <label htmlFor="timeline">timeline</label>
          <input type="text" value={timeline} onChange={(e) => { settimeline(e.target.value) }} name="name" className="text-box" placeholder="Timeline" required />


        
         
          <div className="openbtnn"><button onClick={handleSubmit} style={{background: "no-repeat"}}>Register</button><div className="underline"></div></div>
          </div>
       
      </main>

      <footer>
        <p>&copy; </p>
      </footer>


    </>
  );
};

export default Registration;
