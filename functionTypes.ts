type errorType = Error | null;

type functionType = (cbt: callbackType) => void;

type callbackType = (resolve, reject: errorType) => void;

const printMessage: functionType = (callback: callbackType): void => {
  if (callback) callback({ message: "Exito" }, null);
};
