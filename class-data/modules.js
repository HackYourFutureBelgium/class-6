// organization name can be dynamically configured for forkability

const modules = [
  {
    name: 'HTML, CSS & GitHub',
    status: 'complete',
    repos: [
      {
        name: 'HTML-CSS-GitHub',
        paths: [
          'homework/week-1-project',
          'homework/week-2-project',
          'homework/week-3-project',
          'homework/module-exercises',
        ],
        live: true,
      }
    ]
  },
  {
    name: 'javascript 1',
    status: 'complete',
    repos: [
      {
        name: 'javascript-1',
        paths: [
          'week-1-project',
          'week-2-project',
          'week-3-project',
          'module-exercises',
        ],
        live: true,
      }
    ]
  },
  {
    name: 'javascript 2',
    status: 'complete',
    repos: [
      {
        name: 'javascript-2',
        paths: [
          'week-1-project',
          'week-2-project',
          'week-3-project',
        ],
        live: true,
      }
    ]
  },
  {
    name: 'javascript 3',
    projectNumber: 1,
    status: 'complete',
    repos: [
      {
        name: 'javascript-3',
        paths: [
          'dom-manipulation',
          'dom-components',
          'event-loop',
          'fetching-data',
          'closure',
          'classes'
        ],
        live: true,
      },
      {
        name: 'practical-javascript',
        live: true,
      },
      {
        name: 'github-api-crash-course',
        live: true,
      }
    ]
  },
  {
    name: 'Node JS',
    status: 'in progress',
    projectNumber: 2,
    repos: [
      {
        name: 'javascript-exercises',
        live: false,
        type: 'Exercises',
        paths: {
          paths: [
            'helloWorld/report.txt',
            'repeatString/report.txt',
            'reverseString/report.txt',
            'tempConversion/report.txt',
            'getTheTitles/report.txt',
            'findTheOldest/report.txt',
            'calculator/report.txt',
          ],
          render: (username, repo, path) => {
            path = path ? path : '';
            fetch(`https://${username}.github.io/${repo}/${path}`)
              .then(resp => resp.text())
              .then(report => {
                console.group(`${username}: ${repo}/${path}`)
                console.log(report);
                console.groupEnd();
              })
              .catch(err => console.log(err));
          }
        }
      },
      {
        name: 'pokedex-api',
        live: true,
        type: 'Project',
        paths: {
          paths: ['functions/report.json'],
          render: (username, repo, path) => {
            path = path ? path : '';
            fetch(`https://${username}.github.io/${repo}/${path}`)
              .then(resp => resp.json())
              .then(report => {
                console.group(`${username}: ${repo}/${path}`)
                console.log(report);
                console.groupEnd();
              })
              .catch(err => console.log(err));
          }
        }
      }
    ]
  },
]
