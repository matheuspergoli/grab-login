const form = document.querySelector('.formulario')

function handleSubmit(event) {
  event.preventDefault()
  
  const email = form.email
  const senha = form.password

  if (!email.value) {
    email.classList.add('invalido')
    email.nextElementSibling.innerText = 'Por favor, insira um email válido.'
    return
  } else {
    email.classList.remove('invalido')
    email.nextElementSibling.innerText = ''
  }

  if (!senha.value) {
    senha.classList.add('invalido')
    senha.nextElementSibling.innerText = 'Por favor, insira uma senha.'
    return
  } else {
    senha.classList.remove('invalido')
    senha.nextElementSibling.innerText = ''
  }

  if (senha.value && email.value) {
    senha.value = ''
    email.value = ''
  }
}

form.addEventListener('submit', handleSubmit)