import dribble from "../../assets/playground/dribble.png";
import random from "../../assets/playground/random.png";
import countdown from "../../assets/playground/countdown.png";
import awwwards from "../../assets/playground/awwwards.png";

export const projectsData = [
  {
    id: 1,
    projectName: "Dribble Homepage Clone",
    liveLink: "https://dribble-clone.netlify.app/",
    hasLink: true,
    img: dribble,
  },
  {
    id: 2,
    projectName: "Random Quote Generator",
    liveLink: "https://js-project-quote-generator.netlify.app/",
    hasLink: true,
    img: random,
  },
  {
    id: 3,
    projectName: "New Year Countdown",
    hasLink: false,
    liveLink: "",
    img: countdown,
  },
  {
    id: 4,
    projectName: "Awwwards Clone",
    hasLink: false,
    liveLink: "",
    img: awwwards,
  },
];
