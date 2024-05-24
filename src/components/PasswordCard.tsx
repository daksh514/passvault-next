"use client";

import {
  faEllipsisVertical,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import CardMenu from "./CardMenu";

function PasswordCard({ password }: { password: any }) {
  const [isViewing, setIsViewing] = useState(false);
  const [cardMenuOpen, setCardMenuOpen] = useState(false);

  
  return (
    <div key={password._id}>
      <div className="bg-gray-200 mb-2 flex flex-col gap-2 shadow-md rounded-md p-5">
        <div className="flex gap-3 items-center relative">
          <h1 className=" grow text-xl rounded-sm font-semibold">
            {password.passTitle}
          </h1>
          <button
            className="w-1/12 text-right cursor-pointer"
            onClick={() => setCardMenuOpen(cardMenuOpen ? false : true)}
          >
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
          {cardMenuOpen && (
            <CardMenu password={JSON.stringify(password)}/>
          )}
        </div>
        <div className="mt-2 bg-gray-50 rounded-md flex items-center justify-between py-2 px-4">
          <h1 className="text-md">
            {isViewing ? password.passValue : "*******"}
          </h1>
          <button onClick={() => setIsViewing(isViewing ? false : true)}>
            {isViewing ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordCard;
