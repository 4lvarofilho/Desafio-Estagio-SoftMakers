'use client'

import { Header } from "@/components/Header";
import PageNavigator from "@/components/PageNavigator";
import { Pet } from "@/components/Pet";
import { useState } from "react";


export default function Home() {
  const pets = [
    { id: 1, name: "Simba Farias", owner: "Emmanuel Farias", type: "gato" },
    { id: 2, name: "Scooby Doo", owner: "Emmanuel Farias", type: "cachorro" },
    { id: 3, name: "Rock Lemos", owner: "Beatriz Lemos", type: "gato" },
    { id: 4, name: "Laika Campos", owner: "Álvaro Filho", type: "cachorro" },
    { id: 5, name: "Bella Oliveira", owner: "João Oliveira", type: "gato" },
    { id: 6, name: "Thor Almeida", owner: "Lucas Almeida", type: "cachorro" },
    { id: 7, name: "Mia Souza", owner: "Carla Souza", type: "gato" },
    { id: 8, name: "Buddy Santos", owner: "Ana Santos", type: "cachorro" },
    { id: 9, name: "Fiona Costa", owner: "Pedro Costa", type: "gato" },
    { id: 10, name: "Max Rocha", owner: "Fernanda Rocha", type: "cachorro" },
    { id: 11, name: "Nina Ribeiro", owner: "Roberto Ribeiro", type: "gato" },
    { id: 12, name: "Bolt Martins", owner: "Isabela Martins", type: "cachorro" },
    { id: 13, name: "Laika Campos", owner: "Álvaro Filho", type: "cachorro" },
    { id: 14, name: "Bella Oliveira", owner: "João Oliveira", type: "gato" },
    { id: 15, name: "Thor Almeida", owner: "Lucas Almeida", type: "cachorro" },
    { id: 16, name: "Mia Souza", owner: "Carla Souza", type: "gato" },
    { id: 17, name: "Buddy Santos", owner: "Ana Santos", type: "cachorro" },
    { id: 18, name: "Fiona Costa", owner: "Pedro Costa", type: "gato" },
    { id: 19, name: "Max Rocha", owner: "Fernanda Rocha", type: "cachorro" },
    { id: 20, name: "Nina Ribeiro", owner: "Roberto Ribeiro", type: "gato" },
    { id: 21, name: "Bolt Martins", owner: "Isabela Martins", type: "cachorro" }
  ];

  const itemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const petsToShow = pets.slice(startIndex, endIndex);
  const totalPages = Math.ceil(pets.length / itemsPerPage);

  function goToPage(newPage: number) {
    setCurrentPage(newPage)
  }
  
  return (
    <div className="bg-gradient-to-tl from-darkblue to-dark bg-dark min-h-screen z-0">
      <div className="ml-14">
        <Header />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {petsToShow.map((pet) => (
            <Pet key={pet.id} petName={pet.name} ownerName={pet.owner} petType={pet.type} />
          ))}
          <PageNavigator currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
        </div>
      </div>
    </div>
  );
}
