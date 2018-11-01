console.log("connected");

var todo = new Vue({ 
	el: '#todo', 
	data: { 
		newTask: '', 
		todoList: []
	}, 

	methods: 
		{ 
		addTask: function() {
			var task = this.newTask;
			this.todoList.push(task);
			this.newTask = "";
		},
		removeTask: function(task){
			var index = this.todoList.indexOf(task);
			this.todoList.splice(index, 1);
		}
		// },
		// checkedTask: function() {
		// 	var checked = this.item;
		// 	this.todoList.strike(checked);
		// }
	} 
});





// Try adding a clear all button, which clears the list of all todos.

// Try adding a checkbox to each to-do which, when checked, causes the to-do to become crossed out.

// Try making a to-do which has already been added editable when clicked on.


// new Vue({
// 	el: '#app',
// 	data: {
// 		message: 'what is up?',
// 		coolness: 'hey',
// 		num:  50,
// 		bool: false,
// 		list: [
// 			{
// 				name: 'Bob',
// 				age: 21
// 			},
// 			{
// 				name: 'Joe',
// 				age: 23	
// 			},
// 			{
// 				name: 'Sue',
// 				age: 19
// 			}
// 		]
// 	},

// 	methods: {
// 		reverseMessage: function() {
// 			this.message = this.message.split('').reverse().join('')
// 		}
// 	}
// })







