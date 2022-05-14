import React from "react";
import { useNavigate } from "react-router-dom";
import {UserAuth} from "./context/Authcontext"

function Account() {

const {user,logout}=UserAuth();
const navigate=useNavigate();
const handleClick=async()=>{
  try{
  await logout()
  navigate('/');
  console.log('You r logged out')
  }catch(e){
    console.log(e.message)
  }
}

  return (
    <div className="max-w-[600px] mx-auto my-16 p-4">
      <h1 className="text-2xl font-bold py-4">Account</h1>
      <p>User Email:{user && user.email}</p>
      <button onClick={handleClick} className="border px-6 py-2 my-4">Logout</button>
    </div>
  );
}

export default Account;
