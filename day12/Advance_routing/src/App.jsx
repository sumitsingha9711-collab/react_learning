import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Product from "./pages/Product"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Notfound from "./pages/Notfound"
import Men from "./pages/men"
import Women from "./pages/women"
import CoursesDetails from "./pages/CoursesDetails"
import Courses from "./pages/Courses"
import Kids from "./pages/Kids"
import Navbar2 from "./components/Navbar2"



const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Navbar2 />
        <Footer />
      </div>

      <div className=" flex justify-center h-screen text-white bg-black">
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/courses/:id' element={<CoursesDetails />} />
          <Route path='/courses' element={<Courses />} />

        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
        </Route>

          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
