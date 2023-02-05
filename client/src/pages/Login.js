import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = () => {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } =  useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(userName, password)
    }

    return (
        <div>
            <form className="login" onSubmit={handleSubmit}>
            <h2>Log In</h2>

            <label>User Name: <br/></label>
            <input 
                type="username" 
                onChange={(e) => setUsername(e.target.value)} 
                value={userName} 
            />
            <label className="userInput"><br/>Password: <br/></label>
            <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                value={password} 
            />
            <br/>
            <button className="btnPassword" disabled={isLoading}><strong>Log in</strong></button>
            {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default Login