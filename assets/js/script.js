const countrySelector1 = document.getElementById("countrySelector-1");
const countrySelector2 = document.getElementById("countrySelector-2");
const gmtTime1 = document.getElementById("gmtTime-1");
const gmtTime2 = document.getElementById("gmtTime-2");

countrySelector1.addEventListener("change", () => {
  const selectedCountry = countrySelector1.value;
  if (selectedCountry === "0") {
    gmtTime1.textContent = "";
    return;
  }

  // Check if the selected country exists in the WorldTimeAPI
  fetch("https://worldtimeapi.org/api/timezone")
    .then((response) => response.json())
    .then((data) => {
      if (!data.includes(selectedCountry)) {
        gmtTime1.textContent = "Invalid country";
        return;
      }

      // Use an API to fetch the current time based on GMT for the selected country
      fetch(`https://worldtimeapi.org/api/timezone/${selectedCountry}`)
        .then((response) => response.json())
        .then((data) => {
          const datetime = data.datetime;
          const time = new Date(datetime);
          const hours = time.getUTCHours().toString().padStart(2, "0");
          const minutes = time.getUTCMinutes().toString().padStart(2, "0");
          const seconds = time.getUTCSeconds().toString().padStart(2, "0");
          gmtTime1.textContent = `GMT: ${hours}:${minutes}:${seconds}`;
        })
        .catch((error) => {
          console.error("Error fetching time:", error);
          gmtTime1.textContent = "Error fetching time";
        });
    })
    .catch((error) => {
      console.error("Error fetching timezones:", error);
      gmtTime1.textContent = "Error fetching timezones";
    });
});

//part-2
countrySelector2.addEventListener("change", () => {
  const selectedCountry = countrySelector2.value;
  if (selectedCountry === "0") {
    gmtTime2.textContent = "";
    return;
  }

  // Check if the selected country exists in the WorldTimeAPI
  fetch("https://worldtimeapi.org/api/timezone")
    .then((response) => response.json())
    .then((data) => {
      if (!data.includes(selectedCountry)) {
        gmtTime2.textContent = "Invalid country";
        return;
      }

      // Use an API to fetch the current time based on GMT for the selected country
      fetch(`https://worldtimeapi.org/api/timezone/${selectedCountry}`)
        .then((response) => response.json())
        .then((data) => {
          const datetime = data.datetime;
          const time = new Date(datetime);
          const hours = time.getUTCHours().toString().padStart(2, "0");
          const minutes = time.getUTCMinutes().toString().padStart(2, "0");
          const seconds = time.getUTCSeconds().toString().padStart(2, "0");
          gmtTime2.textContent = `GMT: ${hours}:${minutes}:${seconds}`;
        })
        .catch((error) => {
          console.error("Error fetching time:", error);
          gmtTime2.textContent = "Error fetching time";
        });
    })
    .catch((error) => {
      console.error("Error fetching timezones:", error);
      gmtTime2.textContent = "Error fetching timezones";
    });
});
