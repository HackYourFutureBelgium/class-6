
function renderRepo(student, repo) {
  const headerString = repo.name + ' : ' + (
    repo.hasOwnProperty('type')
      ? ' (' + repo.type + ') '
      : ''
  );

  const repoText = document.createTextNode(headerString);

  const repoList = document.createElement('li');

  const render = typeof repo.render === 'function'
    ? repo.render
    : null;

  repoList.appendChild(repoText);
  repoList.appendChild(renderLinkButtons(student, repo, null, render))

  if (repo.paths) {

    const paths = repo.paths instanceof Array
      ? repo.paths
      : repo.paths.paths;

    const render = typeof repo.paths.render === 'function'
      ? repo.paths.render
      : null;

    const pathsList = paths
      .map(path => {

        const pathText = document.createTextNode(path + ' : ');

        const li = document.createElement('li');
        li.appendChild(pathText);
        li.appendChild(renderLinkButtons(student, repo, path, render))
        return li;
      })
      .reduce((ul, li) => {
        ul.appendChild(li);
        return ul;
      }, document.createElement('ul'));

    repoList.appendChild(pathsList);
  }

  return repoList;
}

