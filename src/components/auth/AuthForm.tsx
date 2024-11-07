import CustomButton from "../../components/common/Button";
import Input from "@/components/common/Input";
import Label from "@/components/common/Label";
import {useForm, FieldValues} from "react-hook-form";

interface AuthFormProps {
    onSubmit: (data: FieldValues) => void;
    submitText: string;
}

function AuthForm({onSubmit, submitText}: AuthFormProps) {
    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
    } = useForm();
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>{submitText}</label>
                </div>

                <input
                    type="text"
                    {...register("email", {
                        required: "이메일을 입력하세요.",
                        pattern: {
                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, // 이메일 형식 검사
                            message: "올바른 이메일 형식이 아닙니다.",
                        },
                    })}
                />
                {errors.email && (
                    <p style={{color: "red"}}> {errors.email.message}</p>
                )}
                <div>
                    <input
                        type="password"
                        {...register("password", {
                            required: "비밀번호를 입력해주세요.",
                        })}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <CustomButton type="submit">{submitText}</CustomButton>
            </form>
        </>
    );
}

export default AuthForm;