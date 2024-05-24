"use client";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";
import React from "react";

function LogInComp() {
  return (
    <div className="w-2/4 py-5 bg-white shadow-lg rounded-md pt-4 flex flex-col items-center px-10 min-w-[340px]">
      <h1 className="font-semibold text-center text-2xl">
        You are not logged in!
      </h1>
      <p className="text-center mt-3">
        You must be logged in or you wont be able to use this app. And its my
        order!
      </p>
      <div className="mt-5 w-full">
        <button
          onClick={() => signIn("google")}
          className="text-center flex items-center w-5/5 justify-center gap-2 bg-green-200 w-full py-2 rounded-md shadow-sm"
        >
          <FontAwesomeIcon icon={faGoogle} />
          <span className="font-semibold">LogIn with Google</span>
        </button>
        <button
          onClick={() => signIn("google")}
          className="text-center flex items-center w-5/5 justify-center gap-2 bg-green-200 w-full py-2 rounded-md shadow-sm mt-4"
        >
          <FontAwesomeIcon icon={faGoogle} />
          <span className="font-semibold">SignUp with Google</span>
        </button>
      </div>
      <p className="text-center mt-3"></p>
    </div>
  );
}

export default LogInComp;
