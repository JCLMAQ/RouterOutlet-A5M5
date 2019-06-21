import { Injectable, EventEmitter } from '@angular/core';

import { Wakanda } from '../../wakanda.service';

import { Todo } from './';


@Injectable()
export class TodosService {
   
  // private todos: Todo[]= [];
    private todos: Todo[]=[];
   
 constructor(public wakanda: Wakanda) { }
// constructor() { }
 /*
 private todos: Todo[]= [
    {ID: 1, label: 'Un jour peut-être', completed: false, userID: ''},
    {ID: 2, label: 'Pourquoi pas',completed: false, userID: ''},
    {ID: 3, label: 'mais demain aussi', completed: false, userID: ''},
    {ID: 4, label: 'Enfin bref', completed: false, userID: ''}
    ];
 */


 /**/
	buildTodos() {
		var that = this; 	
		this.wakanda.getCatalog().then(function (ds) {	   	
			ds['Todo']
			.query({pageSize:20})
			.then(res => {
			for(let entity of res['entities']) {
				
						 //console.log(entity);
						 that.todos.push({
		      				ID: entity['ID'], 
		      				label: entity['label'],
		      				completed: entity['completed'],
		      				userID: entity['userID']
			      		});						
	    		}
	    	});	
		    }); 
		}



  getTodos() {
  	/* 	*/
  	//this.todos=[];
  	//delete this.todos;
  	    var that = this;
		this.wakanda.getCatalog().then(ds=> {	   	
			ds['Todo']
			.query()
			.then(res => {
				for(let entity of res['entities']) {				
							 //console.log(entity);
							 that.todos.push({
			      				ID: entity['ID'], 
			      				label: entity['label'],
			      				completed: entity['completed'],
			      				userID: entity['userID']
				      		});						
		    		}
		    	});	
		    }); 
	
	/*   
	    this.todos=[
	    {ID: 1, label: 'Un jour peut-être', completed: false, userID: ''},
	    {ID: 2, label: 'Pourquoi pas',completed: false, userID: ''},
	    {ID: 3, label: 'mais demain aussi', completed: false, userID: ''},
	    {ID: 4, label: 'Enfin bref', completed: false, userID: ''}
	    ];
 	*/ 
    return this.todos;
  }

  getTodoByID(id) {
   // return this.todos.find(todo => todo.ID === id );
   console.log('Todo '+ id + ' selected');
   return this.todos.find(todo => todo.ID === Number(id));
  }
  
  newTodo(newTodoText) {
        this.wakanda.getCatalog().then(ds => {
            let todo = ds['Todo'].create({
                label: newTodoText,
                completed: false
            });

            todo.save()
            .then(() => {
                alert('saved')
                console.log('Todo '+ todo['ID'] + ' created');
                this.todos.push({
                    ID: todo['ID'],
                    label: newTodoText,
                    completed: false,
                     userID:""
                });
                newTodoText = ""; //clear the input 
            });
        });
    }
    
    deleteTodo(ID){    	
    	var that=this;
	 	this.wakanda.getCatalog().then(ds=> {	
			ds['Todo'].find(ID).then(emp=> {
				emp.delete().then(function () {
					alert('Deleted' + ID )
			    	console.log('Todo '+ ID + ' deleted');
				});
			});
	 	});
	 	var indexToFind = this.getTodoByID(ID);
	 	
	 // 	this.getTodos();
	 	//this.todos.splice(indexToFind, 1);	 	
	 	//this.todos.find(todo => todo.ID === Number(ID));;
	 	
    }
    
// End of Erport class    
}

 