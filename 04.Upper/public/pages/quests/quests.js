function fetchQuest(activityQueryString="") {
  fetch("https://www.boredapi.com/api/activity"+ activityQueryString)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);

    const quest = document.getElementById("quest");
    quest.innerText = result.activity;
  })
};


const activityButton = document.getElementById("activities-button");

function getNewQuest() {
  const dropdown = document.getElementById("activities-dropdown")
  fetchQuest(`?type=${dropdown.value}`);
};


activityButton.addEventListener("click", getNewQuest
);

