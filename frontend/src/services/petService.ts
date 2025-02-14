import axios from 'axios'

export interface PetData {
  name: string
  ownerName: string
  phone: string
  birthDate: string
  type: 'cachorro' | 'gato'
  breed: string
}

export async function createPet(petData: PetData) {
  try {
    const response = await axios.post('localhost/api/pets', petData)

    if (response.status === 201) {
      return { success: true, message: 'Pet cadastrado com sucesso!' }
    } else {
      return { success: false, message: 'Erro ao cadastrar pet.' }
    }
  } catch (error) {
    console.error('Erro ao enviar requisição:', error)
    return { success: false, message: 'Erro na requisição. Tente novamente.' }
  }
}

export async function updatePet(petId: number, petData: PetData) {
  try {
    const response = await axios.patch(`/api/pets/${petId}`, petData)

    if (response.status === 200) {
      return { success: true, message: 'Pet atualizado com sucesso!' }
    } else {
      return { success: false, message: 'Erro ao atualizar pet.' }
    }
  } catch (error) {
    console.error('Erro ao atualizar pet:', error)
    return { success: false, message: 'Erro na requisição. Tente novamente.' }
  }
}

