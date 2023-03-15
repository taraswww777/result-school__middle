import S from './signup.module.css';

interface SignupProps {
    onSubmit: Function
}

export const Signup = ({onSubmit}: SignupProps) => {
    return (
        <div className={S.signup}>
            <form onSubmit={() => onSubmit()}>
                <div>
                    <label>
                        Имя
                        <input type="text"/>
                    </label>
                </div>
                <div>
                    <label>
                        Ник
                        <input type="text"/>
                    </label>
                </div>
                <div>
                    <label>Почта
                        <input type="email"/>
                    </label>
                </div>
                <div>
                    Пол
                    <label> M <input type="radio" name="sex" value="M"/></label>
                    <label> F <input type="radio" name="sex" value="F"/></label>
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