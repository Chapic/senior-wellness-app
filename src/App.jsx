import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Rutinas from './Pages/Rutinas'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="rutinas" element={<Rutinas />} />
      </Route>
    </Routes>
  )
}

export default App
