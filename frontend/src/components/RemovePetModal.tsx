import { useState } from 'react'
import { removePet } from '../services/petService'
import { DateInput } from './DateInput'
import type { Pet } from '@/app/types'
import { ArrowLeftCircle, CircleUser, PhoneCall, Trash2, X } from 'lucide-react';
import Image from 'next/image';
import { IMaskInput } from 'react-imask';
import { toast } from 'react-toastify';

interface removePetModalProps {
  pet: Pet | null;
  onClose: () => void
  onPetRemoved: (id: number) => void;
  fetchPets: () => void;
}

export function RemovePetModal({ pet, onClose, onPetRemoved, fetchPets }: removePetModalProps) {
  const [formData, setFormData] = useState({ ...pet })
  const [birthDate, setBirthDate] = useState<Date | null>(
    pet?.birthDate ? new Date(pet.birthDate) : null
  );
  const [selectedPet, setSelectedPet] = useState<'cachorro' | 'gato'>('cachorro');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  async function handleDelete(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!pet) {
      toast.error("⚠ Pet não encontrado.")
      return
    }

    try {
      await removePet(pet.id);
      onPetRemoved(pet.id)
      fetchPets();
      onClose();
    } catch (error) {
      console.error("Erro ao remover o pet", error);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-20">
      <div className="w-[620px] min-h-48 rounded-xl bg-gradient-to-tl from-dark to-darkblue border-4 border-lightblue shadow-lg shadow-blue">
        <div className="mt-14 mx-14 flex items-center justify-center">
          <Image src={'/removeicon.svg'} alt="Remove Pet Icon" width={72} height={72} />
          <h1 className="text-white font-bold text-3xl ml-6">Remover</h1>
          <button onClick={onClose}>
            <X className="text-white ml-[260px] cursor-pointer" />
          </button>
        </div>
        <div className="ml-14 mt-14">
          <form onSubmit={handleDelete}>
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <Image src={'/petcollar.svg'} alt="Pet Collar" width={16} height={16} />
                  <label htmlFor="petName" className="text-white">
                    Nome
                  </label>
                </div>
                <input
                  type="text"
                  name="petName"
                  id="petName"
                  value={formData.petName}
                  onChange={handleChange}
                  className="h-10 bg-grey max-w-56 rounded-md outline-none border-4 border-grey placeholder:text-grey 
                  py-3 pl-2 text-white focus:text-white focus:border-white transition-colors"
                  placeholder="Nome Sobrenome"
                  disabled
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <Image src={'/gene.svg'} alt="DNA Icon" width={10} height={16} />
                  <label htmlFor="petType" className="text-white">
                    Animal
                  </label>
                </div>

                <div className="text-grey flex justify-center gap-2 mr-14">
                  <div
                    className={`border-4 rounded-md h-10 w-full flex items-center gap-2 px-2 cursor-pointer transition-colors ${selectedPet === 'cachorro' ? 'border-white text-white bg-lightblue/20' : 'border-grey'
                      }`}
                    onClick={() => setSelectedPet('cachorro')}
                  >
                    <Image
                      src={selectedPet === 'cachorro' ? '/radio-selected.svg' : '/radio-unselected.svg'}
                      alt="Radio Custom Icon"
                      width={12}
                      height={12}
                    />
                    Cachorro
                  </div>
                  <div
                    className={`border-4 rounded-md h-10 w-full flex items-center gap-2 px-2 cursor-pointer transition-colors ${selectedPet === 'gato' ? 'border-white text-white bg-lightblue/20' : 'border-grey'
                      }`}
                    onClick={() => setSelectedPet('gato')}
                  >
                    <Image
                      src={selectedPet === 'gato' ? '/radio-selected.svg' : '/radio-unselected.svg'}
                      alt="Radio Custom Icon"
                      width={12}
                      height={12}
                    />
                    Gato
                  </div>
                </div>
                <input type="hidden" name="petType" value={selectedPet} onChange={handleChange} disabled />
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <div className="flex flex-row items-center gap-2">
                  <CircleUser width={16} height={16} className='text-white' />
                  <label htmlFor="ownerName" className="text-white">
                    Dono
                  </label>
                </div>
                <input
                  type="text"
                  name="ownerName"
                  id="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  className="h-10 bg-grey max-w-56 rounded-md outline-none border-4 border-grey placeholder:text-grey 
                  py-3 pl-2 text-white focus:text-white focus:border-white transition-colors"
                  placeholder="Nome Sobrenome"
                  disabled
                />
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <div className="flex flex-row items-center gap-2">
                  <Image src={'/gene.svg'} alt="DNA Icon" width={10} height={16} />
                  <label htmlFor="breed" className="text-white">
                    Raça
                  </label>
                </div>
                <input
                  type="text"
                  name="breed"
                  id="breed"
                  value={formData.breed}
                  onChange={handleChange}
                  className="h-10 bg-grey max-w-56 rounded-md outline-none border-4 border-grey placeholder:text-grey 
                  py-3 pl-2 focus:text-white focus:border-white transition-colors text-white"
                  placeholder="Raça"
                  disabled
                />
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <div className="flex flex-row items-center gap-2">
                  <PhoneCall width={16} height={16} className='text-white' />
                  <label htmlFor="phone" className="text-white">
                    Telefone
                  </label>
                </div>
                <IMaskInput
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  mask={"(00) 00000-0000"}
                  className="h-10 bg-grey max-w-56 rounded-md outline-none border-4 border-grey placeholder:text-grey 
                  py-3 pl-2 text-white focus:text-white focus:border-white transition-colors"
                  placeholder="(00) 00000-0000"
                  disabled
                />
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <div className="flex flex-row items-center gap-2">
                  <Image src={'/calendar.svg'} alt="DNA Icon" width={14} height={16} />
                  <label htmlFor="birthDate" className="text-white">
                    Nascimento
                    <span className='text-grey font-medium'> (Aproximado)</span>
                  </label>
                </div>
                <DateInput value={birthDate} onChange={setBirthDate} styling="h-10 bg-grey w-full rounded-md outline-none border-4 border-grey placeholder:text-grey 
          py-3 pl-2 pr-4 focus:text-white text-white" disabled={true}/>
              </div>
            </div>
            <div className='flex mt-6 mr-14 justify-center'>
              <p className='text-white font-bold text-lg'>Tem certeza que deseja remover esse pet?</p>
            </div>
            <div className="mb-14 mt-7 flex justify-between">
              <div className="flex justify-center">
                <button type='button' onClick={onClose} className="bg-white hover:bg-gray-300 transition-colors h-10 rounded-md w-56 text-lightblue flex justify-center items-center gap-1 font-bold">
                  <ArrowLeftCircle width={16} height={16} />
                  Voltar
                </button>
              </div>
              <div className="flex justify-center">
                <button type='submit' className="bg-danger hover:bg-red-400 w-56 h-10 rounded-md text-white flex justify-center items-center gap-1 font-bold mr-14 transition-colors">
                  <Trash2 width={16} height={16} />
                  Remover
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
