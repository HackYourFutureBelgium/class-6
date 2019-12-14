function renderStudentThumbnail(student) {

  const studentImg = document.createElement('img');
  studentImg.alt = student.name + ' - ' + student.userName;
  studentImg.style = 'height:100px;width:100px;';

  fetch('https://api.github.com/users/' + student.userName)
    .then(resp => resp.json())
    .then(user => user.avatar_url
      ? studentImg.src = user.avatar_url
      : null
    )
    .catch(err => console.log(err));

  const nameComponent = document.createElement('p');
  nameComponent.innerHTML = student.name + ' - ' + student.userName;


  const container = document.createElement('div');
  container.appendChild(studentImg);
  container.appendChild(nameComponent);


  return container;

}
