import Nav from "./Components/Nav";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./Pages/Home";
let App=()=>{
    return(
        <div>
        <Nav/>
        <BrowserRouter>
       <Routes>
        <Route path='/' element={<Homepage/>}/>
       
       </Routes>
       </BrowserRouter>
    
        </div>      
    )
}
export default App