import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem(userName, password);

        navigate("/Profile", {
            state : {
                username: userName
            }
        });
    }
     
    return (
        
        <div className="login-main-div">
            <h1>Welcome to NSSC</h1>
            <p>Kindly login</p>
            <div className="login-form-div">
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input 
                        type="text"
                        required
                        value = {userName}
                        onChange = {(e) => setUserName(e.target.value)}
                    />
                    <label>Password</label>
                    <input 
                        type="password"
                        required
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}
 
export default Login;