import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Sidebar } from '../components/ui/Sidebar'
import NotFound from './NotFound'
import Home from './Home'
import Products from './Products'
import Categories from './Categories'
import Orders from './Orders'
import Settings from './Settings'
import Users from './Users'
import { Navbar } from '../components/ui/Navbar'

export default function Dashboard() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="d-flex flex-nowrap vh-100">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
