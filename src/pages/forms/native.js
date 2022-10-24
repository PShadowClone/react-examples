import {useForm} from "./actions";
import ValidationError from "../../components/validation-error";

const FormExample = () => {
    /**
     * use the useForm custom hook to handle the operations
     * of forms
     * @author Amr
     */
    const {form, setValue,validator, submit} = useForm({
        username: '',
        name: '',
        email: '',
        phone: '',
        password: ''
    })
    /**
     * extract the attributes of form
     * @author Amr
     */
    const {username, name, email, phone, password} = form;

    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="username">UserName</label>
                    <input type="text" name='username' value={username}
                           onChange={setValue}
                    />
                    {
                        validator.username &&
                        <ValidationError message={validator.username}/>
                    }
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' value={name}
                           onChange={setValue}/>
                    {
                        validator.name &&
                        <ValidationError message={validator.name}/>
                    }
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' value={email}
                           onChange={setValue}/>
                    {
                        validator.email &&
                        <ValidationError message={validator.email}/>
                    }
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name='phone' value={phone}
                           onChange={setValue}/>
                    {
                        validator.phone &&
                        <ValidationError message={validator.phone}/>
                    }
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' value={password}
                           onChange={setValue}/>
                    {
                        validator.password &&
                        <ValidationError message={validator.password}/>
                    }
                </div>
                <input type="submit" name='submit'/>
            </form>
        </div>
    );
}
export default FormExample;