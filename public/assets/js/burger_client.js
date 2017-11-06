// on clicks
// form input grabber
$(function(){
  $("#add-burger").on("click", function(){
    var newBurg = {
      burger_name: $("#burg-name").val().trim(),
    }
    console.log(newBurg)
    $.post("/create/burger", newBurg, function(){
      location.reload();
    })
  })
  $(document).on("click", ".devour", function(){
    var devourID = $(this).attr("data-id")
    console.log("new one: " + devourID)
    $.ajax("/update/burger/", {
      type: "PUT",
      data: {
        id: devourID}
    }).then(
      function() {
        
        location.reload();
      }
    );
  })
})
