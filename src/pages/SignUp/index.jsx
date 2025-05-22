import { NavLink } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm';

const SignUp = () => {
    return (
        <>
            <SignUpForm />
            <NavLink to='/'>Login</NavLink>
        </>
    );
};

export default SignUp;
