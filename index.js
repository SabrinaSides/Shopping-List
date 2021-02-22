
  $(function () {
//submit new shopping list item by finding form id# and using .submit()
    $("#js-shopping-list-form").submit(function (event) {
//keep form from submitting somewhere else
        event.preventDefault();
//give typed item an easy variable
        let newItem = $("input[type=text]").val();
//add entire HTML <li> with newItem added
        $("ul").prepend('<li><span class="shopping-item">' + newItem +
            '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
    });    

//event delegation to parent element so when we add new items, it still applies
//clicking check button, finds shopping item and toggles line on/off text
    $("ul").on("click", ".shopping-item-toggle", function(event) {
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    });

//clicking delete button removes entire li from list
    $("ul").on("click", ".shopping-item-delete", function(event) {
        $(this).closest("li").remove();
    });

});