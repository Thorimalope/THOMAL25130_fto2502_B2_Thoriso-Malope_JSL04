const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Never Give Up 🏆",
    description: "You're almost there",
    status: "doing",
  },

  {
    id: 4,
    title: "Conquer React ⚛️",
    description:
      "Learn and master React in order to add it to your arsenal",
    status: "todo",
  },
  {
    id: 5,
    title: "Crush Frameworks 🖼️",
    description:
      "Add frameworks to your skillset to have a wider approach with any programming language",
    status: "todo",
  },
  {
    id: 6,
    title: "Understand Databases ⚙️",
    description:
      "Understand the fundamentals of databases and how these organized collections works",
    status: "todo",
  },
  {
    id: 7,
    title: "Explore ES6 Features 🚀",
    description:
      "Dive into ES6 features to crack open a bigger and better JavaScript world",
    status: "done",
  },
  {
    id: 8,
    title: "Have Fun 🥳",
    description:
      "Have a blast while you're at it",
    status: "done",
  },  
];

// Fetched elements from DOM

const cards = document.querySelectorAll(".card");
const modal = document.querySelector(".modal-wrapper");
const titleInput = document.getElementById("title-input");
const descriptionInput = document.getElementById("description-input");
const selectedStatus = document.querySelector(".selected");

// Populating the Modal

cards.forEach(card => {
  card.addEventListener("click", () => {
    const taskId = card.getAttribute("data-id");
    const task = initialTasks.find(t => t.id === parseInt(taskId));

    if (task) {
      // Populate the modal
      titleInput.value = task.title;
      descriptionInput.value = task.description;
      selectedStatus.textContent = (task.status);

      // Show modal
      modal.style.display = "block";
    }
    console.log("card clicked");
  });
});

// Modal close button

const closeButton = document.getElementById("close-btn");

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
})



// Dropdown

const statusSelect = document.getElementbyId("select");
const dropdownMenu = document.getElementbyId("menu");

statusSelect.addEventListener("click", function () {
  dropdownMenu.style.display = "block";
})
