function renderModule(module, students) {

  history.pushState({}, null, '/class-6/?module=' + module.name);

  const header = document.createElement('h2');
  header.innerHTML = module.name + ' (' + module.status + ')';
  const color = module.status === 'complete'
    ? 'green'
    : module.status === 'in progress'
      ? 'black'
      : module.status === 'to do'
        ? 'orange'
        : 'purple';

  header.style.color = color;

  const studentsUl = students
    .map(student => {
      const header = renderStudentThumbnail(student);
      header.onclick = () => {
        document.getElementById('root').innerHTML = '';
        document.getElementById('root').appendChild(renderStudent(student, modules));
      };
      const modulesList = module.repos
        .map(repo => {
          const li = document.createElement('li');
          li.appendChild(header);
          li.appendChild(renderRepo(student, repo));
          li.appendChild(document.createElement('br'));
          return li;
        })
        .reduce((ul, li) => {
          ul.appendChild(li);
          return ul;
        }, document.createElement('ul'))

      const container = document.createElement('div');
      container.appendChild(header);
      container.appendChild(modulesList);

      return container;
    })
    .reduce((div, ul) => {
      div.appendChild(ul);
      return div;
    }, document.createElement('div'))

  const container = document.createElement('div');
  container.appendChild(header);
  if (typeof module.projectNumber === 'number') {

    const projectBoardButton = document.createElement('button');
    projectBoardButton.innerHTML = 'Homework Project Board';

    const pbA = document.createElement('a');
    pbA.target = '_blank';
    pbA.href = "https://github.com/HackYourFutureBelgium/class-6/projects/" + module.projectNumber;
    pbA.appendChild(projectBoardButton);

    container.appendChild(pbA);
    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));
  }
  container.appendChild(studentsUl);

  return container;
}
