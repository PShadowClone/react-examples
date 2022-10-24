import FormFields from "./fields";
import React from "react";
import ValidationError from "../../components/validation-error";
import {useForm} from "./actions";

const FormBuilder = () => {
    let builder = FormFields;
    let _formFields = {}
    /**
     * extract form fields from the builder
     * @author Amr
     */
    FormFields.forEach(el => {
        _formFields[el.name] = el.attributes?.value ?? '';
    })

    /**
     * use the useForm custom hook to handle the operations
     * of forms
     * @author Amr
     */
    const {form, setValue, validator, submit} = useForm(_formFields)

    return (
        <form onSubmit={submit}>
            {
                builder.map(el => {
                    return <div key={`form-${el.name}`}>
                        <label htmlFor={el.name}>{el.name}</label>
                        {React.createElement(el.component , { ...el.attributes,onChange : (event)=> setValue(event , el.name)})}
                        {
                            validator[el.name] &&
                            <ValidationError message={validator[el.name]}/>
                        }
                    </div>
                })
            }
            <input type="submit" name='submit'/>
        </form>
    )
}
export default FormBuilder;

