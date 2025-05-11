// Configuración de Firebase - REEMPLAZA ESTO con tu propia configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBXPUuQLZqEr8OeCo7B0yp6-2KgtBZ5uSQ",
  authDomain: "digitalizacionappnube-372ca.firebaseapp.com",
  projectId: "digitalizacionappnube-372ca",
  storageBucket: "digitalizacionappnube-372ca.firebasestorage.app",
  messagingSenderId: "632373123625",
  appId: "1:632373123625:web:e84d0061322825eb92da38",
  measurementId: "G-YFPNX5LM20"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Referencia a la colección de tareas
const tasksCollection = db.collection("tasks");

// Elementos del DOM
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Event listeners
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') addTask();
});

// Cargar tareas
function loadTasks() {
  taskList.innerHTML = '<div class="loading">Cargando tareas...</div>';
  
  tasksCollection.orderBy('createdAt', 'desc').onSnapshot(snapshot => {
    if (snapshot.empty) {
      taskList.innerHTML = '<div class="loading">No hay tareas. ¡Añade una!</div>';
      return;
    }
    
    taskList.innerHTML = '';
    snapshot.forEach(doc => {
      const task = doc.data();
      const taskItem = createTaskElement(doc.id, task);
      taskList.appendChild(taskItem);
    });
  }, error => {
    console.error("Error cargando tareas:", error);
    taskList.innerHTML = `<div class="error">Error: ${error.message}</div>`;
  });
}

// Crear elemento de tarea en el DOM
function createTaskElement(id, task) {
  const taskItem = document.createElement('div');
  taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
  taskItem.innerHTML = `
    <span class="task-title">${task.title}</span>
    <div class="task-actions">
      <button class="btn complete-btn">${task.completed ? 'Reabrir' : 'Completar'}</button>
      <button class="btn delete-btn">Eliminar</button>
    </div>
  `;
  
  // Event listeners para los botones de cada tarea
  const completeBtn = taskItem.querySelector('.complete-btn');
  const deleteBtn = taskItem.querySelector('.delete-btn');
  
  completeBtn.addEventListener('click', () => toggleTaskStatus(id, !task.completed));
  deleteBtn.addEventListener('click', () => deleteTask(id));
  
  return taskItem;
}

// Añadir nueva tarea
async function addTask() {
  const title = taskInput.value.trim();
  if (!title) return;
  
  try {
    await tasksCollection.add({
      title,
      completed: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    taskInput.value = '';
  } catch (error) {
    console.error("Error añadiendo tarea:", error);
    alert('No se pudo añadir la tarea. Intenta de nuevo.');
  }
}

// Cambiar estado de la tarea
async function toggleTaskStatus(id, completed) {
  try {
    await tasksCollection.doc(id).update({ completed });
  } catch (error) {
    console.error("Error actualizando tarea:", error);
    alert('No se pudo actualizar la tarea. Intenta de nuevo.');
  }
}

// Eliminar tarea
async function deleteTask(id) {
  if (!confirm('¿Estás seguro de que quieres eliminar esta tarea?')) return;
  
  try {
    await tasksCollection.doc(id).delete();
  } catch (error) {
    console.error("Error eliminando tarea:", error);
    alert('No se pudo eliminar la tarea. Intenta de nuevo.');
  }
}

// Cargar tareas al iniciar la aplicación
document.addEventListener('DOMContentLoaded', loadTasks);