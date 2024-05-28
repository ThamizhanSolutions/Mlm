import Nav from "./Components/Nav";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./Pages/Home";
import Videos from "./Components/Videos";

let App=()=>{
    return(
        <div>
        <BrowserRouter>
        <Nav/>
         <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path="/videos" element={<Videos/>}/>
       
       </Routes>
       </BrowserRouter>
    
        </div>      
    )
}
export default App