import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import GamePage from './pages/GamePage'
import SearchPage from './pages/SearchPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/games" element={<GamePage />} />
      </Routes>
    </Router>
  )
}

export default App
