import { createNewToDo } from './todo'

const Project = (id, title, description, dueDate, priority) => {

    const getProjectId = () => id;
    const getTitle = () => title;    
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => {
        switch (priority) {
            case 0:
                return 'urgent';
                break;
            case 1:
                return 'high';
                break;
            case 2:
                return 'medium';
                break;
            case 3:
                return 'low';
        }
    }

    const addToDoItem = (toDoTitle, toDoDescription, toDoDueDate, toDoPriority) => {
        toDoList.push(createNewToDo(toDoTitle, toDoDescription, toDoDueDate, toDoPriority, []));
    }

    const deleteToDo = (index) => {
        toDoList.splice(index, 1);
    }

    return { getProjectId, getTitle, getDescription, getDueDate, getPriority, addToDoItem, deleteToDo }
}

const createNewProject = (title, description, dueDate, priority) => {
    return Project(title, description, dueDate, priority);
}

export {createNewProject}