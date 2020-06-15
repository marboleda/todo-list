import {createNewProject} from './todo'

const initialPageLoad = () => {
    //Should only generate default project if no projects exist yet, but will implement that check later
    //For now, just create the default project
    const defaultProject = createNewProject('Default Project', "Your first project!", "06/19/2020", 0, {});

    console.log(defaultProject.getTitle(), defaultProject.getDescription(), defaultProject.getDueDate(), defaultProject.getPriority(), defaultProject.getToDoList());
}

export default initialPageLoad;