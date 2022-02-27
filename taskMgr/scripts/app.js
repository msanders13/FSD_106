var nonImportantClass = "far fa-star";
var importantClass = "fas fa-star";
var isImportant = false;
var isFormVisible = true;

function toggleImportant() {
    console.log("icon clicked!");

    if(isImportant) {
        // non important
        isImportant = false;
        $("#iImportant").removeClass(importantClass);
        $("#iImportant").addClass(nonImportantClass);
    }
    else {
        // important
        $("#iImportant").removeClass(nonImportantClass);
        $("#iImportant").addClass(importantClass);
        isImportant = true;
    }
}

function toggleForm() {
    if(isFormVisible) {
        //hide
        isFormVisible = false;
        $("#form").hide();
    }
    else {
        //show
        isFormVisible = true;
        $("#form").show();
    }
}

function saveTask() {
    console.log("Saving task");

    let title = $("#txtTitle").val();
    let desc = $("#txtDescription").val();
    let location = $("#txtLocation").val();
    let dueDate = $("#seldueDate").val();
    let color = $("#selColor").val();

    let task = new Task(title, desc, location, dueDate, color);
    console.log(task);
}



function init() {
    console.log("Task Manager");

    //events
    $("#iImportant").click(toggleImportant);
    $("#btnToggleForm").click(toggleForm);

    //load data

    $("#btnSave").click(saveTask);
}
window.onload = init;