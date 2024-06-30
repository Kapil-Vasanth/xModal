import { useState } from "react";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formData,setFormData] = useState({
    username:'',
    email:'',
    phone:'',
    dob:''
  })

  const handleFormData = (e) => {
    setFormData(prev => ({...prev,[e.target.id]:e.target.value}))
  }
  
  const checkModal = (e) => {
    if(e.target.classList.contains('modal')){
      setShowModal(prev => !prev)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(formData.phone.length != 10 && !formData.phone.split("").every(char => !isNaN(char))){
      alert("Invalid Phone number. Please enter a 10-digit phone number.")
    }
    
    if(new Date().getTime() < new Date(formData.dob).getTime()){
      alert("Invalid date of birth. Date of birth cannot be in the future.")
    }
  }

  return (
    <>
      <div onClick={(e) => checkModal(e)}>
        <h1>User Details Modal</h1>
        <button onClick={() => setShowModal(prev => !prev)}>Open Form</button>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Fill Details</h1>
                <label htmlFor="username">Username:</label>
                <input type="text" required  id="username" onChange={(e) => handleFormData(e)} value={formData.username}/>
                <label htmlFor="email">Email Address:</label>
                <input type="email" required  id="email" onChange={(e) => handleFormData(e)} value={formData.email}/>
                <label htmlFor="phone">Phone Number:</label>
                <input type="text" required id="phone" onChange={(e) => handleFormData(e)} value={formData.phone}/>
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" required  id="dob" onChange={(e) => handleFormData(e)} value={formData.dob}/>
                <button className="submit-button" type="submit" >Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
