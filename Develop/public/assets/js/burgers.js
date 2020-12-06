$(document).ready(function () {
  $.ajax("/burgers", {
    type: "GET",
  }).then(function (data) {
    let burgers = data.burgers;
    for (let i = 0; i < burgers.length; i++) {
      //Devour Button
      if (burgers[i].devoured == 0) {
        let html = `<li><p>${burgers[i].burger_name}<button data-burgerid="${burgers[i].id}"class = "devour-btn">Devour!</button></p></li>`;
        $("#burger-list").append(html);
      }
      //Delete Button
      else {
        let html = `<li><p>${burgers[i].burger_name}<button data-burgerid="${burgers[i].id}"class="del-btn">Delete</button></p></li>`;
        $("#delete-list").append(html);
      }
    }
  });
  //On sumbit btn add burger to database
  $("#burger-btn").on("click", function (event) {
    event.preventDefualt;
    let newBurger = { burger_name: $("#burger-text").val().trim() };
    $.ajax("/burgers", {
      type: "POST",
      data: JSON.stringify(newBurger),
      dataType: "json",
      contentType: "application/json",
    }).then(function () {
      console.log("New Burger Added");
      location.reload();
    });
  });
  //Update Burger List to change devoured boolean
  $(document).on("click", ".devour-btn", function (event) {
    let id = $(this).data("burgerid");

    //
    $.ajax({
      method: "PUT",
      url: "/burgers/" + id,
      dataType: "json",
      contentType: "application/json",
    }).then(function () {
      // reload page to display devoured burger in proper column
      location.reload();
    });
  });
  $(document).on("click", ".del-btn", function (event) {
    event.preventDefault();

    let id = $(this).data("burgerid");

    $.ajax({
      method: "DELETE",
      url: "/burgers/" + id,
    }).then(function (data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });
  });

  //End Of .ready()
});
