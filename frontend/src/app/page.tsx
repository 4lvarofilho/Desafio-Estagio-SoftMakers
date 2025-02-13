'use client'

import { CreatePetModal } from "@/components/CreatePetModal";
import { Header } from "@/components/Header";
import PageNavigator from "@/components/PageNavigator";
import { Pet } from "@/components/Pet";
import { useState } from "react";


export default function Home() {
  const pets = [
    { id: 1, name: "Simba Farias", owner: "Emmanuel Farias", type: "gato", breed: "Persa", phone: "(81) 98240-2134", birthDate: "2020-08-22" },
    { id: 2, name: "Scooby Doo", owner: "Emmanuel Farias", type: "cachorro", breed: "Dogue Alemão", phone: "(81) 91234-5678", birthDate: "2018-06-10" },
  ];

  const [isCreatePetModalOpen, setIsCreatePetModalOpen] = useState(false);

  const itemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const petsToShow = pets.slice(startIndex, endIndex);
  const totalPages = Math.ceil(pets.length / itemsPerPage);

  function handleOpenCreatePetModal() {
    setIsCreatePetModalOpen(true);
  }

  function handleCloseCreatePetModal() {
    setIsCreatePetModalOpen(false);
  }

  function goToPage(newPage: number) {
    setCurrentPage(newPage)
  }

  return (
    <div className="bg-gradient-to-tl from-darkblue to-dark bg-dark min-h-screen z-0">
      <div className="ml-14">
        <Header openCreatePetModal={handleOpenCreatePetModal} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {petsToShow.map((pet) => (
            <Pet key={pet.id} id={pet.id} petName={pet.name} ownerName={pet.owner} type={pet.type} breed={pet.breed} phone={pet.phone} birthDate={pet.birthDate}></Pet>
          ))}
        </div>
        <PageNavigator currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
        {isCreatePetModalOpen && <CreatePetModal onClose={handleCloseCreatePetModal}/>}
      </div>
    </div>
  );
}
