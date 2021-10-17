const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

function cskData() {
  const csksDirectory = path.join(process.cwd(), "data/csk-pages");
  const fileNames = fs.readdirSync(csksDirectory);
  const sitePath = "/cardanostarterkits";
  const csks = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(csksDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id,
      title: matterResult.data.title,
      props: matterResult.data,
      sitePath,
    };
  });
  return csks;
}

function dapisData() {
  const dapisDirectory = path.join(process.cwd(), "data/dandelion-pages");
  const fileNames = fs.readdirSync(dapisDirectory);
  const sitePath = "/dandelionapis";
  const dapis = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(dapisDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id,
      title: matterResult.data.title,
      props: matterResult.data,
      sitePath,
    };
  });
  return dapis;
}

function projectsData() {
  const projectsDirectory = path.join(process.cwd(), "data/project-pages");
  const fileNames = fs.readdirSync(projectsDirectory);
  const sitePath = "/projects";
  const projects = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id,
      title: matterResult.data.title,
      props: matterResult.data,
      sitePath,
    };
  });
  return projects;
}

function allData() {
  const data = projectsData().concat(cskData().concat(dapisData()));
  return `export const allContent = ${JSON.stringify(data)}`;
}

try {
  fs.readdirSync("cache");
} catch (e) {
  fs.mkdirSync("cache");
}

fs.writeFile("cache/data.js", allData(), function (err) {
  if (err) return console.log(err);
  console.log("Content cached.");
});
