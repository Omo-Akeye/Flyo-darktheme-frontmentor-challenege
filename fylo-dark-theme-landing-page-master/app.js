const btn = document.querySelector('form button')

const input = document.querySelector('form input')
const error = document.getElementById('error')



btn.addEventListener('click', (e)=> {
  
  if (input.value === '') {
    error.style.display = 'block';
    e.preventDefault();
  }
})

