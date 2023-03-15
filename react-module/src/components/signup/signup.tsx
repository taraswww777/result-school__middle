interface SignupProps {
    onSubmit: Function
}

export const Signup = ({onSubmit}: SignupProps) => {
    return (
        <div>
            <form onSubmit={() => onSubmit()}>
                Signup
            </form>
        </div>
    )
}