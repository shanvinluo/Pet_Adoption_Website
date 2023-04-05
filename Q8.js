function getCurrentDate() {
    const today = new Date();
    const hour=today.getHours();
    const min=today.getMinutes();
    const sec=today.getSeconds();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayOfWeek = daysOfWeek[today.getDay()];
    const month = monthsOfYear[today.getMonth()];
    const day = today.getDate();
    const year = today.getFullYear();
    if (min<10){
    return `${hour}:0${min}:${sec}<br/>${dayOfWeek}, ${month} ${day}, ${year}`;}
    if (sec<10){
      return `${hour}:${min}:0${sec}<br/>${dayOfWeek}, ${month} ${day}, ${year}`;}
      if (min<10&&sec<10){
        return`${hour}:0${min}:0${sec}<br/>${dayOfWeek}, ${month} ${day}, ${year}`;}
    else{
      return `${hour}:${min}:${sec}<br/>${dayOfWeek}, ${month} ${day}, ${year}`;
    }
  }
  function validateForm() {
    const inputs1 = document.getElementsByName("Dog/Cat");
    const inputs2 = document.getElementsByName("Gender");
    const inputs3 = document.getElementsByName("Friendly");
    const inputs4 = document.getElementsByName("Family");
    const inputs5 = document.getElementsByName("age");
    const inputs6 = document.getElementsByName("breed");
    var capsule1 = false;
    var capsule2 = false;
    var capsule3 = false;
    var capsule4 = false;
    var capsule5 = false;
    var capsule6 = false;
    for (let i = 0; i < inputs1.length; i++) {
      const input = inputs1[i];
      if (input.name === "Dog/Cat" && input.checked) {
        capsule1 = true;
        break;
      }
    }
    for (let i = 0; i < inputs2.length; i++) {
      const input = inputs2[i];
      if (input.name === "Gender" && input.checked) {
        capsule2 = true;
        break;
      }
    }
    for (let i = 0; i < inputs3.length; i++) {
      const input = inputs3[i];
      if (input.name === "Friendly" && input.checked) {
        capsule3 = true;
        break;
      }
    }
    for (let i = 0; i < inputs4.length; i++) {
      const input = inputs4[i];
      if (input.name === "Family" && input.checked) {
        capsule4 = true;
        break;
      }
    }
    if (inputs5!==""){
      capsule5 = true;
    }
    if (inputs6!==""){
      capsule6 = true;
    }
    if (!capsule1 || !capsule2 || !capsule3 || !capsule4||!capsule5||!capsule6) {
      alert("Please don't leave anything blank!");
    }
  }
  function validateFormGiveaway() {
    const inputs1 = document.getElementsByName("Dog/Cat[]");
    const inputs2 = document.getElementsByName("Gender[]");
    const inputs3 = document.getElementsByName("Friendly[]");
    const inputs4 = document.getElementsByName("Family[]");
    const inputs5 = document.getElementsByName("age");
    const inputs6 = document.getElementsByName("breed");
    var capsule1 = false;
    var capsule2 = false;
    var capsule3 = false;
    var capsule4 = false;
    var capsule5 = false;
    var capsule6 = false;
    for (let i = 0; i < inputs1.length; i++) {
      const input = inputs1[i];
      if (input.name === "Dog/Cat[]" && input.checked) {
        capsule1 = true;
        break;
      }
    }
    for (let i = 0; i < inputs2.length; i++) {
      const input = inputs2[i];
      if (input.name === "Gender[]" && input.checked) {
        capsule2 = true;
        break;
      }
    }
    for (let i = 0; i < inputs3.length; i++) {
      const input = inputs3[i];
      if (input.name === "Friendly[]" && input.checked) {
        capsule3 = true;
        break;
      }
    }
    for (let i = 0; i < inputs4.length; i++) {
      const input = inputs4[i];
      if (input.name === "Family[]" && input.checked) {
        capsule4 = true;
        break;
      }
    }
    if (inputs5.value !== ""){
      capsule5 = true;
    }
    if (inputs6.value !== ""){
      capsule6 = true;
    }
    const inputsTextbox = document.getElementsByName("required");
    var capsule7 = true;
    for (let i = 0; i < inputsTextbox.length; i++) {
      const input = inputsTextbox[i];
      if (input.value.trim() === "") {
        capsule7 = false;
        break;
      }
    }
    const email=document.getElementsByName("requiredEmail")[0].value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!regex.test(email)) {
      return alert("Please enter a valid email address");}

    if (!capsule1 || !capsule2 || !capsule3  || !capsule4 || !capsule5 || !capsule6 || !capsule7) {
      alert("Please don't leave anything blank!");
    }
  }
  