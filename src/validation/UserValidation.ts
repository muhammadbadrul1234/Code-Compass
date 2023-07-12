export default function Validation(values) {
    let errors = {};
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!values.email) {
        errors.email = "Email is required";
    }
    else if (!emailRegex.test(values.email)) {
        errors.email = "Email is invalid";
    }
}