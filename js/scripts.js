//business logic
function Task(task) {
  this.task = task;
}

Task.prototype.remove = function() {
 this.remove();
}


//use interface logic

$(document).ready(function() {
  $("#newTask").submit(function(event) {
    event.preventDefault();

  var inputTask = $("input#newTask").val();
  var newTodo = new Task(inputTask + "!");

  $("ul#taskList").append("<li><span class='addTask'>" + newTodo.task +  "</li></span>");

  $(".addTask").last().click(function() {
    $()

  })
  });
});
