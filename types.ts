let firstName: string;
let lastName = "Lopez";

let age: number = 45;
let active: boolean = true;

let arrayValues: string[] = ["L", "A"];
let arrayValues2: Array<number> = [9, 3, 5];

let responseData: any = "Data";
responseData = 45;

type icon_name = "home" | "settings" | "user" | "arrow_forwars";
const home_icon: icon_name = "home";

type typeDocumentNumber = string | undefined | null;
const documentNumber: typeDocumentNumber = null;

function printMessage(msg: string): string {
  return msg;
}

const printMessageArrow = (msg: string) => {
  return msg;
};
