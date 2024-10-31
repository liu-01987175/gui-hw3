// Form and container references
const form = document.getElementById("tableForm");
const tableContainer = document.getElementById("tableContainer");

// event listener for form
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // gets user inputs
  const startRow = parseInt(document.getElementById("startRow").value);
  const endRow = parseInt(document.getElementById("endRow").value);
  const startCol = parseInt(document.getElementById("startCol").value);
  const endCol = parseInt(document.getElementById("endCol").value);

  // clears and validates
  tableContainer.innerHTML = "";
  if (!validateInput(startRow, endRow, startCol, endCol)) return;

  tableContainer.appendChild(generateTable(startRow, endRow, startCol, endCol));
});

// validates input (must be a number between -50 to 50)
function validateInput(startRow, endRow, startCol, endCol) {
  if (isNaN(startRow) || isNaN(endRow) || isNaN(startCol) || isNaN(endCol)) {
    errorMessage.textContent = "Please enter valid numbers.";
    return false;
  }
  if (startRow > endRow || startCol > endCol) {
    errorMessage.textContent = "Start value must be greater than the end value.";
    return false;
  }
  if (startRow < -50 || endRow > 50 || startCol < -50 || endCol > 50) {
    errorMessage.textContent = "Numbers must be between -50 and 50.";
    return false;
  }
  return true;
}

// generates multiplication table
function generateTable(startRow, endRow, startCol, endCol) {
  const table = document.createElement("table");

  // header row
  const headerRow = document.createElement("tr");
  headerRow.appendChild(document.createElement("th"));

  for (let col = startCol; col <= endCol; col++) {
    const th = document.createElement("th");
    th.textContent = col;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  // table rows with multiplication values
  for (let row = startRow; row <= endRow; row++) {
    const tr = document.createElement("tr");

    const rowHeader = document.createElement("th");
    rowHeader.textContent = row;
    tr.appendChild(rowHeader);

    for (let col = startCol; col <= endCol; col++) {
      const td = document.createElement("td");
      td.textContent = row * col;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  return table;
}