// ** React Imports
import { useContext, useEffect, useRef, useState } from "react";

// ** Store Imports
import { AnimalType, setAnimalsList } from "../state/animals";
import { useDispatch, useSelector } from "react-redux";
import { AnimalsState } from "@/store/state/animals";
import axios, { AxiosResponse } from "axios";
import { RootState } from "@/store";


let serverIp = process.env.NEXT_PUBLIC_SERVER_IP || "ENV VARIABLE NEXT_PUBLIC_SERVER_IP_DEFAULT NOT READABLE";

let serverPort = process.env.NEXT_PUBLIC_SERVER_PORT || "ENV VARIABLE NEXT_PUBLIC_SERVER_PORT_DEFAULT NOT VISIBLE";


const invokeSearchApi = async (name: string) => {
  const res: AxiosResponse = await axios.post(`http://${serverIp}:${serverPort}/search`, {
    searchString: name
  });

  if (!res.status || res.status !== 200) {
    throw new Error(res.data.error || "failed to call animals rest backend");
  }
  return res.data.animals;
};


type UseAnimalsType = {
  searchAnimals: (name: any) => void,
} & AnimalsState


type AnimalsApi = {
  animalsList: AnimalType[],
  searchAnimals: (name: any) => void,
  updateAnimals: (animals: AnimalType[]) => void,
  loading: boolean
}

export const useAnimals = (): AnimalsApi => {

  const componentJustMounted = useRef(true);
  // ** Hooks
  const dispatch = useDispatch();


  const store:AnimalsState = useSelector((state: RootState) => state.animals)

  const updateAnimals = (animals: AnimalType[]) => {
    dispatch(setAnimalsList(animals));
  }

  const searchAnimals = (name: any) => {
    invokeSearchApi(name)
      .then(animals => {
        updateAnimals(animals);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {


    if (!componentJustMounted) {
      return;
    }

    componentJustMounted.current = false;

    if(!process.env.SYSTEM_UNDER_TEST){
      invokeSearchApi("")
        .then(animals => {
          updateAnimals(animals);
        })
        .catch(err => {
          console.error(err);
        });
    }


  }, []);


  return {
    animalsList: store.animalsList,
    loading: store.loading,
    searchAnimals,
    updateAnimals
  };

};
