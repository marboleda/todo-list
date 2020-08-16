//contains all functionality (create, edit, remove, etc.) pertaining to To-Do List items

const ToDo = (toDoNum, title, description, dueDate, priority, checkList) => {
    
    const getToDoNum = () => toDoNum;
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
    const getCheckList = () => checkList;

    const addItemToCheckList = (note) => {
        checkList.push(note);
    }

    const deleteCheckListItem = (index) => {
        checkList.splice(index,1);
    }

    return { getToDoNum, getTitle, getDescription, getDueDate, getPriority, getCheckList,
             addItemToCheckList, deleteCheckListItem };
}

const createNewToDo = (title, description, dueDate, priority, checkList) => {
    return ToDo(title, description, dueDate, priority, checkList);
}

export {createNewToDo}