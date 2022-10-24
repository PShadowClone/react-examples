import {useState} from "react";

/**
 * (Custom Hook)
 * this custom hook handles all operations of the form
 * @param args
 * @returns {{form: {}, submit: submit, setValue: setValue}}
 * @author Amr
 */
export const useForm = (args = {}) => {
    /**
     * initialize the form
     */
    const [form, setForm] = useState(args);
    /**
     * validator object which contains the error messages
     * @author Amr
     */
    const [validator , setValidator] = useState({});

    /**
     * this function is used to handle the setter operations
     * for all form's elements
     *
     * @param attribute
     * @param value
     * @author Amr
     */
    const setValue = (event, field=null) => {
        const name = field ?? event?.target.name;
        const value = event?.target.value;
        try {
            // set form values by adding the existed values
            // in addition to adding the new one
            setForm({...form, [name]: value});
        } catch (e) {

        }
    }
    /**
     * validate the form's attributes
     * @returns {boolean}
     * @author Amr
     */
    const validation = ()=> {
        const _validator = {}
        // O(n) where n between 1 - 10
        for(let el in form){
            if(form[el] == null || form[el]?.trim() == '')
            {
                _validator[el] = `${el} is required`;
            }
        }
        setValidator({..._validator })
        return Object.keys(validator).length === 0;
    }
    /**
     * submit the form
     * @param event
     * @author Amr
     */
    const submit = event => {
        event.preventDefault();
         validation();
        console.log('form' , form)
    }

    return {form, setValue, validator, submit};
}