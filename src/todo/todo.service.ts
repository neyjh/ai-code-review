import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  private todos = [];

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    return this.todos.find(todo => todo.id === id);
  }

  create(createTodoDto: { title: string; description: string }) {
    const newTodo = {
      id: this.todos.length + 1,
      ...createTodoDto,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  remove(id: number) {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      return this.todos.splice(index, 1)[0];
    }
    return null;
  }
}
