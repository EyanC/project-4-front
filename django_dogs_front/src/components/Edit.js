import React, { useState } from 'react'


const Edit = (props) => {
    const [pet, setPet] = useState({ ...props.pet })


    const handleChange = (event) => {
        setPet({ ...pet, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(pet)
    }


    return (
        <div>
            <details>
                <summary>Edit</summary>
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
                    <label htmlFor="breed">Breed: </label>
                    <input
                        type="text"
                        name="breed"
                        onChange={handleChange}
                        value={pet.breed}
                    />
                    <br />
                    <br />
                    <label htmlFor="gender">gender: </label>
                    <input
                        type="text"
                        name="gender"
                        onChange={handleChange}
                        value={pet.gender}
                    />
                    <br />
                    <br />
                    <label htmlFor="color">Color: </label>
                    <input
                        type="text"
                        name="color"
                        onChange={handleChange}
                        value={pet.color}
                    />
                    <br />
                    <br />
                    <label htmlFor="size">Size: </label>
                    <input
                        type="text"
                        name="size"
                        onChange={handleChange}
                        value={pet.size}
                    />
                    <br />
                    <br />
                    <label htmlFor="age">Age: </label>
                    <input
                        type="text"
                        name="age"
                        onChange={handleChange}
                        value={pet.age}
                    />
                    <br />
                    <br />
                    <label htmlFor="description">Description: </label>
                    <input
                        type="text"
                        name="description"
                        onChange={handleChange}
                        value={pet.description}

                    />
                    <br />
                    <br />
                    <label htmlFor="image_url">image: </label>
                    <input
                        type="text"
                        name="image_url"
                        onChange={handleChange}
                        value={pet.image_url}
                    />
                    <input type="submit" />
                </form>
            </details>
        </div>
    )
}

export default Edit

// import React, { useState } from 'react'
// const Edit = (props) => {
//   const [pet, setPet] = useState({...props.pet})
//   const handleChange = (event) => {
//     setPet({ ...pet, [event.target.name]: event.target.value})
//   }
//   const handleSubmit = (event) => {
//     event.preventDefault()
//     props.handleUpdate(pet)
//   }
//   return (
//     <>
//       <details>
//         <summary>Edit pet</summary>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name: </label>
//           <input
//             type="text"
//             name="name"
//             value={pet.name}
//             onChange={handleChange}
//           />
//           <br />
//           <br />
//           <label htmlFor="age">Age: </label>
//           <input
//             type="number"
//             name="age"
//             value={pet.age}
//             onChange={handleChange}
//           />
//           <input type="submit" />
//         </form>
//       </details>
//     </>
//   )
// }
// export default Edit