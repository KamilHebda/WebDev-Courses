const getUsers = (e) => {
  e.preventDefault();
  const usersNumber = document.querySelector('[name = "users-number"]').value;
  const usersGender = document.querySelector('[name = "gender"]').value;
  const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${usersGender === "both" ? "male,female" : usersGender}`;
  console.log(url);
  fetch(url) //obietnica - oczekujący (pending)
    // obietnica musi zostać rozstrzygnięta (spełnione | odrzucone)
    // wykonuje się then - pozytywnie
    .then(response => {
      if (response.status != 200) {
        throw Error("This is not 200 status")
      } else {
        return response.json() //Fetch API =json() z body wyodrębnia json
      }
    })
    .then(json => showUsers(json.results)) //wyświetlamy użytkowników
    //wykona się catch gdy rozstrzygnięcie - odrzucona
    .catch(err => console.log(err))
}

const showUsers = (users) => {
  const resultArea = document.querySelector('.user-list');
  resultArea.textContent = "";
  users.forEach(user => {
    const item = document.createElement('div');
    item.className = 'user';
    item.innerHTML = `<div class="user__name">${user.name.title.toUpperCase()} ${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}</div>
    <img class="user__image" src=${user.picture.medium}>`

    resultArea.appendChild(item);
  })
}

document.querySelector('.generator').addEventListener('submit', getUsers);