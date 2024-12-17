function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(regex.test(email) ? 'The email address is valid' : 'The email address is not valid');
}

validateEmail('abc123@gmail.com');
validateEmail('hello@com');
