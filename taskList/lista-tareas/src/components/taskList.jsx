import React from 'react';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 py-6">
      {tasks.length === 0 ? (
        <p className="text-gray-600 text-center">No hay tareas creadas. ¡Agrega una nueva tarea!</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task, index) => (
            <li key={index} className="bg-gray-50 shadow-sm rounded px-6 py-4">
              <p><strong>Proyecto:</strong> {task.proyecto}</p>
              <p><strong>Tipo de Tarea:</strong> {task.tipoTarea}</p>
              <p><strong>Persona Asignada:</strong> {task.personaAsignada}</p>
              <p><strong>Story Points:</strong> {task.storyPoints}</p>
              <p><strong>Prioridad:</strong> {task.prioridad}</p>
              <p><strong>Fecha de Creación:</strong> {task.fechaCreacion}</p>
              <p><strong>Resumen:</strong> {task.resumen}</p>
              <button
                className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => deleteTask(index)}
              >
                Eliminar Tarea
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
