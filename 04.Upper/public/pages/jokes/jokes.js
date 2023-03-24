fetch("https://api.chucknorris.io/jokes/random").then((response) => response.json())
.then((result) => {
  document.getElementById("chuck").innerText =  result.value;
}, setTimeout(() => {
    document.location.reload();
  }, 15000));