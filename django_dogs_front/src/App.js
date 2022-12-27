import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Add from './components/Add';
import './App.css'

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
  

  useEffect(() => {
    getDog()
  }, [])



  return (
    <>
    <Add handleCreate={handleCreate} />
      <div className="dog">
        {dog.map((pet) => {
          return (
            <div className="pet container-fluid" key={pet.id}>
              <h4>Name: {pet.image_url}</h4>
              <h5>Age: {pet.breed}</h5>
              <h5>Age: {pet.age}</h5>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App

