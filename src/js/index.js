const botao = document.querySelector('.botao')

const inputs = document.querySelectorAll('.input')

const span = document.querySelectorAll('.obrigatorio')


botao.addEventListener('click', function () {
    console.log(inputs.value)
    //     inputs.forEach(input => input.value == '' || input.value == undefined ? input.style.border = '1px solid red' : input.style.border = '1px solid green')
    // })

    inputs.forEach((input, index) => {
        if (input.value == "" || input.value == undefined) {
            input.style.border = '1px solid red'
            span[index].classList.add('ativo')
        }
        else {
            input.style.border = '1px solid green'
            span[index].classList.remove('ativo')
        }

    })
})