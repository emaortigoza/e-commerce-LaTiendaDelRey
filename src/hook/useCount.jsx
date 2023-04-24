import { useState } from 'react'

export const useCount = (initial= 0, min, max) => {
  const [count, setCount] = useState(initial)
  let handleSumar = () =>{
    if (count < max) {
        setCount(count + 1)
    }
  }
  let handleRestar = () =>{
    if (count > min) {
        setCount(count - 1)
    }
  }
  return {count, handleRestar, handleSumar}
}
