
import { HomePage, FilmsPage } from "./pages/index";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Take Me Home</NavLink>
        </li>
        <li><NavLink to="/films">Go to Films</NavLink>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App