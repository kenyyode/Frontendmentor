const form = document.getElementById('form');
const inputs = document.querySelectorAll('input')
const message = document.getElementById("error-message")
const success = document.getElementById("success-wrapper");
const layoutContainer = document.getElementById("layout-container");
const cancel = document.getElementById("Dismiss")
const successLayout = document.getElementById("success-layout")

function HandleSubmit(e) {
    e.preventDefault()
    console.log(inputs)

    const data = {}

    for (const field of inputs) {
        if (field.checkValidity()) {

            data[field.name] = field.value
            console.table(data)
            layoutContainer.classList.toggle("hidden");
            // success.classList.toggle("active");
            successLayout.classList.toggle("active")
            console.log(success)
            console.log(successLayout)
            console.log(layoutContainer)


        }

    }
}

function HandleInputChange (e) {
    for (const field of inputs) {
        if(field.checkValidity()) {
            console.log("valid input")
        } else {
            message.innerHTML = "<small>Please provide a valid email </small>";
            field.style.border = "1px solid hsl(4, 100%, 67%)";
            field.style.backgroundColor = "1px solid hsl(4, 100%, 67%, 0.5)";
        }

    }
}


form.addEventListener("submit", HandleSubmit)
inputs.forEach(input => {
    input.addEventListener('change', HandleInputChange)
})

cancel.addEventListener("click", () => {
    layoutContainer.classList.toggle("hidden");
    successLayout.classList.toggle("active");

})