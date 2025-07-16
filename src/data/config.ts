const config = {
  title: "Richard David | Software developer, data engineer, and tech enthusiast.",
  description: {
    long: "I am Richard David, an M.Tech student at IIT Jodhpur with a strong background in Computer Science and Engineering. I have hands-on experience in software development, cloud-based APIs, serverless architectures, and data engineering. My work includes building robust applications, optimizing data pipelines, and delivering scalable solutions for real-world problems. I am passionate about leveraging technology to improve efficiency and accessibility, and have demonstrated leadership in both technical and organizational roles.",
    short:
      "Portfolio of Richard David, Software developer, data engineer, and tech enthusiast.",
  },
  keywords: [
    "Richard David",
    "IIT Jodhpur",
    "portfolio",
    "M.Tech",
    "Computer Science",
    "Software Development",
    "Data Engineering",
    "Cloud",
    "Serverless",
    "Flutter",
    "AWS",
    "BigQuery",
    "Airflow",
    "Python",
    "C++",
    "Dart",
    "R",
    "GIT",
    "Docker",
  ],
  author: "Richard David",
  email: "richijn9@gmail.com",
  site: "#", // Update with your portfolio site if available
  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    github: "https://github.com/ritchi-e",
    linkedin: "https://in.linkedin.com/in/richard-david-786201172", // Updated LinkedIn profile link
    // Add more socials if needed
  },
  resume: "https://drive.google.com/drive/folders/1CrJhUSPk4zhum2tsp93WwQQlwQ3vzaQ7?usp=sharing",
};
export { config };
