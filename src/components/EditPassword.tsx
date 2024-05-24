"use client";
import { getPasswords, savePassword, updatePassword } from "@/actions/passwordActions";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Session } from "next-auth";
// import { Session } from "rea";
import React, { Dispatch, SetStateAction, useState } from "react";

function EditPassword({editPassOpen, password}:{editPassOpen:Dispatch<SetStateAction<boolean>>, password:string}) {
  
  async function formSubmitHandler() {
    const passData = new FormData();
    passData.append("passTitle", passTitle);
    passData.append("passValue", passValue);
    passData.append("userEmail", passwordObj.userEmail);
    const res = await updatePassword(passData, passwordObj._id);
    // console.log(res);
    await getPasswords();
    window.location.reload()
  }
  const passwordObj = JSON.parse(password);
  const [passTitle, setPassTitle] = useState(passwordObj.passTitle);
  const [passValue, setPassValue] = useState(passwordObj.passValue);
//   setPassTitle(passwordObj.passTitle);
  return (
      <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]  bg-gray-800 rounded-md text-white shadow-2xl">
        {/* {password} */}
      <div className=" text-white px-8 py-8 ">
        <div className=" flex items-center justify-between">
          <h1 className="text-xl font-semibold">Update Password</h1>
          <button onClick={()=>editPassOpen(false)}>
            <FontAwesomeIcon icon={faClose} className="w-auto h-6" />
          </button>
        </div>
        <div className="mt-4">
          <form>
            <div className="flex flex-col">
                <label htmlFor="passTitle" className="text-sm font-semibold text-gray-400">Password Title</label>
            <input
              type="text"
              className="w-full p-2 rounded-md text-black"
              name="passTitle"
              placeholder="Eg: Google"
              value={passTitle}
              onChange={(e) => setPassTitle(e.target.value)}
              id="passTitle"
              
            />
            </div>
            <div className="flex flex-col mt-3">
            <label htmlFor="passValue" className="text-sm font-semibold text-gray-400">Password Value</label>
            <input
              type="text"
              className="w-full p-2 rounded-md text-black"
              name="passValue"
              placeholder="Your Password"
              value={passValue}
              onChange={(e) => setPassValue(e.target.value)}
              id="passValue"
            />
            </div>
            
            <button type="button" onClick={()=>{formSubmitHandler(); editPassOpen(false)}} className="mt-5 bg-green-300 text-black font-semibold w-full p-2 rounded-md">
              Save Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPassword;
