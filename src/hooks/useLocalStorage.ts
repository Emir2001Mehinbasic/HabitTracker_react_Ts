import { useEffect, useState } from "react"

export const useLocalStorage = <T>(key:string , initialValue : T)=>{
   const [storedValue, setStoredValue] = useState<T>(() => {
    try {
    const item = localStorage.getItem(key)

    if(item == null) return initialValue;

    return JSON.parse(item) as T
    }
    catch{
        return initialValue
    }
    
        
   })
   useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(storedValue))


   },[storedValue,key])

   return [storedValue,setStoredValue] as const

}
