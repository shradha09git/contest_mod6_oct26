
let globalIsSubmitted = false

function validate(isSubmitted = false) {
    let FullName = document.getElementById("full-name").value
    let Gender = document.getElementById("gender").value
    let Hobbies1 = document.getElementById("Dancing").checked
    let Hobbies2= document.getElementById("Singing").checked
    let Hobbies3 = document.getElementById("Swimming").checked
    let Hobbies4 = document.getElementById("ReadingNovels").checked
    let TnC = document.getElementById("TnC").checked
    let error = false


    if (isSubmitted) {
        globalIsSubmitted = true
    }

    if (globalIsSubmitted) {
        if (FullName.length >= 5 &&  FullName.includes(' ')>=1) {
            document.getElementById("full-name-valid").style.display = 'block'
            document.getElementById("full-name-invalid").style.display = 'none'
        } else {
            document.getElementById("full-name-invalid").style.display = 'block'
            document.getElementById("full-name-valid").style.display = 'none'
            error = true
        }
    if (Gender != 'None') {
            document.getElementById("gender-valid").style.display = 'block'
            document.getElementById("gender-invalid").style.display = 'none'
        } else {
            document.getElementById("gender-invalid").style.display = 'block'
            document.getElementById("gender-valid").style.display = 'none'
            error = true
        }
        
        if (Hobbies1 || Hobbies2 || Hobbies3 || Hobbies4     ) {
            document.getElementById("hobbies-invalid").style.display = 'none'
            document.getElementById("hobbies-valid").style.display = 'block'
        } else {
            document.getElementById("hobbies-invalid").style.display = 'block'
            document.getElementById("hobbies-valid").style.display = 'none'
            error = true
        }

        if (TnC) {
            document.getElementById("TnC-invalid").style.display = 'none'
        } else {
            document.getElementById("TnC-invalid").style.display = 'block'
            error = true
        }

        if (!error && isSubmitted) {
            var checkedValue=""; 
            var inputElements = document.getElementsByClassName('form-check-input');
            for(var i=0; inputElements[i]; ++i){
                  if(inputElements[i].checked){
                       checkedValue += inputElements[i].value;
                       checkedValue += " ";
                  }
            }
            alert("Hobies of "+FullName+" (" +Gender+") are "+checkedValue)

            document.getElementById('registration-form').reset()

            let validFeedbacks = document.getElementsByClassName('valid-feedback')
            for (let i = 0; i < validFeedbacks.length; i++) {
                validFeedbacks[i].style.display = 'none'
            }
            let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
            for (let i = 0; i < invalidFeedbacks.length; i++) {
                invalidFeedbacks[i].style.display = 'none'
            }
        }
    }
}