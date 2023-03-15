const password = document.getElementById("password");
const cnf_password = document.getElementById("cnf_password");
const btn = document.getElementById("btn");

let checkPassword = () => {
    if (password.value == "") {
        alert("Please enter password");
    } else if (cnf_password.value == "") {
        alert("Please confirm the password");
    } else if (password.value != cnf_password.value) {
        alert("\nPassword did not match: Please try again...");

        return false;
    } else {
        alert(" login suscessfull ! 🥳");
        return true;
    }
};

btn.addEventListener("click", checkPassword);
