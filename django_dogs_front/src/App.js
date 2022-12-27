import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Add from './components/Add';
import Edit from './components/Edit';

const App = () => {

  let [dog, setDog] = useState([])

  const getDog = () => {
    axios
      .get('http://localhost:8000/api/dog')
      .then(
        (response) => setDog(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }

  const handleCreate = (addPet) => {
    axios
      .post('http://localhost:8000/api/dog', addPet)
      .then((response) => {
        console.log(response)
        getDog()
      })
  }

  const handleDelete = (event) => {
    axios.delete('http://localhost:8000/api/dog/' + event.target.value)
    .then((res) => {
      console.log(res.data)
      getDog()
    })
  }

  const handleUpdate = (editPet) => {
    axios.put('http://localhost:8000/api/dog/' + editPet.id, editPet)
    .then((res) => {
      console.log(editPet)
      getDog()
    })
  }

  

  useEffect(() => {
    getDog()
  }, [])



  return (
    <>
    <Add handleCreate={handleCreate} />
      <div className="dog">
        {dog.map((pet) => {
          return (
            <div className="pet" key={pet.id}>
              <h4>Name: {pet.image_url}</h4>
              <h5>Name: {pet.name}</h5>
              <h5>Breed: {pet.breed}</h5>
              <h5>Age: {pet.age}</h5>
              <Edit handleUpdate={handleUpdate} id={pet.id} pet={pet} />
              <button onClick={handleDelete} value={pet.id}>
                X
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App

