let globalIsSubmitted = false

function validate(isSubmitted = false) {
    let fullName = document.getElementById('full-name').value
    let gender = document.getElementById('gender').value
    let hobbies1 = document.getElementById('swimming').checked
    let hobbies2 = document.getElementById('readingNovel').checked
    let hobbies3 = document.getElementById('dancing').checked
    let hobbies4 = document.getElementById('singing').checked
    let error = false

    if (isSubmitted) {
        ``
        globalIsSubmitted = true
    }


    if ((fullName.length >= 5) && (fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))) {
        document.getElementById('full-name-valid').style.display = 'block'
        document.getElementById('full-name-invalid').style.display = 'none'

    }
    else {
        document.getElementById('full-name-invalid').style.display = 'block'
        document.getElementById('full-name-valid').style.display = 'none'
        error = true
    }

    if (gender != 'None') {
        document.getElementById('gender-valid').style.display = 'block'
        document.getElementById('gender-invalid').style.display = 'none'
    } else {
        document.getElementById('gender-invalid').style.display = 'block'
        document.getElementById('gender-valid').style.display = 'none'
        error = true
    }

    if (hobbies1 || hobbies2 || hobbies3 || hobbies4) {
        document.getElementById('hobbies-valid').style.display = 'block'
        document.getElementById('hobbies-invalid').style.display = 'none'
    } else {
        document.getElementById('hobbies-invalid').style.display = 'block'
        document.getElementById('hobbies-valid').style.display = 'none'
        error = true
    }


    let alertMessage = `Hobbies of ${fullName} (${gender}) are `
    if (hobbies1) {
        alertMessage = alertMessage + 'Swimming  ';
    }
    if (hobbies2) {
        alertMessage = alertMessage + 'Reading novels  ';
    }
    if (hobbies3) {
        alertMessage = alertMessage + 'Dancing   ';
    }
    if (hobbies4) {
        alertMessage = alertMessage + 'Singing ';
    }

    if (!error && isSubmitted) {
        alert(alertMessage)
        document.getElementById("registration-form").reset();
        let validFeedback = document.getElementsByClassName("valid-feedback");
        for (i = 0; i < validFeedback.length; i++) {
            validFeedback[i].style.display = "none";
        }
        let invalidFeedback = document.getElementsByClassName("invalid-feedback");
        for (i = 0; i < invalidFeedback.length; i++) {
            invalidFeedback[i].style.display = "none";
        
        }  
     }
}
