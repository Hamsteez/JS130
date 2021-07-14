const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('todolist array being returned by toArray method', () => {
    let arr = [todo1, todo2, todo3];
    expect(list.toArray()).toEqual(arr);
  });

  test('first todo item', () => {
    expect(list.first()).toBe(todo1);
  });

  test('last todo item', () => {
    expect(list.last()).toBe(todo3);
  });

  test('remove and return first item in list', () => {
    let item = list.shift();
    expect(item).toBe(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('remove and return last item in list', () => {
    let item = list.pop();
    expect(item).toBe(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test('return true if all todos are done', () => {
    expect(list.isDone()).toBe(false);
    list.markAllDone();
    expect(list.isDone()).toBe(true);
  });

  test('get TypeErrpr when attempt to add item that isnt Todo obj', () => {
    expect(() => list.add('eat')).toThrow(TypeError);
  });
  
  test('get ReferenceError if idx with no element or return todo at idx', () => {
    expect(() => list.itemAt()).toThrow(ReferenceError);
    expect(list.itemAt(1)).toBe(todo2);
  });

  test('get ReferenceError if idx with no element or mark todo idx as done', () => {
    expect(() => list.markDoneAt()).toThrow(ReferenceError);
    list.markDoneAt(0);
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(false);
  });

  test('get ReferenceError if idx with no element or mark todo idx as undone', () => {
    expect(() => list.markUndoneAt()).toThrow(ReferenceError);
    list.markUndoneAt(0);
    expect(todo1.isDone()).toBe(false);
    expect(todo2.isDone()).toBe(false);
  });

  test('get ReferenceError if idx with no element or remove todo from list', () => {
    expect(() => list.removeAt()).toThrow(ReferenceError);
    list.removeAt(0);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;
  
    expect(list.toString()).toBe(string);
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[ ] Clean room
[X] Go to the gym`;

    list.markDoneAt(0);
    list.markDoneAt(2);
  
    expect(list.toString()).toBe(string);
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;

    list.markAllDone();
    expect(list.toString()).toBe(string);
  });

  test('test forEach iteration', () => {
    let callback = function(todo) {
      todo.markDone();
    }
    list.forEach(callback);
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;
    expect(list.toString()).toBe(string);
  });

  test('test forEach iteration', () => {
    let callback = function(todo) {
      return todo.isDone();
    }
    list.markDoneAt(2);
    let newList = new TodoList("Today's Todos");
    let todo9 = new Todo("Go to the gym");
    newList.add(todo9);
    newList.markAllDone();
    expect(list.filter(callback)).toEqual(newList);
  });
  // your tests go here
});