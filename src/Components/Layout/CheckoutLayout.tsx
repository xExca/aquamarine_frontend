import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const CheckoutLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  )
}

export default CheckoutLayout