// To Add an Item to the list



$("#addItem").click(function () {           
  // Retrieve value of list item
  var listItem = $('#listItem').val();

  // Append list item to list
  $('ul').append('<div id='+listItem+' class ="eachItem"> <li id='+listItem+'>'+listItem+'</li> <input type="checkbox" class="checkedListItem" name="myCheckbox" id='+listItem+'> </div>');
  
  // Reset the form
  $('#toDoItem')[0].reset();

}); 




$("#removeItems").click(function() { 
	var selectedItems = [];

	$('.checkedListItem').each(function() {

	    if($(this).is(':checked')){
	    	console.log('checked');
	    	console.log($(this).attr('id'));
	    	selectedItems.push($(this).attr('id'));
	    };
	});

	console.log(selectedItems);


	selectedItems.forEach(function(entry) {
    	console.log('#'+entry);
    	$('#'+entry).remove();
});

});

