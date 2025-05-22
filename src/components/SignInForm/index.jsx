import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import SubmitButton from '../SubmitButton';
import Input from '../Input';
import { ValidateSchemaSignIn } from './ValidateSchemaSignIn';

const SignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(ValidateSchemaSignIn)
    });

    const onSubmit = async () => {};

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input
                    type='email'
                    placeholder='your@email.com'
                    label='Email'
                    id='email'
                    register={register('email')}
                    error={errors.email?.message}
                />
                <Input
                    type='password'
                    placeholder='Password'
                    label='Password'
                    id='password'
                    register={register('password')}
                    error={errors.password?.message}
                />
            </div>
            <SubmitButton>Login</SubmitButton>
        </form>
    );
};

export default SignInForm;
