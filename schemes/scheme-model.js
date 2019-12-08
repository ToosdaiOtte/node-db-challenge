const db = require('../data/db-config.js');

// GET
function getProjects(){
    return db
        .select('*')
        .from('projects')
}

function getResources() {
    return db
        .select('*')
        .from('resources')
}

function getTasks() {
    return db("projects")
      .join("tasks", "tasks.project_id", "projects.id")
      .select(
        "projects.name as project",
        "projects.description as project_description",
        "tasks.description",
        "tasks.notes",
        "tasks.completed",
        "tasks.project_id"
      );
}

// POST
function addResource(resourceData) {
    return db('resources')
        .insert(resourceData)      
}

function addProject(projectData) {
    return db('projects')
        .insert(projectData)
}

function addTask(taskData) {
    return db('tasks')
        .insert(taskData)
}


module.exports = {
    getProjects,
    getResources,
    getTasks,
    addResource,
    addProject,
    addTask
}