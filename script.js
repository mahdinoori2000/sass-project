// Toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// SKILLS
const skill = [
  {
    icon: "git-icon.png",
    title: "Git Version Control",
    alt: "Github",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, officia voluptates itaque numquam enim distinctio! Debitis esse placeat omnis soluta?",
  },
  {
    icon: "github-icon.png",
    title: "GitHub",
    alt: "Github",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, officia voluptates itaque numquam enim distinctio! Debitis esse placeat omnis soluta?",
  },
  {
    icon: "backend-icon.png",
    title: "Backend-Development",
    alt: "Backend Development",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, officia voluptates itaque numquam enim distinctio! Debitis esse placeat omnis soluta?",
  },
  {
    icon: "camera-icon.png",
    title: "Photography",
    alt: "camera",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, officia voluptates itaque numquam enim distinctio! Debitis esse placeat omnis soluta?",
  },
  {
    icon: "web-icon.png",
    title: "Web Development",
    alt: "Web",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, officia voluptates itaque numquam enim distinctio! Debitis esse placeat omnis soluta?",
  },

  {
    icon: "freelancing-icon.png",
    title: "Freelancing",
    alt: "Freelancing",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, officia voluptates itaque numquam enim distinctio! Debitis esse placeat omnis soluta?",
  },
  {
    icon: "app-design-icon.png",
    title: "App Design",
    alt: "App Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, officia voluptates itaque numquam enim distinctio! Debitis esse placeat omnis soluta?",
  },
];

const wrapperEl = document.querySelector(".skill-container");

let text = "";
skill.forEach((item) => {
  text += `
  <div class="skill-element">
     <img src="logo/${item.icon}" alt="${item.alt} Logo" />
     <h4>${item.title}</h4>
     <p>
     ${item.description}
    </p>
  </div>
  `;
});
wrapperEl.innerHTML = text;
