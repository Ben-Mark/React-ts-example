// ** React Imports
import { useEffect, useRef } from 'react';

// ** Store Imports
import { setUser, UserState, UserType } from "../state/user";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "@/store";



export const useUser = (): { user: UserType, updateUser: any } => {

  const componentJustMounted = useRef(true)

  const dispatch = useDispatch()
  const store = useSelector((state: RootState) => state.user)


  const updateUser = (payload: any) => {
    dispatch(setUser({
      email: payload
    }))
  }


  useEffect(() => {

    if(!componentJustMounted){
      return
    }

    componentJustMounted.current = false;


  },[])



  return {
    user: store.user,
    updateUser
  }

}
