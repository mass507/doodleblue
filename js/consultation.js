function submitForm() {
    const fields = ['firstname', 'lastname', 'email', 'subject', 'plan', 'number', 'message']
    fields.forEach((field) => {
        document.getElementById(field).style.borderColor = document.getElementById(field).value === '' ? 'red' : null
        
    })
}

function validatefield(e) {
    if (!document.getElementById(e.target.attributes.id.value).value) {
        document.getElementById(e.target.attributes.id.value).style.borderColor = 'red'
        const errorMsg = document.createElement('div')
        errorMsg.className = "error-msg"
        errorMsg.innerHTML = `${e.target.attributes.id.value} required`
        document.getElementById(`${e.target.attributes.id.value}-form`).appendChild(errorMsg)
    }
    else {
        document.getElementById(e.target.attributes.id.value).style.borderColor = null
        const currentDiv = document.getElementById(`${e.target.attributes.id.value}-form`)
        currentDiv.getElementsByClassName("error-msg")[0] ? currentDiv.removeChild(currentDiv.getElementsByClassName("error-msg")[0]) : null
    }

}
