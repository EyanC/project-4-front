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
    axios
      .delete('http://localhost:8000/api/dog/' + event.target.value)
      .then((response) => {
        getDog()
      })
  }
  
  const handleUpdate = (editDog) => {
    console.log(editDog)
    axios
      .put('http://localhost:8000/api/dog/' + editDog.id, editDog)
      .then((response) => {
        getDog()
      })
  }
  
  

  useEffect(() => {
    getDog()
  }, [])



  return (
    <>
    <nav className="container-fluid card text-center m-2 p-2">Show Dogs</nav>
    <div className=' m-2 bg-light d-flex text-center container-fluid w-25 '>
    <Add handleCreate={handleCreate} />
    </div>
      <div className=" dog container-fluid w-100 row ">
        {dog.map((pet) => {
          return (
            <div className=" pet bg-light card text-center m-2 p-5" key={pet.id}>
              <div className = 'card m-1 '>
              <img src= {pet.image_url}/>
              </div>
              <h4>Name: {pet.name}</h4>
              <h5>Breed: {pet.breed}</h5>
              <h5>Age: {pet.age}</h5>
              <h5>Gender: {pet.gender}</h5>
              <h5>Color: {pet.color}</h5>
              <h5>Size: {pet.size}</h5>
              <h5>Description: {pet.description}</h5>
              <div className='text-center'>
              <button className='btn btn-success w-100' ><Edit handleUpdate={handleUpdate} id={pet.id} pet={pet} /></button>
              <button className='btn btn-danger w-25' onClick={handleDelete} value={pet.id}>
              Delete
             </button>
             </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App

