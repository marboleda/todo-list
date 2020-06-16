//contains all functionality (create, edit, remove, etc.) pertaining to To-Do List items

const ToDo = (title, description, dueDate, priority, checkList) => {
    
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getCheckList = () => checkList;

    return { getTitle, getDescription, getDueDate, getPriority, getCheckList};
}

const createNewToDo = (title, description, dueDate, priority, checkList) => {
    return ToDo(title, description, dueDate, priority, checkList);
}

export {createNewToDo}