//business logic
function Task(task) {
  this.task = task;
}

// Task.prototype.remove = function() {
//  this.remove();
// }


//use interface logic

$(document).ready(function() {
  $("#newTask").submit(function(event) {
    event.preventDefault();

  var inputTask = $("input#newTask").val();
  var newTodo = new Task(inputTask);

  $("ol#taskList").append("<li><span class='addTask'>" + newTodo.task +  "</li></span>");

  // $(".addTask").click(function() {
  //   this.remove(); // Remove clicked on text ( but not from list )
  //
  // })



  $("ol#taskList").children("li").click(function() {
    $(this).fadeOut();
    setTimeout(function(){
      $(this).remove();
    },2000)

  });

  })

  });
