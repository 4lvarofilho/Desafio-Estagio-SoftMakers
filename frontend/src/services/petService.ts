import axios from 'axios'
import { toast } from 'react-toastify'

export interface PetData {
  petName?: string
  ownerName?: string
  phone?: string
  birthDate?: string
  type?: string
  breed?: string
}

export const API_URL = "https://softpet-app-32b82196e129.herokuapp.com/api/pets"

export async function createPet(petData: PetData) {
  try {
    const response = await axios.post(API_URL, petData)

    if (response.status === 201) {
      toast.success("🐶 Pet cadastrado com sucesso!");
      return { success: true }
    } else {
      toast.error("⚠️ Erro ao cadastrar pet.");
      return { success: false }
    }
  } catch (error) {
    console.error('Erro ao enviar requisição:', error)
    return { success: false }
  }
}

export async function updatePet(petId: number, petData: PetData) {
  try {
    const response = await axios.patch(`${API_URL}/${petId}`, petData)

    if (response.status === 200) {
      toast.success("✏️ Pet atualizado com sucesso!");
      return { success: true }
    } else {
      toast.error("⚠️ Erro ao atualizar pet.");
      return { success: false }
    }
  } catch (error) {
    console.error('Erro ao atualizar pet:', error)
    return { success: false }
  }
}

export async function removePet(petId: number) {
  try {
    const response = await axios.delete(`${API_URL}/${petId}`)

    if (response.status === 200){
      toast.success("🗑️ Pet removido com sucesso!");
      return { success: true }
    } else {
      toast.error("⚠️ Erro ao remover pet.");
      return { success: false }
    }
  } catch (error) {
    console.error('Erro ao remover pet', error)
    return { success: false }
  }
}

