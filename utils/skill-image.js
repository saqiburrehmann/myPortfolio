import css from "/public/svg/skills/css.svg";
import firebase from "/public/svg/skills/firebase.svg";
import html from "/public/svg/skills/html.svg";
import javascript from "/public/svg/skills/javascript.svg";
import mongoDB from "/public/svg/skills/mongoDB.svg";
import react from "/public/svg/skills/react.svg";
import tailwind from "/public/svg/skills/tailwind.svg";
import typescript from "/public/svg/skills/typescript.svg";
import nextjs from "/public/svg/skills/NextJS.png";
import redux from "/public/svg/skills/redux.webp";
import nodejs from "/public/svg/skills/nodejs.png";
import express from "/public/svg/skills/express.png";
import nestjs from "/public/svg/skills/nestjs.png";
import mysql from "/public/svg/skills/mysql.svg";
import redis from "/public/svg/skills/redis.png";
import socketio from "/public/svg/skills/socketio.png";
import aws from "/public/svg/skills/aws.svg";
import git from "/public/svg/skills/git.svg";
import restapi from "/public/svg/skills/restapi.png";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "typescript":
      return typescript;
    case "react.js":
      return react;
    case "next.js":
      return nextjs;
    case "tailwind css":
      return tailwind;
    case "redux toolkit":
      return redux;
    case "node.js":
      return nodejs;
    case "express.js":
      return express;
    case "nestjs":
      return nestjs;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "firebase":
      return firebase;
    case "redis":
      return redis;
    case "websockets":
      return socketio;
    case "aws":
      return aws;
    case "rest apis":
      return restapi;
    case "git":
      return git;
    default:
      return null;
  }
};
