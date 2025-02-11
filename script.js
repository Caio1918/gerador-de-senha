function randCharMin() {
    let num = Math.floor(Math.random() * 26) + 97
    return String.fromCharCode(num)
}

function randCharMai() {
    let num = Math.floor(Math.random() * 26) + 65
    return String.fromCharCode(num)
}

function choiceTri() {
    return Math.floor(Math.random() * 3)
}


function gerarSenha() {
    let charMin = parseInt(document.getElementById('charMin').value) 
    let charMai = parseInt(document.getElementById('charMai').value)
    let num = parseInt(document.getElementById('num').value)
    const retorno = document.getElementById('senha')
    const mensagem = document.getElementById('mensagem')

    let tamanho = charMin + charMai + num
    let senha = []

    for (let i = 0; i < tamanho; i++) {
        let choice = choiceTri()

        if (choice == 0 && charMin > 0) {
            senha.push(randCharMin())
            charMin--
        } else if (choice == 1 && charMai > 0) {
            senha.push(randCharMai())
            charMai--
        } else if (choice == 2 && num > 0) {
            senha.push(Math.floor(Math.random() * 10))
            num--
        } else {
            i--
        }
    }

    mensagem.innerHTML = 'Aqui está a sua senha:'
    retorno.innerHTML = senha.join('')

    document.getElementById('btn-copiar').style.display = 'block'
        
    
}


function copiar() {
    const senha = document.getElementById('senha').innerText
    const feedback = document.getElementById('feedback')

    navigator.clipboard.writeText(senha)
        .then(() => {
            feedback.classList.remove('d-none')
            
            setTimeout(() => {
                feedback.classList.add('d-none')
            }, 3000)
        })

        .catch(() => {
            console.error(error)
        });

    
}

