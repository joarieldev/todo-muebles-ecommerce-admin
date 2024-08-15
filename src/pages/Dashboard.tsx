import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Sidebar } from '../components/ui/Sidebar'
import NotFound from './NotFound'
import Home from './Home'

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
