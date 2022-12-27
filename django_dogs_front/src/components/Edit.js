import React, { useState } from 'react'

const Edit = (props) => {
  const [pet, setPet] = useState({...props.pet})


  const handleChange = (event) => {
    setPet({ ...pet, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(pet)
  }

  return (
    <>
      <details>
        <summary>Edit pet</summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={pet.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            name="age"
            value={pet.age}
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </details>
    </>
  )
}

export default Edit