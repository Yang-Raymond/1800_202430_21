function enterEditMode() {
    // Enable input fields for editing
    document.querySelectorAll('input').forEach(input => input.disabled = false);
  
    // Replace buttons with Save and Cancel
    const buttonGroup = document.getElementById('button-group');
    buttonGroup.innerHTML = `
      <button type="button" class="btn-blue" id="save-btn" id="saveInfoButton" onclick="saveChanges()">Save</button>
      <button type="button" class="btn-red" id="cancel-btn" id="cancelEditInfoButton" onclick="cancelChanges()">Cancel</button>
    `;
  }
  
  function saveChanges() {
    // Simulate saving changes and return to view mode
    alert('Changes saved!');
    exitEditMode();
  }
  
  function cancelChanges() {
    // Discard changes and return to view mode
    alert('Changes canceled.');
    exitEditMode();
  }
  
  function exitEditMode() {
    // Disable input fields
    document.querySelectorAll('input').forEach(input => {
      input.disabled = true;
    });
  
    // Replace buttons with Change Information and Logout
    const buttonGroup = document.getElementById('button-group');
    buttonGroup.innerHTML = `
      <button type="button" class="btn-blue" id="change-btn" id="editInfoButton" onclick="enterEditMode()">Change Information</button>
      <button type="button" class="btn-red" id="logout-btn" id="logoutButton">Logout</button>
    `;
  }