import React, { useState} from 'react'

const Add = (props) => {

  let createPet = { 
    breed: '', 
    gender: '',
    color: '',
    size: '',
    age: '',
    description: '',
    image_url: ''
    }

  const [pet, setPet] = useState(createPet)

  const handleChange = (e) => {
    setPet({ ...pet, [e.target.breed]: e.target.value })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleCreate(pet)
  }
  


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="breed">Breed: </label>
        <input type="text" name="breed" placeholder='what breed is your dog' onChange={handleChange}/>
        
        <br />
        <br />
        <label htmlFor="gender">Gender: </label>
        <input type="text" name="gender" placeholder='add gender' onChange={handleChange}/>
        
        <br />
        <br />
        <label htmlFor="color">Color: </label>
        <input type="text" name="color" placeholder='what color is your dog' onChange={handleChange}/>
        
        <br />
        <br />
        <label htmlFor="size">Size: </label>
        <input type="text" name="size" placeholder='what size is your dog' onChange={handleChange}/>
        
        <br />
        <br />
        <label htmlFor="age">Age: </label>
        <input type="number" name="age" placeholder='how old is your pet' onChange={handleChange}/>
        
        <br />
        <br />
        <label htmlFor="description">Description: </label>
        <input type="text" name="description" placeholder='please describre your doggo' onChange={handleChange}/>
        
        <br />
        <br />
        <label htmlFor="image_url">Image: </label>
        <input type="text" name="image" placeholder='we want pictures' onChange={handleChange}/>
        <br />
        <br />
        <input type="submit"/>
      </form>
    </>
  )
}

export default Add