class Person {
  private documentNumber: string;
  private firstName: string;
  private lastName: string;

  constructor(documentNumber: string, firstName: string, lastName: string) {
    this.documentNumber = documentNumber;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Student extends Person {
  private semester: number;

  constructor(
    documentNumber: string,
    firstName: string,
    lastName: string,
    semester: number
  ) {
    super(documentNumber, firstName, lastName);
    this.semester = semester;
  }
}

let student: Student = new Student("3556621", "kevin", "Jimenez", 9);
let person: Person = new Person("3556621", "kevin", "Jimenez");
person = student;
//student = person; no es correcto porque toda persona no es un estudiante
