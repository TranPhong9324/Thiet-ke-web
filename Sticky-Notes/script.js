document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector(".add-btn");
  const row = document.getElementById("row");

  addButton.addEventListener("click", createNote);

  function createNote() {
      let notes = localStorage.getItem("notes");
      const noteHeading = "Note Heading";
      const noteText = "Note text";
      
      if (!notes) {
          notes = [];
      } else {
          notes = JSON.parse(notes);
      }
      
      const newNote = { title: noteHeading, text: noteText };
      notes.push(newNote);
      localStorage.setItem("notes", JSON.stringify(notes));
      
      showNotes();
  }

  function showNotes() {
      let notes = localStorage.getItem("notes");
      if (!notes) {
          notes = [];
      } else {
          notes = JSON.parse(notes);
      }

      let html = "";
      const d = new Date();
      const months = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
      ];

      notes.forEach((note, index) => {
          html += `
              <div class="notebox">
                  <div class="notedatecontainer"><h6>${d.getDate()} ${months[d.getMonth()]}</h6></div>
                  <textarea class="noteheading" id="noteheading${index}" onchange="saveNote(${index})" maxlength="25">${note.title}</textarea>
                  <textarea class="notedata" style="height: 190px" id="notedata${index}" onchange="saveNote(${index})">${note.text}</textarea>
                  <div class="noteaction">
                      <i class="fa fa-floppy-o savebutton" id="${index}" onclick="saveNote(${index})"></i>
                      <i class="fa fa-trash deletebutton" id="${index}" onclick="deleteNote(${index})"></i>
                  </div>
              </div>`;
      });

      row.innerHTML = notes.length ? html : `<h4>No Notes Yet! Please add a note. <img src="arrow.png" width="50"/></h4>`;
  }

  window.deleteNote = function (index) {
      let notes = JSON.parse(localStorage.getItem("notes"));
      notes.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notes));
      showNotes();
  }

  window.saveNote = function (index) {
      let notes = JSON.parse(localStorage.getItem("notes"));
      const noteTitle = document.getElementById(`noteheading${index}`).value;
      const noteData = document.getElementById(`notedata${index}`).value;

      notes[index] = { title: noteTitle, text: noteData };
      localStorage.setItem("notes", JSON.stringify(notes));
      showNotes();
  }

  showNotes();
});
