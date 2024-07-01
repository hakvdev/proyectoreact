import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Other from './pages/Other'
import Proyects from './pages/Proyects'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/other' element={<Other />} />
        <Route path='/proyects' element={<Proyects />} />
      </Routes>
    </Router>
  )
}

export default App
