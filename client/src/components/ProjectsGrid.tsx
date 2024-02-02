import { useState, useEffect } from 'react';
import { getAllProjects, getAllProjectManagers } from '../api/projects.api';

export const ProjectsGrid = () => {

  const [projects, setProjects] = useState<any[]>([]);
  const [projectManagers, setProjectManagers] = useState<any[]>([]);

  const loadProjects = async () => {
    const response = await getAllProjects();
    setProjects(response.data);
  }

  const loadProjectManagers = async () => {
    const response = await getAllProjectManagers();
    setProjectManagers(response.data);
  }

  useEffect(() => {
    loadProjects();
    loadProjectManagers();
  }, [])

  const columns = Object.keys(projects[0] || {}) 
  var pms: any = {};
  projectManagers.map((pm) => (
    pms[pm.id] = `${pm.name} ${pm.first_last_name}`
  )) 

  return (
    <div>
      <table>
        <thead>
          <tr>
            {
              columns.map((column, i) => (
                <th key={i}>{column}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            projects.map((record, i) => (
              <tr key={i}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.description}</td>
                <td>{pms[record.project_manager]}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}