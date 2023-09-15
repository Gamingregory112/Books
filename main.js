var objPeople = [
  {
    username: "same",
    password: "same"
  }
]

function getInfo() {
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value

  for (i = 0; i < objPeople.length; i++) {
    if (username == objPeople[i].username && password == objPeople[i].password) {
      window.alert(username + " " + password);
    }
  }
}
