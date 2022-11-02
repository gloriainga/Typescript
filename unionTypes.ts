type documentNumber = string | undefined;

interface modelX {
  prop01: string;
}

interface modelZ {
  prop02: string;
}

type unionType = modelX | modelZ;

const model: unionType = {
  prop01: "Helen",
  prop02: "Vasquez",
};
