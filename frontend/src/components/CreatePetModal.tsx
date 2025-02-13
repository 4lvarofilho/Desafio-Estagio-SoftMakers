'use client';

import { ArrowLeftCircle, CircleUser, PhoneCall, PlusCircle, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export function CreatePetModal({ onClose }: {onClose: () => void}) {
  const [selectedPet, setSelectedPet] = useState<'cachorro' | 'gato'>('cachorro');

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[620px] min-h-48 rounded-xl bg-gradient-to-tl from-dark to-darkblue border-4 border-lightblue shadow-lg shadow-blue">
        <div className="mt-14 mx-14 flex items-center justify-center">
          <Image src={'/createicon.svg'} alt="Create Pet Icon" width={72} height={72} />
          <h1 className="text-white font-bold text-3xl ml-6">Cadastrar</h1>
          <button onClick={onClose}>
            <X className="text-white ml-60 cursor-pointer" />
          </button>
        </div>
        <div className="ml-14 mt-14">
          <form action="">
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
                  className="h-10 bg-transparent max-w-56 rounded-md outline-none border-4 border-grey placeholder:text-grey 
                  py-3 pl-2 focus:text-white focus:border-white transition-colors"
                  placeholder="Nome Sobrenome"
                  required
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
                <input type="hidden" name="petType" value={selectedPet} required />
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
                  className="h-10 bg-transparent max-w-56 rounded-md outline-none border-4 border-grey placeholder:text-grey 
                  py-3 pl-2 focus:text-white focus:border-white transition-colors"
                  placeholder="Nome Sobrenome"
                  required
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
                  className="h-10 bg-transparent max-w-56 rounded-md outline-none border-4 border-grey placeholder:text-grey 
                  py-3 pl-2 focus:text-white focus:border-white transition-colors"
                  placeholder="Raça"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <div className="flex flex-row items-center gap-2">
                  <PhoneCall width={16} height={16} className='text-white' />
                  <label htmlFor="phone" className="text-white">
                    Telefone
                  </label>
                </div>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="h-10 bg-transparent max-w-56 rounded-md outline-none border-4 border-grey placeholder:text-grey 
                  py-3 pl-2 focus:text-white focus:border-white transition-colors"
                  placeholder="(00) 00000-0000"
                  required
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
                <input
                  type="text"
                  name="birthDate"
                  id="birthDate"
                  className="h-10 bg-transparent max-w-56 rounded-md outline-none border-4 border-grey placeholder:text-grey 
                  py-3 pl-2 focus:text-white focus:border-white transition-colors"
                  placeholder="22/08/2020"
                  required
                />
              </div>
            </div>
            <div className="my-14 flex justify-between">
              <div className="flex justify-center">
                <button type='button' onClick={onClose} className="bg-white hover:bg-gray-300 transition-colors h-10 rounded-md w-56 text-lightblue flex justify-center items-center gap-1 font-bold">
                  <ArrowLeftCircle width={16} height={16} />
                  Voltar
                </button>
              </div>
              <div className="flex justify-center">
                <button type='submit' className="bg-gradient-to-r from-lightblue to-blue hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-700 w-56 h-10 rounded-md text-white flex justify-center items-center gap-1 font-bold mr-14">
                  <PlusCircle width={16} height={16} />
                  Cadastrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
