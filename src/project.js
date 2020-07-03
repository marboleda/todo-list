import { createNewToDo } from './todo'

const Project = (title, description, dueDate, priority, toDoList) => {

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
    const getToDoList = () => toDoList;

    const addToDoItem = (toDoTitle, toDoDescription, toDoDueDate, toDoPriority) => {
        toDoList.push(createNewToDo(toDoTitle, toDoDescription, toDoDueDate, toDoPriority, []));
    }

    const deleteToDo = (index) => {
        toDoList.splice(index, 1);
    }

    return { getTitle, getDescription, getDueDate, getPriority, getToDoList,
             addToDoItem, deleteToDo }
}

const createNewProject = (title, description, dueDate, priority, toDoList) => {
    return Project(title, description, dueDate, priority, toDoList);
}

export {createNewProject}