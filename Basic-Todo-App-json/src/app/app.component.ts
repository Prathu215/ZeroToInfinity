import { Component } from '@angular/core';
import { ITodoItem } from './interfaces/TodoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prathyusha To-do list';

  todos: ITodoItem[] = [
    {
      lable: "Butter milk",
      priority: 4,
      done: true
    },
    {
      lable: "Butter",
      priority: 3,
      done: false
    },
    {
      lable: "Milk",
      priority: 4,
      done: true
    },
    {
      lable: "Fruits",
      priority: 2,
      done: true
    },
    {
      lable: "Paneer",
      priority: 3,
      done: true
    },
    {
      lable: "Smoothies",
      priority: 4,
      done: false
    }

  ];

  addList(newtodolable: string) {
    var newtodo = {
      lable: newtodolable,
      priority: 5,
      done: false

    };
    console.log("Todo list before push: ",this.todos);
    this.todos.push(newtodo);
    console.log("Todo list after push: ",this.todos);
  }
  // console.log(newtodo);

  deleteList(todo:ITodoItem){
    this.todos = this.todos.filter(t => t.lable !== todo.lable);
  }
}
