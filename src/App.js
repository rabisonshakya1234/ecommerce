import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Backgroundimg from "./Components/Backgroundimg";
import "./index.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer";
import 'animate.css';
function App() {
  return (
    <div className="App">
      <>
        <Header/>
        {/* <Blog/> */}
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/blog' element={<Blog/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
        </BrowserRouter>
     
      
      </>
      <>
        <Footer />
      </>
    </div>
  );
}

export default App;
