const BASE_URL = "https://melon-potent-period.glitch.me/skills";

const addSkillBtn = document.getElementById("addSkillBtn");

addSkillBtn.addEventListener("click", () => {
  window.location.href = "./add.html";
});

async function getSkills(url) {
  try {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
    console.log(responseData);
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function deleteItem(url) {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    alert(response.ok ? "Eilutė panaikinta" : "Klaida");

    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}

async function getItemsDataFromUrl(url) {
  const data = await getSkills(url);
  drawItems(data);
  console.log(data);
}

function drawItems(data) {
  const tbody = document.getElementById("tbody");
  const tableRow = document.createElement("tr");

  data.forEach((dataItem) => {
    const tableRow = document.createElement("tr");
    const id = document.createElement("td");
    id.textContent = dataItem.id;

    const skills = document.createElement("td");
    skills.textContent = dataItem.skill;

    const deleteButton = document.createElement("td");
    deleteButton.textContent = "delete";
    deleteButton.classList = "delete-button";

    deleteButton.addEventListener("click", () => {
      deleteItem(BASE_URL.slice(0, -1) + "/" + dataItem.id);
    });
    tableRow.append(id, skills, deleteButton);
    tbody.append(tableRow);
  });
}

getItemsDataFromUrl(BASE_URL);
