import {login, register, get, logout} from '../services/auth.api'
import { useContext } from 'react'
import { AuthContext } from '../auth.context'
import { useEffect } from 'react'

export const useAuth = () => {
    const context  = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context;

    async function handleRegister(username, email, password) {
        setLoading(true)
        const data = await register(username, email, password)
        setUser(data.user)
        setLoading(false)
    }
    async function handleLogin(username, email, password) {
        setLoading(true)
        const data = await login(username, email, password)
        setUser(data.user)
        setLoading(false)
    }

    async function handleget() {
        setLoading(true)
        const data = await get()
        setUser(data.user)
        setLoading(false)
    }

    async function handleLogout() {
        setLoading(true)
        const data = await logout()
        setUser(null)
        setLoading(false)
    }

   useEffect(() => {
  const token = document.cookie;

  if (!token) return;

  get();
}, []);

    return( {user, setUser, loading, setLoading, handleRegister, handleLogin, handleget, handleLogout})
}


