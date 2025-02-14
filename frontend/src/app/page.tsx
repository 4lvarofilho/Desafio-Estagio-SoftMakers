'use client'

import { CreatePetModal } from "@/components/CreatePetModal";
import { Header } from "@/components/Header";
import PageNavigator from "@/components/PageNavigator";
import { PetCard } from "@/components/PetCard";
import { UpdatePetModal } from "@/components/UpdatePetModal";
import { useState } from "react";
import type { Pet } from "./types";


export default function Home() {
  const pets = [
    { id: 1, petName: "Simba Farias", ownerName: "Emmanuel Farias", type: "gato", breed: "Persa", phone: "(81) 98240-2134", birthDate: "2020-08-22" },
    { id: 2, petName: "Scooby Doo", ownerName: "Emmanuel Farias", type: "cachorro", breed: "Dogue Alemão", phone: "(81) 91234-5678", birthDate: "2018-06-10" },
  ];

  const [isCreatePetModalOpen, setIsCreatePetModalOpen] = useState(false);
  const [isUpdatePetModalOpen, setIsUpdatePetModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);


  const itemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const petsToShow = pets.slice(startIndex, endIndex);
  const totalPages = Math.ceil(pets.length / itemsPerPage);

  function handleEdit(pet: Pet) {
    setSelectedPet(pet);
    setIsUpdatePetModalOpen(true);
  }

  function handleCloseUpdatePetModal() {
    setIsUpdatePetModalOpen(false)
  }

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
            <PetCard key={pet.id} pet={pet} handleOpenUpdateModal={handleEdit}/>
          ))}
        </div>
        <PageNavigator currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
        {isCreatePetModalOpen && <CreatePetModal onClose={handleCloseCreatePetModal}/>}
        {selectedPet && isUpdatePetModalOpen && <UpdatePetModal pet={selectedPet} onClose={handleCloseUpdatePetModal}/>}
      </div>
    </div>
  );
}
