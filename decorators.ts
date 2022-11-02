/** DECORATORS EN FUNCIONES **/
class Robot {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  @LogMethod
  talk() {
    console.log(`Hola, mi nombre es ${this.name}`);
  }
}

function LogMethod(target, key) {
  console.log(`El metodo ${key} de la clase ${target} se acaba de llamar.`);
}

/** DECORATORS EN CLASES **/

function Component(target) {
  return class extends target {
    name = "A2R2";

    printMessage() {
      console.log(`Hola, mi nombre es ${this.name}`);
    }
  };
}

@Component
class Person {
  constructor() {}
  printMessage() {}
}

const person: Person = new Person();
person.printMessage();
