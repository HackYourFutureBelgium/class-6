function renderHome(modules, students) {
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
      moduleViewButton.innerHTML = module.name;
      moduleViewButton.onclick = () => {
        document.getElementById('root').innerHTML = '';
        document.getElementById('root').appendChild(renderModule(module, students));
      };

      const newLi = document.createElement('li');
      newLi.appendChild(moduleViewButton);
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
