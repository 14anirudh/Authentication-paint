import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./context/Authcontext";
import Modal from "./Modal.js";

function Account() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  // const [view, setView] = useState(false);
  const [name, setName] = useState("Anirudh Gautam");
  const [roll, setRoll] = useState("1116403220");
 
  const enrol = [146403220, 156403320, 136403220, 126603420,186403820,196456220,226403220,236403220];
  const Naam = [
    "Manik Agarwal",
    "Anjali Singh",
    "Avantika Tomar",
    "Naveen Dawar",
    "Rishabh Pant",
    "Lakshay Arora",
    "Vatsal Gupta",
    "Tanishq Sharma"
  ];

  const generateRandomNumber = () => {
    const item = enrol[Math.floor(Math.random() * enrol.length)];
    const sitem = Naam[Math.floor(Math.random() * Naam.length)];

    setName(sitem);
    setRoll(item);
  };

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
        className="border px-6 py-2 my-4 hover:bg-blue-50"
        id="button"
      >
        Logout
      </button>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Applicant Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {`${name}`}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Enrollment Number
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {`${roll}`}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Application For
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Verification of IPU Mail ID
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Documents</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul
                  // role="list"
                  className="border border-gray-200 rounded-md divide-y divide-gray-200"
                >
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      {/* <PaperClipIcon
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  /> */}
                      <span className="ml-2 flex-1 w-0 truncate">
                        ID_Card.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                      href="https://docs.google.com/spreadsheets/d/1MLAi-52dY1QooLr3Ftl8ySWEMoJFst8o/edit#gid=1998783879"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Open
                      </a>
                    </div>
                  </li>
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <span className="ml-2 flex-1 w-0 truncate">
                        Reporting_Slip.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="https://docs.google.com/spreadsheets/d/1MLAi-52dY1QooLr3Ftl8ySWEMoJFst8o/edit#gid=1998783879"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Open
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
          <button
            className="border border-blue-500 bg-blue-600 w-[200px] p-4 my-2 mx-2 text-white hover:bg-blue-500"
            
            onClick={() => {
              setOpen(true);
            }}
          >
            Verify
            {open && <Modal closeModal={setOpen}/>}
          </button>

          <button
            className="border border-blue-500 bg-blue-600  w-[200px] p-4 my-2 mx-2 text-white hover:bg-blue-500"
            
            onClick={generateRandomNumber}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
