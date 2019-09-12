import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TODOITEMComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  // Set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

  //UI toggle
  onToggle() {
    this.todo.completed = !this.todo.completed;
    //Server Toggle
    this.todoService.toggleCompleted(this.todo).subscribe(todo => {
      console.log(todo);
    })
  }


}
