import { createNewProject } from './project'
import { format, endOfToday, addMonths } from 'date-fns'
import storageAvailable from './local-storage'
import { displayWebPageTitle, displayCurrentProjects, displayCreateNewProjectButton } from './display-controller'

const initialPageLoad = () => {

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

    let projects = JSON.parse(localStorage.getItem('projects') || '[]');

    displayWebPageTitle('ToDo List');
    
    if (storageAvailable('localStorage') && localStorage.getItem('projects')){
        if (projects.length > 0) {
            displayCurrentProjects(projects);
        } else {
            createDefaultProject();
        }
    } else {
        createDefaultProject();
    }

    displayCreateNewProjectButton();

}

export default initialPageLoad;