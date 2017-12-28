import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService, Todo } from '../shared';
import { Wakanda } from '../../wakanda.service';

@Component({
  selector: 'app-todo-detail',
  providers:[Wakanda, TodosService],
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  currentTodo: Todo;
  

  constructor(
  	private route: ActivatedRoute,
    private service: TodosService, 
    public wakanda: Wakanda
  	) { }

  ngOnInit() {
	this.route.params.subscribe((params: {id: string}) => {
     this.currentTodo = this.service.getTodoByID(params.id);
     console.log('currentTodo '+ params.id + ' '+ this.currentTodo);
	});
  }


}
