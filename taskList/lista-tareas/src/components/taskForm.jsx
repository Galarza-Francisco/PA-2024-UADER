import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    proyecto: '',
    tipoTarea: '',
    personaAsignada: '',
    storyPoints: '',
    prioridad: '',
    fechaCreacion: '',
    resumen: ''
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(task).some(val => val === '')) {
      alert('Todos los campos son obligatorios');
      return;
    }
    addTask(task);
    setTask({
      proyecto: '',
      tipoTarea: '',
      personaAsignada: '',
      storyPoints: '',
      prioridad: '',
      fechaCreacion: '',
      resumen: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="proyecto">
          Proyecto
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="proyecto"
          placeholder="Nombre del proyecto"
          value={task.proyecto}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoTarea">
          Tipo de Tarea
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="tipoTarea"
          placeholder="Tipo de tarea"
          value={task.tipoTarea}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="personaAsignada">
          Persona Asignada
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="personaAsignada"
          placeholder="Nombre del desarrollador"
          value={task.personaAsignada}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="storyPoints">
          Story Points
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          name="storyPoints"
          placeholder="Story Points"
          value={task.storyPoints}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prioridad">
          Prioridad
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="prioridad"
          value={task.prioridad}
          onChange={handleChange}
        >
          <option value="">Seleccionar prioridad</option>
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechaCreacion">
          Fecha de Creación
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="date"
          name="fechaCreacion"
          value={task.fechaCreacion}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resumen">
          Resumen
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="resumen"
          placeholder="Resumen de la tarea"
          value={task.resumen}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Agregar Tarea
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
