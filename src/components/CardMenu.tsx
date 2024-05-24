"use client";
import { deletePassword } from "@/actions/passwordActions";
import React, { useEffect, useState } from "react";
import EditPassword from "./EditPassword";

function CardMenu({ password }: {  password: string}) {
  async function deletePasswordData() {
    console.log("getting called", userId);
    const res = await deletePassword(userId);
    window.location.reload();
    // console.log(res);
  }
  const passwordObj = JSON.parse(password);
  const userId = passwordObj._id
  

  const [editMenuOpen, setEditMenuOpen] = useState(false);
  return (
    <>
    <div className="bg-gray-600 w-1/3 absolute right-0 top-7 flex flex-col text-white font-semibold rounded-md p-1">
      <button className="text-left px-2 border-b-gray-900 border-b hover:bg-gray-200 hover:text-black transition-all" onClick={()=>setEditMenuOpen(true)}>
        Edit
      </button>
      <button className="text-left px-2 border-b-gray-900 border-b hover:bg-gray-200 hover:text-black transition-all">
        Lock
      </button>
      <button
        className="text-left px-2 hover:bg-gray-200 hover:text-black transition-all"
        onClick={() => {
          deletePasswordData();
        }}
      >
        Delete
      </button>
     
    </div>
    {
        editMenuOpen && (<div>
        <div className="bg-black/40 fixed top-0 left-0 w-screen h-screen backdrop-filter" onClick={()=>setEditMenuOpen(false)}></div>

        <EditPassword editPassOpen={setEditMenuOpen} password={password}/></div>)
      }
    </>
    
  );
}

export default CardMenu;
