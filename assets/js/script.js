const form = document.querySelector('.formulario')

function handleSubmit(event) {
  event.preventDefault()
  
  const email = form.email
  const senha = form.password

  if (!email.value) {
    email.nextElementSibling.innerText = 'Por favor, insira um email válido.'
    return
  } else {
    email.nextElementSibling.innerText = ''
  }

  if (!senha.value) {
    senha.nextElementSibling.innerText = 'Por favor, insira uma senha.'
    return
  } else {
    senha.nextElementSibling.innerText = ''
  }

  if (senha.value && email.value) {
    senha.value = ''
    email.value = ''
  }
}

form.addEventListener('submit', handleSubmit)