import HomePage from './components/HomePage'
import FilmsPage from './components/FilmsPage'
import './App.css'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
          <a href="#">Home</a>
          </li>
          <li>
          <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <HomePage />
      <FilmsPage />
    </>
  )
}

export default App
