'use client'

import { CreatePetModal } from "@/components/CreatePetModal";
import { Header } from "@/components/Header";
import PageNavigator from "@/components/PageNavigator";
import { PetCard } from "@/components/PetCard";
import { UpdatePetModal } from "@/components/UpdatePetModal";
import { useEffect, useState } from "react";
import type { Pet } from "./types";
import { API_URL } from "@/services/petService";
import axios from "axios";
import { RemovePetModal } from "@/components/RemovePetModal";


export default function Home() {
  const [petsList, setPetsList] = useState<Pet[]>([]);
  const [isCreatePetModalOpen, setIsCreatePetModalOpen] = useState(false);
  const [isUpdatePetModalOpen, setIsUpdatePetModalOpen] = useState(false);
  const [isRemovePetModalOpen, setIsRemovePetModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPets = petsList.filter(pet =>
    pet.petName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pet.ownerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const itemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const petsToShow = filteredPets.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredPets.length / itemsPerPage);

  async function fetchPets() {
    try {
      const response = await axios.get(`${API_URL}`)
      setPetsList(response.data);
    } catch (error) {
      console.error("Erro ao buscar pets", error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  function handleOpenCreatePetModal() {
    setIsCreatePetModalOpen(true);
  }

  function handleCloseCreatePetModal() {
    setIsCreatePetModalOpen(false);
  }

  function handleEdit(pet: Pet) {
    setSelectedPet(pet);
    setIsUpdatePetModalOpen(true);
  }

  function handleCloseUpdatePetModal() {
    setIsUpdatePetModalOpen(false)
  }

  function handleOpenRemovePetModal(pet: Pet) {
    setSelectedPet(pet);
    setIsRemovePetModalOpen(true);
  }

  function handleCloseRemovePetModal() {
    setIsRemovePetModalOpen(false);
    setSelectedPet(null);
  }

  function handlePetRemoved(id: number) {
    setPetsList((prevPets) => prevPets.filter((pet) => pet.id !== id));
  }

  function goToPage(newPage: number) {
    setCurrentPage(newPage)
  }

  return (
    <div className="bg-gradient-to-tl from-darkblue to-dark bg-dark min-h-screen z-0">
      <div className="ml-14">
        <Header openCreatePetModal={handleOpenCreatePetModal} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {petsToShow.map((pet) => (
            <PetCard key={pet.id} pet={pet} handleOpenUpdateModal={handleEdit} handleOpenRemoveModal={handleOpenRemovePetModal} />
          ))}
        </div>
        {isCreatePetModalOpen && <CreatePetModal onClose={handleCloseCreatePetModal} fetchPets={fetchPets} />}
        {selectedPet && isUpdatePetModalOpen && <UpdatePetModal pet={selectedPet} onClose={handleCloseUpdatePetModal} fetchPets={fetchPets} />}
        {selectedPet && isRemovePetModalOpen && <RemovePetModal pet={selectedPet} onClose={handleCloseRemovePetModal} onPetRemoved={handlePetRemoved} fetchPets={fetchPets} />}
        <PageNavigator currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
      </div>
    </div>
  );
}
