import Image from "next/image";
import { Search, CirclePlus } from "lucide-react";
import { Button } from "@mui/material";

export function Header({openCreatePetModal}: {openCreatePetModal: () => void}) {
  return (
    <div className="pt-12 font-[family-name:var(--font-ubuntu)] mb-12">
      <div className="flex items-center gap-3 pb-12">
        <Image
          src={'/softpet.svg'}
          width={61}
          height={48}
          alt="SoftPet Logo"
        />
        <h1 className="text-3xl font-medium text-white">SoftPet</h1>
      </div>
      <div className="flex flex-row gap-6 w-full pr-14">
        <div className="flex flex-row max-h-12 h-12 border-4 border-grey rounded-xl w-full">
          <Search className="bg-grey p-2 h-full w-14 text-dark" />
          <input type="text" className="bg-transparent w-full m-2 outline-none focus:text-white transition-all"/>
          <Button className="bg-gradient-to-l  from-grey to-grey rounded-xl h-8 self-center hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-700 transition-all" disableRipple>
            <p className="font-bold text-white text-sm normal-case py-2 pl-3 pr-2 ">Pesquisar</p>
          </Button>
          <div className="w-1 bg-transparent text-transparent cursor-default">.</div> {/*Isso aqui é a pura gambiarra, corrigir depois*/}
        </div>
        <Button className="bg-gradient-to-r from-lightblue to-blue w-40 h-12 rounded-xl flex gap-2 hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-700 transition-all" onClick={openCreatePetModal} >
          <CirclePlus className="text-white size-5" />
          <p className="font-bold text-white normal-case text-sm">Cadastrar</p>
        </Button>
      </div>
    </div>
  )
}