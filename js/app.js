
// To Add an Item to the list
$("#addItem").click(function () {           
  // Retrieve value of list item
  var listItem = $('#listItem').val();

  // Append list item
  $('ul').append('<div id='+listItem+' class ="eachItem"> <li id='+listItem+'>'+listItem+'</li> <input type="checkbox" class="checkboxForListItem" id='+listItem+'> </div>');
  
  // Reset form
  $('#toDoItem')[0].reset();

}); 


// To Remove an Item from the List
$("#removeItems").click(function() { 
	var selectedItems = [];

	// Creat array of checked list items
	$('.checkboxForListItem').each(function() {
	    if($(this).is(':checked')){
	    	selectedItems.push($(this).attr('id'));
	    };
	});

	// Delete items from page
	selectedItems.forEach(function(entry) {
    	$('#'+entry).remove();
	});

});
