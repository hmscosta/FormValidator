const validateForm = () => {
    var name = document.forms["clientForm"]["clientName"].value;
    var surName = document.forms["clientForm"]["clientSurname"].value;
    var gender = document.forms["clientForm"]["clientGender"].value;
    var cellPhone = document.forms["clientForm"]["clientCellPhone"].value;
    var email = document.forms["clientForm"]["clientEmail"].value;
    alert("Name: " + name + "\n" +
    "Surname: " + surName + "\n" +
    "Gender: " + gender + "\n" +
    "Cellphone: " + cellPhone + "\n" +
    "E-mail: " + email + "\n" 
);
}