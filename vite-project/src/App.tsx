import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mynavbar from "./components/Mynavbar";
import Mainpage from "./components/Mainpage";
import Detailsarticle from "./components/Detailsarticle";


function App() {
  return(
    <BrowserRouter>
      <Mynavbar/>
      <Routes>
        <Route path="/" element={<Mainpage />}/>
        <Route path="/article/:dynamicId" element={<Detailsarticle/>}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
