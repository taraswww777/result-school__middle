import S from './signup.module.css';
import {useState} from "react";

interface SignupProps {
    onSubmit: Function
}

enum SEX {
    M = 'M',
    F = 'F',
}

interface FormState {
    name: string
    nickname: string
    email: string,
    sex: SEX
}

export const Signup = ({onSubmit}: SignupProps) => {
    const [inputs, setInputs] = useState<Partial<FormState>>({sex: SEX.M});
    const onChange = (e: any) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className={S.signup}>
            <p>
                inputs:<br/>
                {JSON.stringify(inputs)}
            </p>
            <form onSubmit={() => onSubmit()} onChange={onChange}>
                <div>
                    <label>
                        Имя
                        <input type="text" name="name" value={inputs?.name}/>
                    </label>
                </div>
                <div>
                    <label>
                        Ник
                        <input type="text" name="nickname" value={inputs?.nickname}/>
                    </label>
                </div>
                <div>
                    <label>Почта
                        <input type="email" name="email" value={inputs?.email}/>
                    </label>
                </div>
                <div>
                    Пол
                    <label> M <input
                        type="radio"
                        name="sex"
                        value={SEX.M}
                    /></label>
                    <label> F <input
                        type="radio"
                        name="sex"
                        value={SEX.F}
                    /></label>
                </div>
                <div>
                    <label>Пароль
                        <input type="password" name="password"/>
                    </label>
                </div>
                <div>
                    <label>Повторить пароль
                        <input type="password" name="confirmPassword"/>
                    </label>
                </div>
                <div>
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}