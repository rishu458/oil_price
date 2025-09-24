function getPrice() {
  fetch("/api/price/")  // Call Django backend
    .then(response => response.json())
    .then(data => {
      let price = data.price.toFixed(2); // from backend
      let time = data.time;              // from backend

      // Update current price
      document.getElementById("price").textContent = `$ ${price}`;

      // Add to history
      let historyList = document.getElementById("history-list");

      if (historyList.children[0]?.textContent === "No history yet...") {
        historyList.innerHTML = "";
      }

      let li = document.createElement("li");
      li.textContent = `${time} - $ ${price}`;
      historyList.prepend(li);
    })
    .catch(error => console.error("Error fetching price:", error));
}
