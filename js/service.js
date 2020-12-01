'use strict';
var gProjects;

function getProjectsForDisplay() {
    return gProjects;
}

function createProjects() {
    var projects = [
        {
            id: 'minesweeper',
            name: 'Space Sweeper',
            title: 'Flag those moon mines!',
            desc: 'minesweeper in space',
            url: 'https://adisiera.github.io/Sprint1/',
            fullImgURL: '../img/portfolio/spacesweeper-img.jpg',
            thumbImgURL: '../img/portfolio/spacesweeper-thumbnail.jpeg',
            publishedAt: '21/11/2020',
            label: 'Game',
        },
        {
            id: 'tetris',
            name: 'Tetris',
            title: 'Better push those boxes',
            desc: 'play a little tetris',
            url: 'https://adisiera.github.io/Tetris/',
            fullImgURL: '../img/portfolio/tetris-img.jpg',
            thumbImgURL: '../img/portfolio/tetris-thumbnail.jpg',
            publishedAt: '30/11/2020',
            label: 'Game',
        }
    ]
    gProjects = projects;
}

function getProjectById(projId) {
    console.log('entered getProjectById');
    var project = gProjects.find(function (project) {
        return projId === project.id
    })
    return project
}