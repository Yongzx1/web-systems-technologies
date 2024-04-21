document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registrationForm");
  const registrationBody = document.getElementById("registrationBody");

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");

    if (firstName.value == "") {
      alert("Please add first name");
      return;
    }

    if (lastName.value == "") {
      alert("Please add last name");
      return;
    }

    register(firstName.value, lastName.value);
    firstName.value = "";
    lastName.value = "";
  });

  function register(firstName, lastName) {
    const appendNewRow = document.createElement("tr");
    appendNewRow.innerHTML =
      "<td class='border p-2'>" +
      firstName +
      "</td>" +
      "<td class='border p-2'>" +
      lastName +
      "</td>" +
      '<td class="border p-2"><button class="bg-blue-500 text-white p-1  editMe"><i class="fas fa-edit"></i></button><button class="bg-red-500 text-white p-1 ml-1 removeMe"><i class="fas fa-trash-alt"></i></button>' +
      "</td>";

    registrationBody.appendChild(appendNewRow);
  }

  registrationBody.addEventListener("click", function (event) {
    if (event.target.classList.contains("removeMe")) {
      event.target.closest("tr").remove();
    } else if (event.target.classList.contains("editMe")) {
      const currentRow = event.target.closest("tr");
      const firstName = currentRow.querySelector("td:first-child").textContent;
      const lastName = currentRow.querySelector("td:nth-child(2)").textContent;

      // Update form fields with selected row data
      document.getElementById("firstName").value = firstName;
      document.getElementById("lastName").value = lastName;
    }
  });
});
