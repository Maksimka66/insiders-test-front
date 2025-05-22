import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import SubmitButton from '../SubmitButton';
import Input from '../Input';
import { ValidateSchemaSignUp } from './ValidateSchemaSignUp';

import './styles.scss';

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(ValidateSchemaSignUp)
    });

    const onSubmit = async () => {};

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input
                    type='text'
                    placeholder='Enter name'
                    label='Name'
                    error={errors.name?.message}
                    register={register('name')}
                    id='name'
                />
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
                    placeholder='Enter password'
                    label='Password'
                    id='password'
                    register={register('password')}
                    error={errors.password?.message}
                />
                <Input
                    type='password'
                    placeholder='Confirm password'
                    label='Confirm password'
                    id='confirmPassword'
                    register={register('confirmPassword')}
                    error={errors.password?.message}
                />
            </div>
            <SubmitButton>Register</SubmitButton>
        </form>
    );
};

export default SignUpForm;
