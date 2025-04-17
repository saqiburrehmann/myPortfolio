import css from "/public/svg/skills/css.svg";
import firebase from "/public/svg/skills/firebase.svg";
import html from "/public/svg/skills/html.svg";
import javascript from "/public/svg/skills/javascript.svg";
import mongoDB from "/public/svg/skills/mongoDB.svg";
import react from "/public/svg/skills/react.svg";
import tailwind from "/public/svg/skills/tailwind.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "tailwind css":
      return tailwind;
    case "mongodb":
      return mongoDB;
    case "firebase":
      return firebase;
    default:
      return null;
  }
};
