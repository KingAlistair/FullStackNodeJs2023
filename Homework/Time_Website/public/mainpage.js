console.log("hello");


fetch("/api/time")
  .then((response) => response.json())
  .then((result) => {
    console.log(result)
    const cityWrapperDiv = document.getElementById("cities-wrapper");
    result.data.forEach(element => {

      const cityDiv = document.createElement("div");
      const cityName = document.createElement("h3");
      const cityDate = document.createElement("p");
      cityName.innerText = element.name;
      cityDate.innerText = element.date;
      cityDiv.appendChild(cityName);
      cityDiv.appendChild(cityDate);
      cityWrapperDiv.appendChild(cityDiv);

    });

  });