// ** Redux Imports
import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";


export type AnimalsState = {
  loading: boolean,
  animalsList: AnimalType[]
}

export type AnimalType = {
  _id?: string
  name?: string
  color: string
  age: number
}


export const animalsSlice = createSlice({
  name: 'animals',
  initialState: {
    loading: true,
    animalsList: []
  } as AnimalsState,
  reducers: {
    setAnimalsList: (state: AnimalsState, action: PayloadAction<AnimalType[]>) => {
      debugger
      state.animalsList = action.payload
      state.loading = false
    }
  }
})

export const {
  setAnimalsList,
} = animalsSlice.actions

export default animalsSlice.reducer
