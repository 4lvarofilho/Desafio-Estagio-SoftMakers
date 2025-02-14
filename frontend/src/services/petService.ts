import axios from 'axios'

export interface PetData {
  petName?: string
  ownerName?: string
  phone?: string
  birthDate?: string
  type?: string
  breed?: string
}

export const API_URL = "http://localhost:3001/api/pets"

export async function createPet(petData: PetData) {
  try {
    const response = await axios.post(API_URL, petData)

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
    const response = await axios.patch(`${API_URL}/${petId}`, petData)

    if (response.status === 200) {
      return { success: true, message: 'Pet atualizado com sucesso!' }
    } else {
      return { success: false, message: 'Erro ao atualizar pet.' }
    }
  } catch (error) {
    console.error('Erro ao atualizar pet:', error)
    return { success: false, message: 'Erro na requisição, tente novamente.' }
  }
}

export async function removePet(petId: number) {
  try {
    const response = await axios.delete(`${API_URL}/${petId}`)

    if (response.status === 200){
      return { success: true, message: 'Pet removido com sucesso!' }
    } else {
      return { success: false, message: 'Erro ao remover pet.' }
    }
  } catch (error) {
    console.error('Erro ao remover pet', error)
    return { success: false, message: 'Erro na requisição, tente novamente.' }
  }
}

