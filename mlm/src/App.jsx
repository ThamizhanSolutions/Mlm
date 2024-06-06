import { BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import Homepage from "./Pages/Home";
import Videos from "./Components/Videos";
import Nav from './Components/Nav';
import Homepg from "./Pages/Homepage";
import Contact from './Components/Contact';
import Plans from "../src/Components/Plans"
import About from './Components/About';
let App=()=>{
    return(
        <div>
        <BrowserRouter>

         <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/plans' element={<Plans/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/homepage' element={<Homepg/>}/>
       </Routes>
      

       </BrowserRouter>
    
        </div>      
    )
}
export default App