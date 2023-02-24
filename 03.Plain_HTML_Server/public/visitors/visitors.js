

fetch("/api/visitors")
  .then((response) => response.json())
  .then((result) => {
    updateVisitorcount(result.data);


  });

function updateVisitorcount(visitorCount) {
    const visitorCountDiv = document.getElementById("visitor-count");
    visitorCountDiv.innerText = visitorCount;
}


function writeInVisitorLog() {
    fetch("/api/visitors", {
        method: "PUT",
        headers: {
            "Content-Type": "application.json"
        }
    }).then(response => response.json()).then(result => updateVisitorcount(result.data));
};

