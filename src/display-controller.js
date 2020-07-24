import { createNewToDo } from './todo'
import { createNewProject } from './project'
import { format, endOfToday, addMonths } from 'date-fns'

const displayWebPageTitle = (title) => {
    const webPageTitle = document.createElement('h1');
    webPageTitle.textContent = title;
    document.body.prepend(webPageTitle);
}

const displayCurrentProjects = (projectArray) => {
    projectArray.forEach((project, index) => {
        renderProject(project, index);
    });
    
}

const createNewProjectForm = () => {
    const newProjectForm = document.createElement('form');
    newProjectForm.setAttribute('action', '');
    newProjectForm.id = `new-project-form`;
    newProjectForm.setAttribute('name', 'new-project');

    const header = document.createElement('p');
    header.textContent = "Enter the new Project's information";
    
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.innerHTML = '<strong>Title:</strong>';
    
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type','text');
    titleInput.setAttribute('name','title');
    titleInput.required = true;

    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.innerHTML = '<strong>Description:</strong>';
    
    const descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('rows','3');
    descriptionInput.setAttribute('cols', '100');
    descriptionInput.setAttribute('name','description');
    descriptionInput.required = true;

    const priorityDiv = document.createElement('div');
    priorityDiv.id = 'priority';

    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.innerHTML = '<strong>Priority:</strong>';

    for (let i = 0; i < 4; i++) {
        let priority;
        switch (i) {
            case 0:
                priority = 'urgent';
                break;
            case 1:
                priority = 'high';
                break;
            case 2:
                priority = 'medium';
                break;
            case 3:
                priority = 'low';
        }

        const priorityInput = document.createElement('input');
        priorityInput.setAttribute('type', 'radio');
        priorityInput.setAttribute('name', 'priority');
        priorityInput.setAttribute('value', i);

        const optionLabel = document.createElement('label');
        optionLabel.setAttribute('for', priority);
        optionLabel.textContent = priority;

        priorityDiv.appendChild(priorityInput);
        priorityDiv.appendChild(optionLabel);
    }


    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.setAttribute('type','submit');

    newProjectForm.appendChild(header);
    newProjectForm.appendChild(titleLabel);
    newProjectForm.appendChild(titleInput);
    newProjectForm.appendChild(descriptionLabel);
    newProjectForm.appendChild(descriptionInput);
    newProjectForm.appendChild(priorityDiv);
    newProjectForm.appendChild(submitButton);

    newProjectForm.style['display'] = 'none';

    newProjectForm.addEventListener('submit', (e) => {
        const newProjectForm = document.forms['new-project'];
        const newProject = createNewProject(newProjectForm.elements['title'].value,
                                            newProjectForm.elements['description'].value,
                                            format(addMonths(endOfToday(), 6), 'MM/dd/yyyy hh:mm a'),
                                            Number(newProjectForm.elements['priority'].value));
        const newProjectObj = {
            title: newProject.getTitle(),
            description: newProject.getDescription(),
            dueDate: newProject.getDueDate(),
            priority: newProject.getPriority()
        }
        let projects = JSON.parse(localStorage.getItem('projects') || '[]');
        projects.push(newProjectObj);
        localStorage.setItem('projects', JSON.stringify(projects));
        e.preventDefault();

        document.getElementById('content').textContent = '';
        displayCurrentProjects(projects);

    });

    document.body.appendChild(newProjectForm);
}

const displayCreateNewProjectButton = () => {
    const newProjectButton = document.createElement('button');
    newProjectButton.id = 'new-project-button';
    newProjectButton.textContent = 'New Project';
    newProjectButton.addEventListener('click', () => {
        const form = document.getElementById('new-project-form');
        const displaySetting = form.style.display;
        if (displaySetting === 'none') {
            form.style.display = 'flex';
            form.style['flex-direction'] = 'column';           
        } else {
            form.style.display = 'none';
            form.style.removeProperty('flex-direction');
        }
    });
    document.body.appendChild(newProjectButton);
    createNewProjectForm();           
}

const createDeleteProjectButton = (projectID) => {
    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.classList.add('delete-project');
    deleteProjectButton.textContent = 'Delete Project';
        
    deleteProjectButton.addEventListener('click', () => {
        //Remove all to-dos first
        localStorage.removeItem(`project-${projectID}-todos`);
        const oldProjects = JSON.parse(localStorage.getItem('projects') || '[]');
        const newProjects = oldProjects.splice(projectID, 1);
        localStorage.setItem('projects', JSON.stringify(newProjects));
        //Take care of removing the visual element
        document.querySelector(`[data-project='${projectID}']`).remove();
        //TO-DO: Add a projectID attribute to every project object. This stops the IDs from getting out of sync when deleting projects!
    });
    
    return deleteProjectButton;
}

