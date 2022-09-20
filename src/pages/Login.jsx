import { Link } from 'react-router-dom'
import Button from '../components/button'
const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <Link to="/">Back Home</Link>
            <Button text="Click Me">Click Me</Button>
        </div>
    );
}
export default Login;