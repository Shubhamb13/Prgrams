import * as yup from 'yup'

// const passwordRegex= new ReExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;


export let userSchema=yup.object({
    name:yup.string().min(3).required("Name is Required"),
    email:yup.string().email().required("Name is Required"),
    password:yup.string().matches(passwordRegex,"Enter valid password").min(3).max(10).required("PAssword is Required"),
    cpassword:yup.string().oneOf([yup.ref("password")],"password Does not Match").required("Cpassword"),
})