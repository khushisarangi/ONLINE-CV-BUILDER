function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Add More Items");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Add More Items");

  let weOb = document.getElementById("aq");
  let weAddButtonOb = document.getElementById("aqAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

// generating cv
function generateCV() {
  // name
  let nameField = document.getElementById("nameField").value;
  document.getElementById("nameT1").innerHTML = nameField;
  document.getElementById("nameT2").innerHTML = nameField;
  // contact
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;
  // address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;
  // socialLink
  let linkedField = document.getElementById("linkedField").value; //linkedin
  document.getElementById("LinkedT").innerHTML = linkedField;

  let gitField = document.getElementById("gitField").value; //linkedin
  document.getElementById("gitT").innerHTML = gitField;
  // objective
  document.getElementById("objectieT").innerHTML =
    document.getElementById("objectiveField").value;
  //Experience
  let wes = document.querySelectorAll(".weField");
  let str = "";
  for (let e of wes) {
    str = str + `<li>${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = str;
  // Academic Qualification
  let aqs = document.querySelectorAll(".eqField");
  let str1 = "";
  for (let aq of aqs) {
    str1 = str1 + `<li>${aq.value}</li>`;
  }
  document.getElementById("aqT").innerHTML = str1;
  //for image
  let file = document.getElementById("imgField").files[0];
  console.log(file);
  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);
  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

function printCV() {
  document.getElementById("print_btn").style.visibility = "hidden";
  var cvContent = document.getElementById("cv-template");
  var printWindow = window.open("", "", "width=800,height=600");
  printWindow.document.write("<html><head><title>CV</title></head><body>");
  printWindow.document.write(cvContent.innerHTML);
  printWindow.document.write("</body></html>");
  printWindow.document.close();

  printWindow.print();

  // Close the new window after printing
  printWindow.close();

  // Show the print button again
  document.getElementById("print_btn").style.visibility = "visible";
}
