interface modelX {
  prop01: string;
}

interface modelY {
  prop02: string;
}

interface modelZ {
  prop03: string;
}

type interceptionType = modelX & modelY & modelZ;

const model: interceptionType = {
  prop01: "Juan",
  prop02: "Lopez",
  prop03: "Alvarez",
};
