import { createNewProject } from './project'
import { format, endOfToday, addMonths } from 'date-fns'
import storageAvailable from './local-storage'
import { displayWebPageTitle } from './display-controller'

const initialPageLoad = () => {

    let projects = JSON.parse(localStorage.getItem('projects') || '[]');

    const createDefaultProject = () => {
        const defaultProject = createNewProject('Default Project', 
                                                "Your first project!", 
                                                format(addMonths(endOfToday(), 6), 'MM/dd/yyyy hh:mm a'), 
                                                0, 
                                                []);
        const projectObj = {
                title: defaultProject.getTitle(),
                description: defaultProject.getDescription(),
                dueDate: defaultProject.getDueDate(),
                priority: defaultProject.getPriority(),
                toDoList: defaultProject.getToDoList()
        };
        localStorage.setItem('projects', JSON.stringify([projectObj]));
    }

    displayWebPageTitle('ToDo List');
    
    //Should only generate default project if no projects exist yet
    if (storageAvailable('localStorage') && localStorage.getItem('projects')){
        if (localStorage.getItem('projects').length > 0) {
            //Load the projects onto the DOM
        } else {
            createDefaultProject();
        }
    } else {
        createDefaultProject();
    }


}

export default initialPageLoad;