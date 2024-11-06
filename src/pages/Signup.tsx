import { useState } from "react";
import { signup } from "../apis/authApi.ts";
import { useNavigate } from "react-router-dom";
import AuthForm from "@/components/auth/AuthForm.tsx";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const hendleSignupButtonClick = async () => {
    try {
      await signup({ email, password });
      alert("회원가입 되었습니다. 로그인을 해주세요");
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Eamil"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={hendleSignupButtonClick}>SignUp</button>
    </div>
  );
};

export default Signup;
