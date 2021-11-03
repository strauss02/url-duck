import './style.scss'
import axios from 'axios'
const baseURL = 'http://localhost:3000'

const inputField = document.getElementById('url_input')
const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener('click', handleSubmit)

function handleSubmit(e) {
  const inputURL = inputField.value
  console.log(inputURL)
  axios.post(`${baseURL}/`, { userURL: inputURL }).then((res) => {
    console.log(res)
  })
}
