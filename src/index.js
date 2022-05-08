function getAPI(url) {
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  return request.responseText
}

function criarRoupa(id) {

  
}

function main() {
  console.log(getAPI("http://localhost:5000/products"))
}
