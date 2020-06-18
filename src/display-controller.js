const displayWebPageTitle = (title) => {
    const webPageTitle = document.createElement('h1');
    webPageTitle.textContent = title;
    document.body.appendChild(webPageTitle);
}

const displayCurrentProjects = (projectArray) => {
    projectArray.forEach((project, index) => {
        renderProject(project, index);
    });
    
}

const renderProject = (project, projectID) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.setAttribute('data-project', projectID.toString());

    const projectInfo = document.createElement('div');
    projectInfo.classList.add('project-info');

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = project.getTitle();
    
    const projectDescription = document.createElement('p'); 
    projectDescription.classList.add('project-description');
    projectDescription.textContent = project.getDescription();

    const projectDueDate = document.createElement('p');
    projectDueDate.classList.add('project-due-date');
    projectDueDate.textContent = project.getDueDate();

    const projectPriority = document.createElement('p');
    projectPriority.classList.add('project-priority');
    projectPriority.textContent = project.getPriority();

    projectInfo.appendChild(projectTitle);
    projectInfo.appendChild(projectDescription);
    projectInfo.appendChild(projectDueDate);
    projectInfo.appendChild(projectPriority);

    projectDiv.appendChild(projectInfo);

    const toDoItems = document.createELement('div');
    toDoItems.classList.add('todo-items');

    project.getToDoList().forEach((todo) => {
        renderToDo(projectDiv);
    });

}

export {displayWebPageTitle, displayCurrentProjects}