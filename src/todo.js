//contains all functionality (create, edit, remove, etc.) pertaining to To-Do List items

const Project = (title, description, dueDate, priority, toDoList) => {

    getProjectTitle = () => title;    
    getProjectDescription = () => description;
    getProjectDueDate = () => dueDate;
    getProjectPriority = () => priority;
    getToDoList = () => toDoList;

    return { getTitle, getDescription, getDueDate, getPriority, getToDoList}
}

const ToDo = (title, description, dueDate, priority, checkList) => {
    
    getToDoTitle = () => title;
    getToDoDescription = () => description;
    getToDoDueDate = () => dueDate;
    getToDoPriority = () => priority;
    getCheckList = () => checkList;

    return { getToDoTitle, getToDoDescription, getToDoDueDate, getToDoPriority, getCheckList};

}

const createNewProject = (title, description, dueDate, priority, toDoList) => {
    return Project(title, description, dueDate, priority, toDoList);
}

export {createNewProject}