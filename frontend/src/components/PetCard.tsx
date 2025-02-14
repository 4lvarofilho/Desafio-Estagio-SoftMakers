'use client'

import type { Pet } from "@/app/types";
import { ChevronDown, CircleUser, SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface PetProps {
  pet: {
    id: number;
    petName: string;
    ownerName: string;
    type: string;
    breed: string;
    phone: string;
    birthDate: string;
  },
  handleOpenUpdateModal: (pet: Pet) => void;
}

export function PetCard({ pet, handleOpenUpdateModal }: PetProps) {
  const [activeCard, setActiveCard] = useState(false)
  const [rotateChevron, setRotateChevron] = useState(false);

  const handleRotate = () => setRotateChevron(!rotateChevron);

  const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)"

  const petIcon = pet.type === "cachorro" ? "/dog.svg" : "/cat.svg"

  function calculatePetsAge(birthDate: string) {
    const birth = new Date(birthDate)
    const today = new Date()
    const age = today.getFullYear() - birth.getFullYear()
    return `${age} Anos (${birth.toLocaleDateString("pt-BR")})`
  }

  const handleActive = () => {
    if (activeCard === false) {
      setActiveCard(true)
    } else {
      setActiveCard(false)
    }
  }

  return (
    <div className="max-w-72 flex flex-col gap-3">
      <div className={`w-72 h-24 bg-gradient-to-tl from-dark to-darkblue rounded-xl flex items-center hover:border-4 hover:border-lightblue hover:cursor-pointer transition-all ${activeCard ? "border-lightblue border-4" : "border-0"}`} onClick={() => { handleRotate(); handleActive(); }}>
        <Image
          src={petIcon}
          alt="Pet Icon"
          height={65}
          width={65}
          className="pl-3"
        />
        <div className="flex flex-col ml-4 justify-center gap-2">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src={'/petcollar.svg'}
              alt="Pet Collar"
              width={16}
              height={16}
            />
            <p className="text-white text-base truncate">{pet.petName}</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <CircleUser size={16} className="text-white" />
            <p className="text-white text-base truncate">{pet.ownerName}</p>
          </div>
        </div>
        <ChevronDown className="text-white align-middle text-right ml-5" style={{ transform: rotate, transition: "all 0.2s linear" }} />
      </div>
      {activeCard && (
        <div className="w-72 rounded-xl border-4 border-lightblue bg-gradient-to-tl from-dark to-darkblue shadow-lg shadow-blue">
          <div className="flex flex-col ml-6 mt-6 gap-2">
            <div className="flex gap-1">
              <Image
                src={'/gene.svg'}
                alt="Ilustração de ícone para raça"
                width={10}
                height={16}
              />
              <p className="text-white text-base">Raça: {pet.breed}</p>
            </div>
            <div className="flex gap-1 -ml-1">
              <Image
                src={'/phonecall.svg'}
                alt="Ilustração de ícone para telefone"
                width={14}
                height={14}
              />
              <p className="text-white text-base">Telefone: {pet.phone}</p>
            </div>
            <div className="flex gap-1 -ml-1">
              <Image
                src={'/calendar.svg'}
                alt="Ilustração de ícone para telefone"
                width={14}
                height={14}
              />
              <p className="text-white text-base">Idade: {calculatePetsAge(pet.birthDate)}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button onClick={() => handleOpenUpdateModal(pet)} className="bg-white hover:bg-gray-300 transition-colors mt-5 w-64 h-10 rounded-md text-lightblue flex justify-center items-center gap-1 font-bold">
              <SquarePen width={16} height={16} />
              Editar
            </button>
          </div>
          <div className="flex justify-center mb-4">
            <button className="bg-gradient-to-r from-lightblue to-blue hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-700 mt-5 w-64 h-10 rounded-md text-white flex justify-center items-center gap-1 font-bold">
              <Trash2 width={16} height={16} />
              Remover
            </button>
          </div>
        </div>
      )}
    </div>
  );
}