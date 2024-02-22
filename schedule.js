
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function addAppoiment() {
  var name = (document.getElementById("name").value);

  var start = (document.getElementById("start").value);
  var end = (document.getElementById("end").value);

  var days_name = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
  var days_selected = [0,0,0,0,0];

  if(document.getElementById("Monday").checked == true){days_selected[0] = 1};
  if(document.getElementById("Tuesday").checked == true){days_selected[1] = 1};
  if(document.getElementById("Wednesday").checked == true){days_selected[2] = 1};
  if(document.getElementById("Thursday").checked == true){days_selected[3] = 1};
  if(document.getElementById("Friday").checked == true){days_selected[4] = 1};

  var days_appoiment = "";
  for (let index = 0; index < days_selected.length; index++) {
    if(days_selected[index] == 1){days_appoiment = days_appoiment + days_name[index] + " "}
  }
  
  var appoiment = "Appoiment: " + name + ", Start: " + start + ", Finish: " + end + ", Days: " + days_appoiment + " Added";

  window.alert(appoiment);
}