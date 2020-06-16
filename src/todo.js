//contains all functionality (create, edit, remove, etc.) pertaining to To-Do List items

const ToDo = (title, description, dueDate, priority, checkList) => {
    
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getCheckList = () => checkList;

    const addItemToCheckList = (note) => {
        checkList.push(note);
    }

    return { getTitle, getDescription, getDueDate, getPriority, getCheckList,
             addItemToCheckList };
}

const createNewToDo = (title, description, dueDate, priority, checkList) => {
    return ToDo(title, description, dueDate, priority, checkList);
}

export {createNewToDo}