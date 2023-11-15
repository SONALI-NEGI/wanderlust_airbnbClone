let taxSwitch = document.getElementById("flexSwitchCheckDefault");

taxSwitch.addEventListener("click", () => {
  let taxInfo = document.getElementsByClassName("tax-info");
  let priceInfo = document.getElementsByClassName("price-info");
  for (info of taxInfo) {
    if (info.style.display != "inline") {
      info.style.display = "inline";
    } else {
      info.style.display = "none";
    }
  }

  for (price of priceInfo) {
    if (price.style.display != "none") {
      price.style.display = "none";
    } else {
      price.style.display = "inline";
    }
  }
});

// filters

let filters = document.querySelectorAll(".filter");

filters.forEach((filter) => {
  filter.addEventListener("click", async () => {
    let category = filter.getAttribute("data-category");
    console.log(category);
  });
});
