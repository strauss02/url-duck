import './style.css'
import axios from 'axios'
const baseURL = 'http://localhost:3000'
// TODO: DECIDE BASE URL BASED ON ENV

const inputField = document.getElementById('url_input')
const submitBtn = document.getElementById('submit-btn')
const newUrlField = document.querySelector('h3')
const copyButton = document.getElementById('btn-copy-url')
const alertBox = document.getElementById('alert-box')

copyButton.addEventListener('click', handleCopy)
submitBtn.addEventListener('click', handleSubmit)

async function handleSubmit(e) {
  try {
    const inputURL = inputField.value
    assertUrlFilled(inputURL)
    console.log(inputURL)
    const newURL = await axios
      .post(`${baseURL}/`, { userURL: inputURL })
      .then((res) => {
        console.log(res.data)
        return res.data
      })

    // REPLACE BEFORE DEPLOYMENT
    newUrlField.innerText = `${baseURL}/${newURL}`
    displayAlert('Success! Try out your new URL now!')
  } catch (error) {
    displayAlert(error.response ? error.response.data : error)
  }
}

function handleCopy() {
  navigator.clipboard.writeText(newUrlField.innerText)
}

function assertUrlFilled(url) {
  if (!url) {
    throw new Error('Huh? Theres nothing to convert here...')
  }
}

function displayAlert(message) {
  alertBox.innerText = message
}
