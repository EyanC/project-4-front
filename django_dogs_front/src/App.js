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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9e74a78 (working)
    axios.delete('http://localhost:8000/api/dog/' + event.target.value)
    .then((res) => {
      console.log(res.data)
      getDog()
    })
<<<<<<< HEAD
  }

  const handleUpdate = (editPet) => {
    axios.put('http://localhost:8000/api/dog/' + editPet.id, editPet)
    .then((res) => {
      console.log(editPet)
      getDog()
    })
  }

=======
    axios
      .delete('http://localhost:8000/api/dog/' + event.target.value)
      .then((response) => {
        getDog()
      })
=======
>>>>>>> 9e74a78 (working)
  }

  const handleUpdate = (editPet) => {
    axios.put('http://localhost:8000/api/dog/' + editPet.id, editPet)
    .then((res) => {
      console.log(editPet)
      getDog()
    })
  }
<<<<<<< HEAD
  
>>>>>>> e5d9511 (Working Code and Routes)
=======

>>>>>>> 9e74a78 (working)
  

  useEffect(() => {
    getDog()
  }, [])



  return (
    <>
    <header>Show Dogs</header>
    <div className=' m-3 bg-light d-flex text-center container-fluid'>
    <Add handleCreate={handleCreate} />
    </div>
      <div className="dog container-fluid w+100">
        {dog.map((pet) => {
          return (
<<<<<<< HEAD
            <div className="pet" key={pet.id}>
              <h4>Name: {pet.image_url}</h4>
              <h5>Name: {pet.name}</h5>
              <h5>Breed: {pet.breed}</h5>
              <h5>Age: {pet.age}</h5>
              <Edit handleUpdate={handleUpdate} id={pet.id} pet={pet} />
              <button onClick={handleDelete} value={pet.id}>
                X
              </button>
=======
            <div className="pet bg-light card text-center m-300" key={pet.id}>
              <img src= {pet.image_url}/>
              <h4>Name: {pet.name}</h4>
              <h5>Breed: {pet.breed}</h5>
              <h5>Age: {pet.age}</h5>
              <Edit handleUpdate={handleUpdate} id={pet.id} pet={pet} />
              <button onClick={handleDelete} value={pet.id}>
                X
              </button>
              <h5>Gender: {pet.gender}</h5>
              <h5>Color: {pet.color}</h5>
              <h5>Size: {pet.size}</h5>
              <h5>Description: {pet.description}</h5>
              <button><Edit handleUpdate={handleUpdate} id={pet.id} pet={pet} /></button>
              <button onClick={handleDelete} value={pet.id}>
              Delete
             </button>
>>>>>>> e5d9511 (Working Code and Routes)
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App

