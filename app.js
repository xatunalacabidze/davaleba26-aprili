alert("ვებსაიტი დღეს არ მუშაობს!");
prompt("შეიყვანე სქესი?");

let userGender = prompt("შეიყვანე სქესი")
  console.log(userGender);

 if( userGender === "male"){
    document.write("მამრობითი")
 } else {
    document.write(" მდედრობითი")
 }



 let userConfirm = confirm("გაქვთ თუ არა მართვის მოწმობა?");
 console.log(userConfirm);
  if (userConfirm === true) {
      document.write("თქვენ არ გესაჭიროებათ გამოცდაზე გასვლა")
  }else{
      document.write("თქვენ გადიხართ გამოცდაზე!")
 }
    