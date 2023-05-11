import { toast } from "react-hot-toast"

const usernameValidate = (values,error)=>{
   
    if(!values.password)
    {
        error = toast.error("Password Can't be empty..!!")
    }
    if(!values.username)
    {
        error = toast.error("Username Can't be empty..!!")
    }
    return error;
}

const usernameCheck = (values)=>{
    return usernameValidate(values,'');
}

const Validations = {
    usernameCheck:usernameCheck
}

export default Validations;