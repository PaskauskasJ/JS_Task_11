const BASE_URL = "https://melon-potent-period.glitch.me/skills";

const addSkillBtn = document.getElementById("addSkillBtn");

const viewSkillBtn = document.getElementById("viewSkillBtn");

viewSkillBtn.addEventListener("click", () => {
  window.location.href = "./index.html";
});

async function postItemData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    alert(response.ok ? "Duomenys issaugoti" : "Klaida");
    if (response.ok) {
      window.location.href = "./index.html";
    }
  } catch (error) {
    console.log(error);
  }
}

addSkillBtn.addEventListener("click", () => {
  const skillInput = document.getElementById("skillInput").value;

  if (skillInput) {
    const data = {
      skill: skillInput,
    };

    postItemData(BASE_URL, data);
  } else {
    alert("Iveskite duomenis");
  }
});
