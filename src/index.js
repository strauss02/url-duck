import './style.scss'

const inputField = document.getElementById('url_input')
const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener('click', handleSubmit)
//fsdfsaa
function handleSubmit(e) {
  const inputURL = inputField.value
  console.log(inputURL)
}
