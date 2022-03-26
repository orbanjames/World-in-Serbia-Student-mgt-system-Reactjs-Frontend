
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import { ListStudentComponent } from "./components/ListStudentComponent";
import AddStudentComponent from "./components/AddStudentComponent";
import ViewStudentComponent from './components/ViewStudentComponent';
import { ListUniversitiesComponent } from "./components/ListUniversitiesComponent";
import AddUniversityComponent from "./components/AddUniversityComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListStudentComponent />}></Route>
            <Route path="/students" element={<ListStudentComponent />}></Route>{" "}
            <Route path="/universities" element={<ListUniversitiesComponent />}></Route>{" "}
            <Route path="/add-student" element={<AddStudentComponent />}></Route>
            <Route path="/edit-student/:id" element={<AddStudentComponent />}></Route>
            <Route path="/add-university" element={<AddUniversityComponent />}></Route>
            <Route path="/edit-university/:id" element={<AddUniversityComponent />}></Route>
            <Route path="/view-student/:id" element={<ViewStudentComponent />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