const createAddToDoButton = (projectID) => {
    const newToDoButton = document.createElement('button');
    newToDoButton.classList.add('new-todo');
    newToDoButton.textContent = 'Add To-Do Item'
    newToDoButton.addEventListener('click', () => {
        const form = document.getElementById(`project-${projectID}-newToDoForm`);
        const displaySetting = form.style.display;
        if (displaySetting === 'none') {
            form.style.display = 'flex';
            form.style['flex-direction'] = 'column';           
        } else {
            form.style.display = 'none';
            form.style.removeProperty('flex-direction');
        }

    });

    return newToDoButton;
}

const createNewToDoForm = (projectID) => {
    const newToDoForm = document.createElement('form');
    newToDoForm.setAttribute('action', '');
    newToDoForm.id = `project-${projectID}-newToDoForm`;
    newToDoForm.classList.add('new-todo-form');
    newToDoForm.setAttribute('name', 'todo');

    const header = document.createElement('p');
    header.textContent = "Enter the new To Do's information";
    
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.innerHTML = '<strong>Title:</strong>';
    
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type','text');
    titleInput.setAttribute('name','title');
    titleInput.required = true;

    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.innerHTML = '<strong>Description:</strong>';
    
    const descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('rows','3');
    descriptionInput.setAttribute('cols', '100');
    descriptionInput.setAttribute('name','description');
    descriptionInput.required = true;

    const priorityDiv = document.createElement('div');
    priorityDiv.id = 'priority';

    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.innerHTML = '<strong>Priority:</strong>';

    for (let i = 0; i < 4; i++) {
        let priority;
        switch (i) {
            case 0:
                priority = 'urgent';
                break;
            case 1:
                priority = 'high';
                break;
            case 2:
                priority = 'medium';
                break;
            case 3:
                priority = 'low';
        }
        const priorityInput = document.createElement('input');
        priorityInput.setAttribute('type', 'radio');
        priorityInput.setAttribute('name', 'priority');
        priorityInput.setAttribute('value', i);

        const optionLabel = document.createElement('label');
        optionLabel.setAttribute('for', priority);
        optionLabel.textContent = priority;

        priorityDiv.appendChild(priorityInput);
        priorityDiv.appendChild(optionLabel);
    }


    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.setAttribute('type','submit');

    newToDoForm.appendChild(header);
    newToDoForm.appendChild(titleLabel);
    newToDoForm.appendChild(titleInput);
    newToDoForm.appendChild(descriptionLabel);
    newToDoForm.appendChild(descriptionInput);
    newToDoForm.appendChild(priorityDiv);
    newToDoForm.appendChild(submitButton);

    newToDoForm.style['display'] = 'none';

    newToDoForm.addEventListener('submit', (e) => {
        const newToDoForm = document.forms[`project-${projectID}-newToDoForm`];
        const newToDo = createNewToDo(newToDoForm.elements['title'].value,
                                      newToDoForm.elements['description'].value,
                                      format(addMonths(endOfToday(), 3), 'MM/dd/yyyy hh:mm a'),
                                      Number(newToDoForm.elements['priority'].value),
                                      []);
        const newToDoObj = {
            title: newToDo.getTitle(),
            description: newToDo.getDescription(),
            dueDate: newToDo.getDueDate(),
            priority: newToDo.getPriority()
        };
        let toDos = JSON.parse(localStorage.getItem(`project-${projectID}-todos`) || '[]');
        toDos.push(newToDoObj);
        localStorage.setItem(`project-${projectID}-todos`, JSON.stringify(toDos));   
        document.getElementById('content').textContent = '';
        displayCurrentProjects(JSON.parse(localStorage.getItem('projects') || '[]'));    
        e.preventDefault();
    });

    return newToDoForm;
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
    projectInfo.appendChild(createDeleteProjectButton(projectID));

    projectDiv.appendChild(projectInfo);

    const toDoItems = document.createElement('div');
    toDoItems.classList.add('todo-items');

    const toDoObjs = JSON.parse(localStorage.getItem(`project-${projectID}-todos`) || '[]');
    
    toDoObjs.forEach((toDo, toDoID) => {
        const toDoDiv = document.createElement('div');
        toDoDiv.classList.add('todo');
        toDoDiv.setAttribute('data-todo', `${projectID.toString()}-${toDoID}` );

        const toDoTitle = document.createElement('h4');
        toDoTitle.textContent = toDo.title;

        const toDoDescription = document.createElement('p');
        toDoDescription.textContent = toDo.description;

        const toDoDueDate = document.createElement('p');
        toDoDueDate.textContent = toDo.dueDate;

        const toDoPriority = document.createElement('p');
        toDoPriority.textContent = toDo.priority;

        toDoDiv.appendChild(toDoTitle);
        toDoDiv.appendChild(toDoDescription);
        toDoDiv.appendChild(toDoDueDate);
        toDoDiv.appendChild(toDoPriority);

        toDoItems.appendChild(toDoDiv);
    });

    projectDiv.appendChild(toDoItems);

    projectDiv.appendChild(createAddToDoButton(projectID));
    projectDiv.appendChild(createNewToDoForm(projectID));

    document.getElementById('content').appendChild(projectDiv);
}


export {displayWebPageTitle, displayCurrentProjects, displayCreateNewProjectButton}