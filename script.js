const form = document.getElementById('studentForm');
const tableBody = document.querySelector('#recordTable tbody');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  
  const password = document.getElementById('password').value;
  const cnic = document.getElementById('cnic').value;
  const dob = document.getElementById('dob').value;
  const applyFor = document.querySelector('input[name="applyFor"]:checked')?.value || '';
  const testCity = document.getElementById('city').value;

  const subjectCheckboxes = document.querySelectorAll('input[name="subjects"]:checked');
  let subjects = [];
  subjectCheckboxes.forEach(cb => subjects.push(cb.value));
  if (subjects.length < 3) {
    alert("Please select at least 3 subjects.");
    return;
  }

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${password}</td>
    <td>${cnic}</td>
    <td>${dob}</td>
    <td>${subjects.join(', ')}</td>
    <td>${applyFor}</td>
    <td>${testCity}</td>
  `;
  tableBody.appendChild(newRow);

  form.reset();
});
