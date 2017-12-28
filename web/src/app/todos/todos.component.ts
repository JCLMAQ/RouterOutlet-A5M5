import { Component, OnInit } from '@angular/core';
import { TodosService } from './shared';
import { Wakanda } from '../wakanda.service';

  
@Component({
  selector: 'app-todos',
  providers: [Wakanda, TodosService ],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {


  constructor() {}

  ngOnInit() {
  ;
  }


}
