import { signup } from "../apis/authApi.ts";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/auth/AuthForm.tsx";
import {FieldValues} from "react-hook-form";


const Signup = () => {
    const navigate = useNavigate();

    const handleSignupSubmit = async (data: FieldValues) => {
        const {email, password} = data as { email: string; password: string };
        try {
            await signup({email, password});
            alert("회원가입 되었습니다. 로그인을 해주세요");
            navigate("/login");
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <>
        <div>
            <AuthForm onSubmit={handleSignupSubmit} submitText="Sign Up"/>
        </div>
        </>
    );
};

export default Signup;
