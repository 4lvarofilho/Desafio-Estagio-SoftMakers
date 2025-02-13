'use client'

import { ChevronDown, CircleUser } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface PetProps {
  petName: string;
  ownerName: string;
  petType: string;
}

export function Pet({ petName, ownerName, petType }: PetProps) {
  const [rotateChevron, setRotateChevron] = useState(false);

  const handleRotate = () => setRotateChevron(!rotateChevron);

  const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)"

  const petIcon = petType === "cachorro" ? "/dog.svg" : "/cat.svg"

  return (
    <div className="max-w-72 max-h-24">
      <div id="pet" className="w-72 h-24 bg-gradient-to-tl from-dark to-darkblue rounded-xl flex items-center hover:border-4 hover:border-lightblue hover:cursor-pointer transition-all" onClick={handleRotate}>
        <Image
          src={petIcon}
          alt="Pet Icon"
          height={65}
          width={65}
          className="pl-3"
        />
        <div className="flex flex-col ml-4 justify-center gap-2">
          <div className="flex flex-row gap-2 items-center space-y-1.5 flex-1">
            <Image
              src={'/petcollar.svg'}
              alt="Pet Collar"
              width={16}
              height={16}
            />
            <p className="text-white text-base truncate">{petName}</p>
          </div>
          <div className="flex flex-row gap-2 items-center space-y-1.5 flex-1">
            <CircleUser size={16} className="text-white" />
            <p className="text-white text-base truncate">{ownerName}</p>
          </div>
        </div>
        <ChevronDown className="text-white align-middle text-right ml-5" style={{ transform: rotate, transition: "all 0.2s linear" }}/>
      </div>
    </div>
  );
}