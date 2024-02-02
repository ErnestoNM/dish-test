import axios from 'axios';

const projectsApi = axios.create({
    baseURL: 'http://localhost:8000/portfolio/api/'
});

export const getAllProjects = () => projectsApi.get('/projects/');
export const createProject = (project: any) => projectsApi.post('/projects/', project)
export const getAllProjectManagers = () => projectsApi.get('/project_managers/')