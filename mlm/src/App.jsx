import { BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import Homepage from "./Pages/Home";
import Videos from "./Components/Videos";
import Nav from './Components/Nav';
import Homepg from "./Pages/Homepage";
let App=()=>{
    return(
        <div>
        <BrowserRouter>

         <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path='/homepage' element={<Homepg/>}/>
       </Routes>
      

       </BrowserRouter>
    
        </div>      
    )
}
export default App