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

const displayCreateNewProjectButton = () => {
    const newProjectButton = document.createElement('button');
    newProjectButton.id = 'new-project-button';
    newProjectButton.textContent = 'New Project';
    newProjectButton.addEventListener('click', () => {
        
    });
    document.body.appendChild(newProjectButton);           
}

const renderProject = (project, projectID) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.setAttribute('data-project', projectID.toString());

    const projectInfo = document.createElement('div');
    projectInfo.classList.add('project-info');

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = project.title;
    
    const projectDescription = document.createElement('p'); 
    projectDescription.classList.add('project-description');
    projectDescription.textContent = project.description;

    const projectDueDate = document.createElement('p');
    projectDueDate.classList.add('project-due-date');
    projectDueDate.textContent = project.dueDate;

    const projectPriority = document.createElement('p');
    projectPriority.classList.add('project-priority');
    projectPriority.textContent = project.priority;

    projectInfo.appendChild(projectTitle);
    projectInfo.appendChild(projectDescription);
    projectInfo.appendChild(projectDueDate);
    projectInfo.appendChild(projectPriority);

    projectDiv.appendChild(projectInfo);

    const toDoItems = document.createElement('div');
    toDoItems.classList.add('todo-items');

    project.toDoList.forEach((toDo) => {
        renderToDo(projectID, toDo);
    });

    document.body.appendChild(projectDiv)
}


const renderToDo = (projectID, toDo) => {

}

export {displayWebPageTitle, displayCurrentProjects, displayCreateNewProjectButton}