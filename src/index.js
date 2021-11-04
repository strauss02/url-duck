import './style.scss'
import axios from 'axios'
const baseURL = 'http://localhost:3000'

const inputField = document.getElementById('url_input')
const submitBtn = document.getElementById('submit-btn')
const newUrlField = document.querySelector('h3')
const copyButton = document.getElementById('btn-copy-url')

copyButton.addEventListener('click', handleCopy)
submitBtn.addEventListener('click', handleSubmit)

async function handleSubmit(e) {
  const inputURL = inputField.value
  console.log(inputURL)
  const newURL = await axios
    .post(`${baseURL}/`, { userURL: inputURL })
    .then((res) => {
      console.log(res.data)
      return res.data
    })
  // REPLACE BEFORE DEPLOYMENT
  newUrlField.innerText = `${baseURL}/${newURL}`
}

function handleCopy() {
  navigator.clipboard.writeText(newUrlField.innerText)
}
