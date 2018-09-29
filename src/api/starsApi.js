import 'whatwg-fetch'
import getBaseUrl from './baseUrl'
import 'https'

const baseUrl = getBaseUrl()

export function getQuestions () {
  return get('questions')
}

export function getUsers () {
  return get('users')
}

export function getDashboard () {
  return get ('dashboard')
}

export function postRegistration (registrationData) {
  return post ('registerUser',registrationData)
}

function get (url) {
  return fetch(baseUrl + url).then(onSuccess, onError)
}

function post (url, data) {
  return fetch(baseUrl + url, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: data
  }).then(onSuccess, onError)
}

function onSuccess (response) {
  return response.text()
}

function onError (error) {
  console.log(error)
}
