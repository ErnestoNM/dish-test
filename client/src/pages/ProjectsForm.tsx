import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createProject, getAllProjectManagers } from '../api/projects.api';
import { useNavigate } from 'react-router-dom';

export const ProjectsForm = () => {

  const [projectManagers, setProjectManagers] = useState<any[]>([]);

  const loadProjectManagers = async () => {
    const response = await getAllProjectManagers();
    setProjectManagers(response.data);
  }
  

  const navigate = useNavigate();

  useEffect(() => {
    loadProjectManagers();
  }, [])

  const { register, handleSubmit, } = useForm();

  const onSubmit = handleSubmit(async data => {
    await createProject(data);
    navigate('/projects')
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' placeholder='Nombre del proyecto' {...register('name', { required: true })}/>
        <textarea placeholder='Descripción' {...register('description', { required: true })}></textarea>
        <select {...register('project_manager')}>
          <option key='' value=''>---</option>
          {
            projectManagers.map((projectManager:any) => (
              <option key={projectManager.id} value={projectManager.id}>{projectManager.name} {projectManager.first_last_name} {projectManager.second_last_name}</option>
            ))
          }
        </select>
        <button>Save</button>
      </form>
    </div>
  );
}
