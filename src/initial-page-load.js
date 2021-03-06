import { createNewProject } from './project'
import { format, endOfToday, addMonths } from 'date-fns'
import storageAvailable from './local-storage'
import { displayWebPageTitle, displayCurrentProjects, displayCreateNewProjectButton } from './display-controller'

const initialPageLoad = () => {

    const createDefaultProject = () => {

        const defaultProject = createNewProject(0,
                                                'Default Project', 
                                                "Your first project!", 
                                                format(addMonths(endOfToday(), 6), 'MM/dd/yyyy hh:mm a'), 
                                                0);

        const projectObj = {
                id: defaultProject.getProjectId(),
                title: defaultProject.getTitle(),
                description: defaultProject.getDescription(),
                dueDate: defaultProject.getDueDate(),
                priority: defaultProject.getPriority(),
        };
        localStorage.setItem('projects', JSON.stringify([projectObj]));
        localStorage.setItem('project-0-todos', JSON.stringify([]));
    }

    displayWebPageTitle('ToDo List');
    
    if (!storageAvailable('localStorage') || !localStorage.getItem('projects')){
        createDefaultProject();
    }

    let projects = JSON.parse(localStorage.getItem('projects') || '[]');
    displayCurrentProjects(projects);

    displayCreateNewProjectButton();

}

export default initialPageLoad;