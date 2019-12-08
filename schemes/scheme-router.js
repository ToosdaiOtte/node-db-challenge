const express = require('express');
const Schemes = require('./scheme-model');
const router = express.Router();

router.get('/', (req, res) => {

    Schemes.getProjects()
    .then(projects => {
        const convertBoolean = projects.map(project => {
            if(project.completed == 0){
                return {...project, completed: false}
            } else if (project.completed == 1){
                return {...project, completed: true}
            }
        });
        res.json(convertBoolean);
    })
    .catch(err => {
        res.status(500).json({
            message: 'Failed to fetch projects',
            err
        })
    })
});

router.get('/resources', (req, res) => {
    Schemes.getResources()
    .then(resources => {
        res.json(resources)
    })
    .catch(err => {
        res.status(500).json({
            message: 'Failed to fetch resources',
            err
        })
    })
});

router.get('/tasks', (req, res) => {

    Schemes.getTasks()
        .then(task => {
            const convertBoolean = task.map(task => {
                if(task.completed == 0){
                    return {...task, completed: false}
                } else if (task.completed == 1){
                    return {...task, completed: true}
                }
            });
            res.status(200).json(convertBoolean)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to fetch tasks',
                err
            })
        })
});

router.post('/resources', (req, res) => {
    const resourceData = req.body;

    Schemes.addResource(resourceData)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to add resource',
                err
            })
        })
});

router.post('/', (req, res) => {
    const projectData = req.body;

    Schemes.addProject(projectData)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to add project',
                err
            })
        })
});

router.post('/tasks', (req, res) => {
    const taskData = req.body;

    Schemes.addTask(taskData)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to add task',
                err
            })
        })
});

module.exports = router;