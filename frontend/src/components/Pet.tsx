import { CircleUser } from "lucide-react";
import Image from "next/image";
import Chevron from "./Chevron";

export function Pet() {
  return (
    <div className="max-w-72 max-h-24">
      <div id="pet" className="w-72 h-24 bg-gradient-to-tl from-dark to-darkblue rounded-xl flex items-center hover:border-4 hover:border-lightblue hover:cursor-pointer transition-all">
        <Image
          src={'/cat.svg'}
          alt="Pet Icon"
          height={65}
          width={65}
          className="pl-3"
        />
        <div className="flex flex-col ml-4 justify-center gap-2">
          <div className="flex flex-row gap-2">
            <Image
              src={'/petcollar.svg'}
              alt="Pet Collar"
              width={16}
              height={16}
            />
            <p className="text-white text-base">Simba Farias</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <CircleUser size={16} className="text-white" />
            <p className="text-white text-base">Emannuel Farias</p>
          </div>
        </div>
        <Chevron/>
      </div>
    </div>
  );
}