import { createNewProject } from './todo'
import { format, endOfToday } from 'date-fns'

const initialPageLoad = () => {
    //Should only generate default project if no projects exist yet, but will implement that check later
    //For now, just create the default project
    const defaultProject = createNewProject('Default Project', 
                                            "Your first project!", 
                                            format(endOfToday(), 'MM/dd/yyyy hh:mm a'), 
                                            0, 
                                            {});
}

export default initialPageLoad;