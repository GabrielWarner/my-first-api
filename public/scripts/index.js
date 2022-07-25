// //creating constant to hold form element
// const formEl = document.getElementById("tip-form")

// //function to take values from input field and create a new family member object
// const createFamMember = (e) => {
// e.prevenDefault()

// const name = document.getElementById("familyName").value
// const relation = document.getElementById("familyRelation").value

// //creating new object following the form of the json file
// const famMember = {
//     name: name,
//     relation: relation,
// }
// //creating a fetch request to add the family member to the API
// fetch('api/tips', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(famMember),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       alert(data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });

// }
// console.log(formEl)
// //add event listener to trigger when a user clicks submit
// formEl.addEventListener('submit', createFamMember(e))

document.querySelector("#fam-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const famMember = {
    name: document.querySelector("#familyName").value,
    relation: document.querySelector("#familyRelation").value,
  };
  fetch("/api/family", {
    method: "POST",
    body: JSON.stringify(famMember),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      location.reload();
    });
});
