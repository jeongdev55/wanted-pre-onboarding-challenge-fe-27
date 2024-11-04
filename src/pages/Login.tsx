import { useState,  } from 'react';
import {login} from "../apis/authApi.ts";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLoginButtonClick = async ()=>{
        try {
            await login({ email, password });
            alert("로그인을 성공! todolist를 작성해보세요.");
            navigate('/home');
        }catch (err){
            console.error(err);
        }
    }
    return(
        <>
            <h1>login page</h1>
            <section>
                <label htmlFor="email">이메일: </label>
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </section>
            <section>
                <label htmlFor="password">패스워드: </label>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            </section>
            <section>
                <button onClick={handleLoginButtonClick}>로그인</button>
                <button onClick={() => navigate('/signup')}>회원가입</button>
            </section>
        </>
    )
}

export default Login;