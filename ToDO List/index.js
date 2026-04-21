let form=document.getElementById("form");

// Selects the <form> element from HTML using its id

const allTasks=[]; //Creates an empty array
                    //  Stores all user tasks here


    // display tasks only
    const renderTasks = () => { //Only for displaying (no adding here)
    let display=document.getElementById("display")  //Selects the <ul> where tasks will be shown

    display.innerHTML = allTasks  //Starts updating the UI
                                    // Takes all tasks from array
  
  
.map((task,index) => //Loops through each task
                     //  index is used for delete functionality
    `<li>${task} 
  <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
  </li>`)           //Creates HTML for each task
  //  Shows task text + delete button
  // onclick calls delete function with index

  .join(""); //Combines all list items into one string
                //Displays them properly


};



    // add task
const validateForm = (event) => {   //Function runs when form is submitted
    event.preventDefault();           //Stops page refresh after submit

    let userInput = event.target.ui;      //Gets input field using name="ui"

    allTasks.push(userInput.value);      //allTasks.push(userInput.value);

    renderTasks();                 // Calls function to update the task (UI)list display

    userInput.value = "";          // Clears the input field after adding task
};

// delete task
const deleteTask = (index) => {  //Function to delete a task
    allTasks.splice(index, 1);   //Removes 1 task at given index
    renderTasks();              // renderTasks();
};

form.addEventListener('submit',validateForm)







































