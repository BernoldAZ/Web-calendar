
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function addAppoiment() {
  var name = (document.getElementById("name").value);

  var start = (document.getElementById("start").value);
  var minute_start = parseInt(start[3] + start[4]) /60;
  var hour_start = parseInt(start[0] + start[1]) - 8 + minute_start;
  var hour_top = hour_start*100 + hour_start*4;

  var end = (document.getElementById("end").value);
  var minute_end = parseInt(end[3] + end[4]) /60;
  var hour_end = parseInt(end[0] + end[1]) - 8 + minute_end;
  var hour_botton = (hour_end-hour_start)*100 + hour_end*3;


  var days_name = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
  var days_selected = [0,0,0,0,0];

  if(document.getElementById("MondayCheck").checked == true){days_selected[0] = 1};
  if(document.getElementById("TuesdayCheck").checked == true){days_selected[1] = 1};
  if(document.getElementById("WednesdayCheck").checked == true){days_selected[2] = 1};
  if(document.getElementById("ThursdayCheck").checked == true){days_selected[3] = 1};
  if(document.getElementById("FridayCheck").checked == true){days_selected[4] = 1};

  var days_appoiment = "";
  for (let index = 0; index < days_selected.length; index++) {
    if(days_selected[index] == 1){days_appoiment = days_appoiment + days_name[index] + " "}
  }
  
  var appoiment = "Appoiment: " + name + ", Start: " + start + ", Finish: " + end + ", Days: " + days_appoiment + " Added";

  window.alert(appoiment);


  for (let index = 0; index < days_selected.length; index++) {
    if(days_selected[index] == 1){
      // create a new div element
      var div = document.createElement("div");
      div.style.position = "absolute";
      div.style.display = "block";
      div.style.width = "100%";
      div.style.height = hour_botton + "%";
      div.style.background = "rgb(140, 161, 255)";
      div.style.top = hour_top + "%";

      const newContent = document.createTextNode(name);
      div.appendChild(newContent);
      document.getElementById(days_name[index]).appendChild(div);
    }
  }
}