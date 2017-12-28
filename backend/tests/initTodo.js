//ds.Todo.all();
//ds.Todo.remove();

/**/
var newTodo = new ds.AlligatorTodo({
	value: "Don' mind...",
	done: false
});
newTodo.save();


//var todo = ds.Todo.query();
var todos = ds.AlligatorTodo.all();
todos;
