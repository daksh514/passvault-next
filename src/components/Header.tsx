"use client";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Session, getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NewPassword from "./NewPassword";

function Header({ session }: { session: Session }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [newPassOpen, setNewPassOpen] = useState(false);

  return (
    <>
      <div className="flex w-full justify-between items-center mt-5">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold">PassVault</h1>
        </Link>

        <div className="flex gap-4 relative ">
          <button onClick={()=>setNewPassOpen(newPassOpen?false:true)} className="flex items-center border border-green-300 px-4 gap-2 rounded-lg bg-green-100">
            <FontAwesomeIcon
              icon={faPlus}
              className="w-full h-5 fill-green-300 min-h-1"
            />
            <span className="font-semibold">New</span>
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(menuOpen ? false : true)}
          >
            <Image
              src={session?.user?.image || ""}
              alt="profile avataer"
              width={64}
              height={64}
              className="rounded-full w-11 text-green-700"
            />
          </button>
          {menuOpen && (
            <div className="bg-gray-400 text-white absolute top-11 right-0 rounded-lg px-8 py-2">
              <button
                onClick={() => signOut()}
                className=" text-black font-semibold"
              >
                LogOut
              </button>
            </div>
          )}
        </div>
      </div>
      {
        newPassOpen &&(
          <div>

        <div className="bg-black/40 absolute top-0 left-0 w-screen h-screen backdrop-filter" onClick={()=>setNewPassOpen(false)}></div>
      <NewPassword newPassOpen={setNewPassOpen} session={JSON.stringify(session)}/>
      </div> 
      )
      }
    </>
  );
}

export default Header;
