// #1
// Вам необхідно написати додаток Todo list, використовуючи синтаксис класів. 
// У списку нотаток повинні бути методи для:
// - додавання нової нотатки, 
// - видалення, 
// - редагування
// - отримання повної інформації про нотатку, 
// - а так само отримання списку всіх нотаток. 
// Крім цього, у користувача має бути можливість позначити замітку, як виконану, і отримання інформації про те, 
// скільки всього нотаток у списку і скільки залишилося невиконань. Нотатки не повинні бути порожніми.


// Вам необхідно розширити можливості вашого списку і додати методи для пошуку замітки на ім'я, 
// а також методи для сортування нотаток за статусом (спочатку виконані і навпаки).

// Вам необхідно додати кожній нотатці дату її створення і редагування, 
// а також розширити можливості пошуку і сортування, включивши в них можливість роботи з датою.

class Todo {
    constructor(text = '') {
      this.text = text;
      this.completed = false;
      this.sinceDate = new Date();
      this.editionDate = new Date();
    }
}

class TodoList {
    constructor(listOfTodos = []) {
      this.todos = listOfTodos;
    }

    addNewNote(note = '') {
      this.todos.push(note);
    }

    removeNote() {
      this.todos.pop();
    }

    editNote(index, newText) {
      if (index >= 0 && index < this.todos.length) {
        this.todos[index].text = newText;
        this.todos[index].editionDate = new Date();
    }
    }

    getFullInfoAboutNote(index) {
      if (index >= 0 && index < this.todos.length) {
          return this.todos[index];
      }
    }
    
    getFullInfoAboutNotes() {
      
      return this.todos;
    }
    
    findByName(nameOfNote) {

      return this.todos.filter(note => note.text === nameOfNote);
    }

    isDone(index) {
      if (index >= 0 && index < this.todos.length) {
      this.todos[index].completed = true;
      }
    }

    sortingByStatus() {
      let completed = this.todos.filter(note => note.completed === true);
      let notCompleted = this.todos.filter(note => note.completed === false);
      
      if(true) {
        return [...completed, ...notCompleted];
      }
    }

    numberOfNotes() {

      return this.todos.length;
  }

    numberOfNotesCompleted() {
      let count2 = 0;
      this.todos.forEach(note => {
          if (note.completed === true) {
              count2++;
          }
      });
      return count2;
  }
  
  }

const myList = new TodoList([
  new Todo('Note 1'),
  new Todo('Note 2'),
  new Todo('Note 3'),
]);

myList.addNewNote(new Todo('Note 4'));
myList.addNewNote(new Todo('Note 5'));
myList.removeNote();   // видаляємо останню нотатку 



console.log(myList) //виводимо список всіх нотатків 

let resultOfFunction = myList.getFullInfoAboutNote(2); // записуємо та виводимо результат методу getFullInfoAboutNote
console.log(resultOfFunction);

myList.editNote(2, 'Some New Text')  // змінюємо текст у 3 нотатці 
console.log(myList.getFullInfoAboutNote(2));

console.log(myList.findByName('Note 2')); // шукаємо нотатку за ім'ям

myList.isDone(3); // Робимо помітку виконано та виводимо результат
console.log(myList.getFullInfoAboutNote(3));

console.log(myList.numberOfNotes()); // виводимо кількість всіх нотатків
console.log(myList.numberOfNotesCompleted()); // кількість виконаних нотатків

// myList.addNewNote(new Todo('Note 6'));
// console.log(myList.numberOfNotes());

console.log(myList.sortingByStatus()); // сортування нотаток за статусом, спочатку выводить true

// myList.isDone(1);
// console.log(myList.sortingByStatus());
