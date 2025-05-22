import { NavLink } from 'react-router-dom';
import SignInForm from '../../components/SignInForm';

const SignIn = () => {
    return (
        <>
            <SignInForm />
            <NavLink to='/signup'>Register</NavLink>
        </>
    );
};

export default SignIn;
