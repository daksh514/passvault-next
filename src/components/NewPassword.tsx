"use client";
import { getPasswords, savePassword } from "@/actions/passwordActions";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Session } from "next-auth";
// import { Session } from "rea";
import React, { Dispatch, SetStateAction, useState } from "react";

function NewPassword({
  newPassOpen,
  session,
}: {
  newPassOpen: Dispatch<SetStateAction<boolean>>;
  session: Session;
}) {
  const [passTitle, setPassTitle] = useState("");
  const [passValue, setPassValue] = useState("");
  async function formSubmitHandler() {
    const passData = new FormData();
    passData.append("passTitle", passTitle);
    passData.append("passValue", passValue);
    passData.append("userEmail", session?.user?.email || "");
    const res = await savePassword(passData);
    // console.log(res);
    await getPasswords();
    window.location.reload()
  }
  return (
    <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]  bg-gray-800 rounded-md text-white shadow-2xl">
      <div className=" text-white px-8 py-8 ">
        <div className=" flex items-center justify-between">
          <h1 className="text-xl font-semibold">Add New Password</h1>
          <button onClick={() => newPassOpen(false)}>
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
            
            <button type="button" onClick={()=>{formSubmitHandler(); newPassOpen(false)}} className="mt-5 bg-green-300 text-black font-semibold w-full p-2 rounded-md">
              Save Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
