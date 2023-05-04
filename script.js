const skills = document.querySelectorAll(".Skill");
const hiddenSkills = document.querySelectorAll(".HiddenSkill");

skills.forEach((skill, index) => {
  skill.addEventListener("click", () => toggleMenu(index + 1));
});

function toggleMenu(index) {
  console.log(`menu${index} clicked`);
  hiddenSkills.forEach((hiddenSkill, hiddenIndex) => {
    if (hiddenIndex + 1 === index) {
      hiddenSkill.classList.toggle("showSkill");
    } else {
      hiddenSkill.classList.remove("showSkill");
    }
  });
}
