import './styles.scss';

const Input = (props) => {
    const { type, placeholder, label, error, register, id } = props;

    return (
        <div className='inputContainer'>
            <label htmlFor={id}>{label}</label>
            <input id={id} placeholder={placeholder} type={type} {...register} />
            {error && <span>{error}</span>}
        </div>
    );
};

export default Input;
