import React, { useState, useContext } from 'react';
import { UserContext } from "../context/UserContextProvider"; // ✅ named import

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext); // ✅ using useContext correctly

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username });
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username'
            />
            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password'
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
