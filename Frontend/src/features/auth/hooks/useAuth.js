import {login, register, getUser, logout} from '../services/auth.api'
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

    async function handlegetUser() {
        setLoading(true)
        const data = await getUser()
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
        handlegetUser()
    }, [])

    return {user, setUser, loading, setLoading, handleRegister, handleLogin, handlegetUser, handleLogout}
}


