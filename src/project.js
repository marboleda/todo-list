import { createNewToDo } from './todo'

const Project = (title, description, dueDate, priority, toDoList) => {

    const getTitle = () => title;    
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getToDoList = () => toDoList;

    const addToDoItemToList = (toDoTitle, toDoDescription, toDoDueDate, toDoPriority) => {
        toDoList.push(createNewToDo(toDoTitle, toDoDescription, toDoDueDate, toDoPriority, []));
    }

    return { getTitle, getDescription, getDueDate, getPriority, getToDoList,
             addToDoItemToList }
}

const createNewProject = (title, description, dueDate, priority, toDoList) => {
    return Project(title, description, dueDate, priority, toDoList);
}

export {createNewProject}