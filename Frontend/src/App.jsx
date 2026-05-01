import { router } from "./app.routes"
import { RouterProvider } from "react-router"
import './shared/style/global.scss'
import { AuthProvider } from "./features/auth/auth.context"
import { SongContextProvider } from "./features/home/song.cotext"
function App() {

  return (
    <AuthProvider>
      <SongContextProvider>
        <RouterProvider router={router} />
      </SongContextProvider>
    </AuthProvider>
  )
}

export default App