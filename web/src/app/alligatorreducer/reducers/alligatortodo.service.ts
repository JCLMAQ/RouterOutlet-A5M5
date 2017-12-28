import { Injectable, EventEmitter } from '@angular/core';
import { Wakanda } from '../../wakanda.service';
import {AlligatorTodo} from './alligatorTodo.model';

@Injectable()
export class AlligatorTodoService {
	 
	 private todos: AlligatorTodo[]=[];
	 
	 private initialTodo: AlligatorTodo[]=[
	{index: 1, done: false, value: 'Pourquoi pas'},
	{index: 2, done: false, value: 'Non'},
	{index: 3, done: false, value: 'Oui, peut-etre'},
	] ;
	
  constructor(public wakanda:Wakanda) { }

 
	
// Add by JCM  
	getTodos() {
	  /* 	*/
	      var that = this;
		this.wakanda.getCatalog().then(ds=> {	   	
			ds['AlligatorTodo']
			.query()
			.then(res => {
				for(let entity of res['entities']) {				
							 //console.log(entity);
							 that.todos.push({
			      				index: entity['index'], 
			      				value: entity['value'],
			      				done: entity['doneed']
				      		});						
		    		}
		    	});	
		    }); 
	return this.todos;
  }
}
