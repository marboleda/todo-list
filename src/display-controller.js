const displayWebPageTitle = (title) => {
    const webPageTitle = document.createElement('h1');
    webPageTitle.textContent = title;
    document.body.appendChild(webPageTitle);
}

const displayCurrentProjects = (projectArray) => {
    
}

export {displayWebPageTitle, displayCurrentProjects}