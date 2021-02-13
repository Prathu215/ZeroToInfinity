import { Component } from '@angular/core';
import { todoList } from './data/TodoList';
import { appConstants } from './data/Contants';
import { ITodoItem } from './interfaces/TodoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = appConstants.title;
  todos: ITodoItem[] = todoList;
  //userId:number=1;

  addList(label: string) {
    var todoItem: ITodoItem = {lable: label,priority: 5,done: false};
    console.log("Todo list before push: ", this.todos);
    this.todos.push(todoItem);
    console.log("Todo list after push: ", this.todos);
  }

  deleteList(todo: ITodoItem) {
    this.todos = this.todos.filter(todoItem => todoItem.lable !== todo.lable);
  }
}