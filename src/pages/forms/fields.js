export default [
    {
        component: 'input',
        name: 'username',
        attributes: {}

    },
    {
        component: 'input',
        name: 'name',
        attributes: {}

    },
    {
        component: 'input',
        name: 'email',
        attributes: {
            type: 'email'
        }
    }, {
        component: 'input',
        name: 'phone',
        attributes: {
            type: 'number'
        }
    }, {
        component: 'input',
        name: 'password',
        attributes: {
            type: 'password'
        }
    },
    {
        component: 'input',
        name: 'dob',
        attributes: {
            type: 'text',
            style: {color:'red'},
            className: "form-control"
        },
        rules:{
            required : true
        }
    },
    {
        component: 'input',
        name: 'image',
        attributes: {
            type: 'file',
        },
        rules:{
            required : true
        }
    },

]