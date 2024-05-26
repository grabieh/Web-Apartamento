export const validateForm = ({email, contrasena}) => {
    if (!email || !contrasena) {
        setError('Both fields are required.');
        return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        setError('Please enter a valid email address.');
        return false;
    }
    return true;
};