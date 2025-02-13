// #1
// Вам необхідно створити конструктор Студента, у якого мають бути властивості: 
// ім'я, прізвище, рік народження, оцінки, відвідуваність, курс. 
// Кількість оцінок і відвіданих занять залежить від курсу, на якому займається студент. 
// Так само у Студента є методи: додати оцінку, додати відвідування, отримати середню успішність, отримати кількість пройдених занять, 
// змінити курс (мають оновитися дані про курс), а також отримати всю інформацію про студента.


// Додати Студенту можливість навчатися на кількох курсах з можливістю додавання і видалення курсу.


// Створити конструктор Група, яка має список студентів і методи для додавання, видалення студентів, а також 
// одержання рейтингу студентів за відвідуваністю і успішністю.

console.log('Завдання №1');

function Student (name, surname, yearOfBirth, grade, courses =[], attendanse = 0) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.grade = [grade];
    this.courses = courses;
    this.attendanse = attendanse;
    this.addGrade = function(someGrade) {
      this.grade = someGrade;
    };
    this.addAttendanse = function() {
      this.attendanse++;
    };
    this.averagePerformance = function() {
        let allGrades = this.grade;
        let allAttendanse = this.attendanse;
        return allGrades / allAttendanse;
    }
    this.getAttendanseNumber = function() {
      return this.attendanse;
    }
    this.getStudentInfo = function() {
      const info = {};

      for (let studentKey in this) {
        if(typeof this[studentKey] !== 'function') {
          info[studentKey] = this[studentKey];
        }
      }
      return info;
    };
}

Student.prototype.changeCourse = function(newCourse) {
    this.courses = [newCourse];
};
Student.prototype.addCourse = function(addedCourse) {
    if (!this.courses) {
        this.courses = [];
    }
    this.courses.push(addedCourse);
};
Student.prototype.deleteCourse = function(deletedCourse) {
    for(let i = 0; i < this.courses.length; i++) {
        if (deletedCourse == this.courses[i]) {
            this.courses[i] = null;
        }
    }
}

const student1 = new Student();
console.log(student1);                                                                      // вивод конструктора Студента
console.log('Поточна відвідуваність у Студента1 >', student1.getAttendanseNumber());        // подивитися поточну відвідуваність (0)
student1.addAttendanse();                                                                           // додати відвідуваність (+1)
console.log('Поточна відвідуваність у Студента1 після додавання >', student1.getAttendanseNumber());    // подивитися поточну відвідуваність (1)



const student2 = new Student('Bob','Marley', 32, 5, 'Chemistry', 3);
student2.changeCourse('Math')
console.log(student2);
console.log(student2.getStudentInfo());         // отримати інформацію про Студента1
student2.addCourse('Physics');
console.log(student2.getStudentInfo());
student2.deleteCourse('Math');
console.log(student2.getStudentInfo());




function Group(listOfStudents = []) {
    this.listOfStudents = listOfStudents;

    this.addStudent = function(student) {
        this.listOfStudents.push(student);
    };

    this.getStudents = function() {
        return this.listOfStudents;
    };
}
Group.prototype.deleteStudent = function(deletedStudent) {
    this.listOfStudents = this.listOfStudents.filter(student => student !== deletedStudent);
};
Group.prototype.getGradesStudents = function() {
    student1.this.grade.
}

const group1 = new Group();
//console.log(group1.getStudents());

group1.addStudent(student1);
group1.addStudent(student2); 
group1.deleteStudent(student2); // видаляємо студента2 з групи1

console.log(group1.getStudents()); // виведе массив студентів с видалення студента 2;

