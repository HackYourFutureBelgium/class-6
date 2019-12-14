function renderStudent(student, modules) {

  history.pushState({}, null, '/class-6/?student=' + student.name);

  const header = renderStudentThumbnail(student);

  const githubButton = document.createElement('button');
  githubButton.innerHTML = 'github.com/' + student.userName;
  githubButton.style = 'height:35px;'

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/' + student.userName;
  githubLink.target = '_blank';
  githubLink.appendChild(githubButton);

  const portfolioButton = document.createElement('button');
  portfolioButton.innerHTML = student.userName + '.github.io';
  portfolioButton.style = 'height:35px;'

  const portfolioLink = document.createElement('a');
  portfolioLink.href = 'https://' + student.userName + '.github.io';
  portfolioLink.target = '_blank';
  portfolioLink.appendChild(portfolioButton);

  const modulesUl = modules
    .map(module => {
      if (module.status === 'to do') return document.createElement('div');

      const header = document.createElement('button');
      header.innerHTML = module.name;
      header.onclick = () => {
        document.getElementById('root').innerHTML = '';
        // reading students from global
        document.getElementById('root').appendChild(renderModule(module, students));
      };
      header.style = 'height:35px;'

      const reposUl = module.repos
        .map(repo => {
          const li = document.createElement('li');
          li.appendChild(header);
          li.appendChild(renderRepo(student, repo));
          return li;
        })
        .reduce((ul, li) => {
          ul.appendChild(li);
          ul.appendChild(document.createElement('br'));
          return ul;
        }, document.createElement('ul'))

      const container = document.createElement('div');
      container.appendChild(header);
      container.appendChild(reposUl);

      return container;
    })
    .reduce((div, ul) => {
      div.appendChild(ul);
      return div;
    }, document.createElement('div'))

  const container = document.createElement('div');
  container.appendChild(document.createElement('br'));
  container.appendChild(header);
  container.appendChild(githubLink);
  container.appendChild(portfolioLink);
  container.appendChild(document.createElement('br'));
  container.appendChild(document.createElement('br'));
  container.appendChild(modulesUl);

  return container;
}
