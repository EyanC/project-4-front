import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import Show from './components/Show'
import Login from './components/Login';

const App = () =>{
  const [dog, setDog] = useState([])

  return(
    <div>
      <>
        <BrowserRouter>
          
            <Routes>
              <Route path='/show' element={<Show dog={dog} setDog={setDog}/>}></Route>
              <Route path='/' element={<Login/>}></Route>
            </Routes>
          
        </BrowserRouter>
      </>
    </div>
  )
}

export default App