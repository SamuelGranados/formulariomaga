import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
    return (
        <nav>
            <Link to="/Sobre" className='login'>Login</Link>
        </nav>
    )
}

export default Login