// Task management system
const tasks = [];
let nextId = 1;

// Add a new task
function addTask(name, description) {
  const newTask = {
    id: nextId++,
    name,
    description
  };
  tasks.push(newTask);
  return newTask;
}

// Get all tasks
function getAllTasks() {
  return tasks;
}

// Get a task by its ID
function getTaskById(id) {
  return tasks.find(task => task.id === id);
}

// Update a task by ID
function updateTask(id, updatedFields) {
  const taskIndex = tasks.findIndex(task => task.id === id);
  
  if (taskIndex === -1) {
    return null;
  }
  
  tasks[taskIndex] = {
    ...tasks[taskIndex],
    ...updatedFields
  };
  
  return tasks[taskIndex];
}

// Delete a task by ID
function deleteTask(id) {
  const taskIndex = tasks.findIndex(task => task.id === id);
  
  if (taskIndex === -1) {
    return false; 
  }
  
  tasks.splice(taskIndex, 1);
  return true;
}

// Example usage
addTask("Complete assignment", "Finish the JavaScript assignment by Friday");
addTask("Buy groceries", "Milk, eggs, bread");
console.log(getAllTasks());
updateTask(1, { name: "Complete assignment ASAP" });
console.log(getTaskById(1));
deleteTask(2);
console.log(getAllTasks());