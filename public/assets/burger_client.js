// on clicks
// form input grabber
$(function(){
  $("#add-burger").on("click", function(){
    var newBurg = {
      burger_name: $("#burg-name").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };
    $.post("/create/burger", newBurg, function(){
      location.reload();
    })
  })
  $(document).on("click", ".devour", function(){
    var devourID = $(this).attr("data-id")
    console.log(devourID)
    $.ajax("/update/burger/", {
      type: "PUT",
      data: devourID
    }).then(
      function() {
        
        location.reload();
      }
    );
  })
})
