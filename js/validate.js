const submitButton = document.querySelector('.formcontato__botao');
const inputs = document.querySelectorAll('#nome, #email, #assunto, #mensagem');
const textArea = document.querySelector('.formcontato__textarea');
submitButton.disabled = true;

inputs.forEach(input => {
    input.addEventListener('blur', e => {
        if(!e.target.validity.valid) {
            e.target.style.borderBottom = "1px solid red";
            e.target.parentElement.querySelector('.input-mensagem-erro').style.display = 'block';
            e.target.parentElement.querySelector('.input-mensagem-erro').innerHTML = `o campo ${e.target.id} não é válido.`;
        }else {
            e.target.parentElement.querySelector('.input-mensagem-erro').innerHTML = ``;
            e.target.style.borderColor = "#2A7AE4";
        }
    });


    function checkInputs(inputs) {
        let preenchidos = true;
        
        inputs.forEach(input => {
            if(input.value === "") {
                preenchidos = false;
            }
        });
        return preenchidos;
    }

    inputs.forEach(input => {
        input.addEventListener("keyup", () => {
            if(checkInputs(inputs)) {
                submitButton.disabled = false;
            } else {
                submitButton.disabled = true;
            }
        });
    });
})
