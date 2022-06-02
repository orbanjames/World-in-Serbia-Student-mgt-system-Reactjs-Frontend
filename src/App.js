import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddStudentComponent from './components/AddStudentComponent'
import ViewStudentComponent from './components/ViewStudentComponent'
import AddUniversityComponent from './components/AddUniversityComponent'
import { Navbar, Sidebar, Footer } from './components'
import {
  Home,
  About,
  Products,
  SingleProduct,
  Error,
  Cart,
  Checkout,
  Students,
  Faculties,
  Universities,
  PrivateRoute,
  AddStudents,
  AddFaculty,
  AddUniversity,
} from './pages'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />}></Route>
        <Route path='cart' element={<Cart />}></Route>
        <Route path='products' element={<Products />}></Route>
        <Route path='Products/:id' element={<SingleProduct />}></Route>
        <Route
          path='checkout'
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        ></Route>
        <Route path='students' element={<Students />}></Route>
        <Route path='/universities' element={<Universities />}></Route>
        <Route path='/faculties' element={<Faculties />}></Route>
        <Route path='/add-student' element={<AddStudents />}></Route>
        <Route
          path='/edit-student/:id'
          element={<AddStudentComponent />}
        ></Route>
        <Route path='/add-university' element={<AddUniversity />}></Route>
        <Route path='/add-faculty' element={<AddFaculty />}></Route>
        <Route
          path='/edit-university/:id'
          element={<AddUniversityComponent />}
        ></Route>
        <Route
          path='/view-student/:id'
          element={<ViewStudentComponent />}
        ></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
