'use strict';
var gCurrProject;



$(document).ready(init);

function init() {
  createProjects()
  renderProjects()
  $('.portfolio-link').click(function () { onOpenModal($(this).data('proj-id')); });
}

function renderProjects() {
  var projects = getProjectsForDisplay()
  var strHTMLs = projects.map(function (project) {
    return renderProject(project)
  })
  var elProjects = document.querySelector('.adi-proj')
  elProjects.innerHTML = strHTMLs.join('')
}

function renderProject(project) {
  var strHTML = `<div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" data-proj-id="${project.id}" href="#portfolioModal1">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="${project.thumbImgURL}" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${project.name}</h4>
      <p class="text-muted">${project.label}</p>
    </div>
  </div>`
  return strHTML;
}

function onOpenModal(projId) {
  //RENDER THE WHOLE THING UGH DAMMIT
  console.log('entered onOpenModal');
  var project = getProjectById(projId);
  gCurrProject = project;
  var elModal = document.querySelector('.portfolio-modal');
  elModal.querySelector('h2').innerText = project.name;
  elModal.querySelector('.item-intro').innerText = project.title;
  elModal.querySelector('.img-fluid').setAttribute('src', project.fullImgURL);
  elModal.querySelector('.proj-desc').innerText = project.desc;
  // elModal.querySelector('.link-to-git')
}


// function onOpenModal(projId){
//   var project = getProjectById(projId)
//   return renderModal(modal);
// }

// function renderModal(project) {
//   var strHTML = `<div class="modal-dialog">
//   <div class="modal-content">
//     <div class="close-modal" data-dismiss="modal">
//       <div class="lr">
//         <div class="rl"></div>
//       </div>
//     </div>
//     <div class="container">
//       <div class="row">
//         <div class="col-lg-8 mx-auto">
//           <div class="modal-body">
//             <h2>${project.name}</h2>
//             <p class="item-intro text-muted">${project.title}</p>
//             <img class="img-fluid d-block mx-auto" src="${project.fullImgURL}" alt="">
//             <p class="proj-desc">${project.desc}</p>
//             <button class="link-to-git" href="${project.url}">Check it out!</button>
//             <button class="btn btn-primary" data-dismiss="modal" type="button">
//                 <i class="fa fa-times"></i>
//                 Close Project</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>`
//   return strHTML;
// }