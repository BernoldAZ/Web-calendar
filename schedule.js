
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function addAppoiment() {
  let name = (document.getElementById("name").value);

  let start = (document.getElementById("start").value);
  let minute_start = parseInt(start[3] + start[4]) /60;
  let hour_start = parseInt(start[0] + start[1]) - 8 + minute_start;
  let hour_top = hour_start*100 + hour_start*4;

  let end = (document.getElementById("end").value);
  let minute_end = parseInt(end[3] + end[4]) /60;
  let hour_end = parseInt(end[0] + end[1]) - 8 + minute_end;
  let hour_botton = (hour_end-hour_start)*100 + (hour_end-hour_start)*3;


  let days_name = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
  let days_selected = [0,0,0,0,0];

  if(document.getElementById("MondayCheck").checked == true){days_selected[0] = 1};
  if(document.getElementById("TuesdayCheck").checked == true){days_selected[1] = 1};
  if(document.getElementById("WednesdayCheck").checked == true){days_selected[2] = 1};
  if(document.getElementById("ThursdayCheck").checked == true){days_selected[3] = 1};
  if(document.getElementById("FridayCheck").checked == true){days_selected[4] = 1};

  let days_appoiment = "";
  
  for (let index = 0; index < days_selected.length; index++) {
    if(days_selected[index] == 1){
      days_appoiment = days_appoiment + days_name[index] + " "
      // create a new div element
      let div = document.createElement("div");
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

  let appoiment = "Appoiment: " + name + ", Start: " + start + ", Finish: " + end + ", Days: " + days_appoiment + " Added";
  window.alert(appoiment);
}

function warning() {
  return "You will lose your appoiments";
}

function message(){
  window.alert("Just one click is enough");
}

function newPointer(x) {
  x.style.cursor = "pointer";
}
function oldPointer(x) {
  x.style.cursor = "default";
}