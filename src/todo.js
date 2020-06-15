//contains all functionality (create, edit, remove, etc.) pertaining to To-Do List items

const Project = (title, description, dueDate, priority, toDoList) => {

    const getTitle = () => title;    
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getToDoList = () => toDoList;

    return { getTitle, getDescription, getDueDate, getPriority, getToDoList}
}

const ToDo = (title, description, dueDate, priority, checkList) => {
    
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getCheckList = () => checkList;

    return { getTitle, getDescription, getDueDate, getPriority, getCheckList};

}

const createNewProject = (title, description, dueDate, priority, toDoList) => {
    return Project(title, description, dueDate, priority, toDoList);
}

export {createNewProject}