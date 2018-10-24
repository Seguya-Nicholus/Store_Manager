function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[5];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


  //Below function Executes on click of login button
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "admin" && password == "admin") {
    window.location = "Admin/welcome_admin.html"; //redirecting to other page
    return false;
  }
  else if (username == "attendant" && password == "123") {
    window.location = "Attendant/welcome_attendant.html"; //redirecting to other page
    return false;

  }
  else {
    alert("Wrong user name and password;");
  }
}
  

function navigate_admin() {
  window.location.href = "add_admin.html";
}

function navigate_attendant() {
  window.location.href = "add_attendant.html";
}
