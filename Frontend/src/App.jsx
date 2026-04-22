import {RouterProvider} from 'react-router'
import router from './app.routes'
import './shared/style/global.scss'
import { AuthProvider } from './context/AuthContext'

function App() {
  

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
