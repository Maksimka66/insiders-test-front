import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

const Form = ({children, onSubmit, schema }) => {
    
    const {
        register,
        handleSubmit,
        formState: { errors, isLoading }
    } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(schema)

    })

    return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
}

export default Form