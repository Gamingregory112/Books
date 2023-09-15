var objPeople = [
  {
    username: "1",
    password: "1"
  }
]

function getInfo() {
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value
  window.alert(2144214);

  for (i = 0; i < objPeople.length; i++) {
    if (username == objPeople[i].username && password == objPeople[i].password) {
      window.alert(2144214);
    }
  }
}
