import './styles.scss';

const SubmitButton = ({ children }) => {
    return (
        <button className='submitButton' type='submit'>
            {children}
        </button>
    );
};

export default SubmitButton;
