export function fetchData (url: string, callback: Function) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(err => console.log(err))
}
