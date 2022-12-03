export class CustomError extends Error {
  constructor(statusCode: number, message: string) {
    super(message);
  }
}

export class InvalidInfos extends CustomError {
  constructor() {
    super(400, "Um ou mais dados inválidos!");
  }
}

export class InvalidCPF extends CustomError {
  constructor() {
    super(400, "Cpf inválido!");
  }
}

export class InvalidEmail extends CustomError {
  constructor() {
    super(400, "E-mail inválido!");
  }
}

export class InvalidId extends CustomError {
  constructor() {
    super(400, "Id inválido!");
  }
}

export class InvalidPhone extends CustomError {
  constructor() {
    super(400, "Número de telefone inválido!");
  }
}

export class InvalidGender extends CustomError {
  constructor() {
    super(400, "Sexo inválido!");
  }
}
