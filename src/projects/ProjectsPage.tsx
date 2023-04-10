import React from 'react';
import ProjectList from './ProjectList';
import { useProjects } from './projectHooks';
// import { Project } from './Project'
// import { projectAPI } from './projectAPI';
// import { AppState } from '../state';
// import { useSelector, useDispatch } from 'react-redux';
// import { loadProjects } from './state/projectActions';
// import { AnyAction } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';
// import { ProjectState } from './state/projectTypes';

function ProjectsPage() {
    // const [projects, setProjects] = useState<Project[]>([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState<string | undefined>(undefined);
    // const [currentPage, setCurrentPage] = useState(1);
    // const loading = useSelector(
    //     (appState: AppState) => appState.projectState.loading
    // );
    // const projects = useSelector(
    //     (appState: AppState) => appState.projectState.projects
    // );
    // const error = useSelector(
    //     (appState: AppState) => appState.projectState.error
    // );
    // const currentPage = useSelector(
    //     (appState: AppState) => appState.projectState.page
    // );
    // const dispatch = useDispatch<ThunkDispatch<ProjectState, any, AnyAction>>();
    // useEffect(() => {
    //     dispatch(loadProjects(1));
    // }, [dispatch]);
    // useEffect(() => {
    //     setLoading(true);
    //     projectAPI
    //         .get(1)
    //         .then((data) => {
    //             setError('');
    //             setLoading(false);
    //             setProjects(data);
    //         })
    //         .catch((e) => {
    //             setLoading(false);
    //             setError(e.message);
    //             if (e instanceof Error) {
    //                 setError(e.message);
    //             }
    //         });
    // }, [currentPage]);
    // const saveProject = (project: Project) => {
    //     projectAPI
    //         .put(project)
    //         .then((updatedProject) => {
    //             let updatedProjects = projects.map((p: Project) => {
    //                 return p.id === project.id ? new Project(updatedProject) : p;
    //             });
    //             setProjects(updatedProjects);
    //         })
    //         .catch((e) => {
    //             if (e instanceof Error) {
    //                 setError(e.message);
    //             }
    //         });
    // };
    const handleMoreClick = () => {
        // setCurrentPage((currentPage) => currentPage + 1);
        // dispatch(loadProjects(currentPage + 1));
        setCurrentPage((currentPage) => currentPage + 1);
    };
    const {
        projects,
        loading,
        error,
        setCurrentPage,
        saveProject,
        saving,
        savingError,
    } = useProjects();
    return <>
        <h1>Projects</h1>
        {saving && <span className="toast">Saving...</span>}
        {/* {error && ( */}
        {(error || savingError) && (
            <div className="row">
                <div className="card large error">
                    <section>
                        <p>
                            <span className="icon-alert inverse "></span>
                            {/* {error} */}
                            {error} {savingError}
                        </p>
                    </section>
                </div>
            </div>
        )
        }
        {/* <ProjectList onSave={saveProject} projects={projects} /> */}
        <ProjectList projects={projects} />
        {!loading && !error && (
            <div className="row">
                <div className="col-sm-12">
                    <div className="button-group fluid">
                        <button className="button default" onClick={handleMoreClick}>
                            More...
                        </button>
                    </div>
                </div>
            </div>
        )}
        {
            loading && (
                <div className="center-page">
                    <span className="spinner primary"></span>
                    <p>Loading...</p>
                </div>
            )
        }
    </>;
}

export default ProjectsPage;