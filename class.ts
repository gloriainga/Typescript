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
  private _semester: number;

  constructor(
    documentNumber: string,
    firstName: string,
    lastName: string,
    semester: number
  ) {
    super(documentNumber, firstName, lastName);
    this._semester = semester;
  }

  set semester(value: number) {
    this._semester = value;
  }
}
