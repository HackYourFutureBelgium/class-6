function renderHome(modules, students) {

  history.pushState({}, null, '/class-6');

  const studentsUl = students
    .map(student => {
      const studThumb = renderStudentThumbnail(student);
      studThumb.onclick = () => {
        document.getElementById('root').innerHTML = '';
        document.getElementById('root').appendChild(renderStudent(student, modules));
      };
      return studThumb;
    })
    .reduce((div, img) => {
      div.appendChild(img);
      return div;
    }, document.createElement('div'));


  const modulesUl = modules
    .map(module => {
      const moduleViewButton = document.createElement('button');
      moduleViewButton.innerHTML = module.name + ' (' + module.status + ')';
      const color = module.status === 'complete'
        ? 'green'
        : module.status === 'in progress'
          ? 'black'
          : module.status === 'to do'
            ? 'orange'
            : 'purple';

      moduleViewButton.style.color = color;
      moduleViewButton.onclick = module.status === 'to do'
        ? () => { }
        : () => {
          document.getElementById('root').innerHTML = '';
          document.getElementById('root').appendChild(renderModule(module, students));
        };

      const newLi = document.createElement('li');
      newLi.appendChild(moduleViewButton);
      if (typeof module.projectNumber === 'number') {

        const projectBoardButton = document.createElement('button');
        projectBoardButton.innerHTML = 'Homework Project Board';

        const pbA = document.createElement('a');
        pbA.target = '_blank';
        pbA.href = "https://github.com/HackYourFutureBelgium/class-6/projects/" + module.projectNumber;
        pbA.appendChild(projectBoardButton);

        newLi.appendChild(pbA);
      }

      return newLi;
    })
    .reduce((ul, li) => {
      ul.appendChild(li);
      return ul;
    }, document.createElement('ul'));

  const studentsHeader = document.createElement('h2');
  studentsHeader.innerHTML = 'Students';

  const modulesHeader = document.createElement('h2');
  modulesHeader.innerHTML = 'Modules';

  const container = document.createElement('div');
  container.appendChild(modulesHeader);
  container.appendChild(modulesUl);
  container.appendChild(studentsHeader);
  container.appendChild(studentsUl);

  return container;

}
