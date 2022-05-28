import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./context/Authcontext";


function Account() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();


  

  const handleClick = async () => {
    try {
      await logout();
      navigate("/");
      alert("You r logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="max-w-[600px] mx-auto p-4">
      <h1 className="text-2xl font-bold py-4">Account</h1>
      <p>User Email:{user && user.email}</p>
      <button
      
        onClick={handleClick}
        className="border rounded-[5px] px-6 py-2 my-4 hover:bg-blue-50"
        id="button"
        
      >
        Logout
      </button>
      
    </div>
  );
}

export default Account;
