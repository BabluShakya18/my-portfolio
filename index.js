const projects = [
    {
        title: "Youtube Clone",
        description: "The YouTube Clone is a web application that replicates the core functionalities of YouTube, allowing users to upload, watch, and interact with videos..",
        link: "https://www.youtube.com/"
    },
    {
        title: "TextUtils",
        description: "TextUtils is a web application designed to provide various text manipulation features, allowing users to analyze and modify their text efficiently..",
        link: "https://text-utils-six.vercel.app/"
    },
    // Add more projects as needed
];

const projectList = document.getElementById('project-list');

projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;
    projectList.appendChild(projectItem);
});
