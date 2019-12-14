
function renderLinkButtons(student, repo, path, render) {
  // can eventually argsObj this

  const container = document.createElement('div');
  container.style.display = 'inline';

  const base = repo.url
    ? repo.url
    : 'https://' + student.userName + '.github.io/' + repo.name;

  const gitPathing = repo.url
    ? ''
    : '/tree/master/';

  const pagesCheck = path
    ? base + '/' + path
    : base + '/index.html';

  fetch(pagesCheck)
    .then(resp => {
      if (resp.ok == true && resp.status !== 404) {

        if (repo.live) {

          const base = repo.url
            ? repo.url
            : 'https://' + student.userName + '.github.io/' + repo.name;

          const liveButton = document.createElement('button');
          liveButton.innerHTML = 'live site';

          const a = document.createElement('a');
          a.href = path
            ? base + '/' + path
            : base;
          a.target = '_blank';
          a.appendChild(liveButton);

          container.appendChild(a);
        }

        const sourceButton = document.createElement('button');
        sourceButton.innerHTML = 'review source';

        const a = document.createElement('a');
        a.href = path
          ? 'https://github.com/' + student.userName + '/' + repo.name + gitPathing + path
          : 'https://github.com/' + student.userName + '/' + repo.name;
        a.target = '_blank';
        a.appendChild(sourceButton);

        container.appendChild(a);


        if (typeof render === 'function') {
          const logButton = document.createElement('button');
          logButton.innerHTML = 'log report';
          logButton.onclick = () => {
            repo.paths.render(student.userName, repo.name, path);
          }
          container.appendChild(logButton);
        }

      } else {
        const code = document.createElement('code');
        code.innerHTML = '-- nope --';

        container.appendChild(code);
      }
    })
    .catch(err => {
      console.log(err);

      const code = document.createElement('code');
      code.innerHTML = '-- ' + err.message + ' --';

      container.appendChild(code);
    })

  return container;

}
