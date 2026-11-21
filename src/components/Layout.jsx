import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Loading from './Loading'

function Layout() {
  return (
    <div className="layout">
      <Header />
      <div className="body">
        <Sidebar />
        <main className="content">
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
