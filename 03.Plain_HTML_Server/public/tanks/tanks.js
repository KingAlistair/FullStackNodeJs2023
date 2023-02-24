

const url = "http://localhost:8080/tanks/";

console.log("hello");


fetch("/api/tanks")
  .then((response) => response.json())
  .then((result) => {
    console.log(result)
    const tanksWrapperDiv = document.querySelector("tanks-wrapper");
    result.data.forEach(tank => {

      const tankDiv = document.createElement("div");
      const tankName = document.createElement("p");
      tankName.innerText = tank.name;

      tankDiv.appendChild(tankName);
      tanksWrapperDiv.appendChild(tankDiv);

    });

  });