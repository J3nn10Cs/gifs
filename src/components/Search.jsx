import React, { useState } from 'react'

export default function Search({onNewValue}) {

  const [inputValue, setInputValue] = useState('')

  //resivimos el evento
  const onChange = e => {
    setInputValue(e.target.value)
    // console.log(e.target.value)
  }

  const onSubmit = event => {
    event.preventDefault()

    //eliminar los espacios de la derecha - izquierda
    if(inputValue.trim().length <= 1) return

    //pasamos lo que estamos escribiendo
    onNewValue(inputValue.trim())

    //limpiamos la caja de texto
    setInputValue('')

  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white border-2 border-gray-500 rounded-2xl"
    >
      <input 
        type="text"
        placeholder="Buscar gift"
        className="p-1.5 w-full"
        value={inputValue}
        onChange={onChange}
      />
    </form>
  )
}
