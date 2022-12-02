export enum GenderOpt {
    MASCULINO = "MASCULINO",
    FEMININO = "FEMININO",
    PREFN = "PREFIRO NÃO INFORMAR"
}

export interface UserDTO {
    name : string
    cpf : string
    email : string
    phone : string
    gender : GenderOpt
    birth : Date
}

export class User {
    constructor(
        private id : string,
        private name : string,
        private cpf : string,
        private email : string,
        private phone : string,
        private gender : GenderOpt,
        private birth : Date
    ) {
        this.id = id
        this.name = name
        this.cpf = cpf
        this.email = email
        this.phone = phone
        this.gender = gender
        this.birth = birth
    }

    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }

    public getCpf() {
        return this.cpf
    }

    public getEmail() {
        return  this.email
    }

    public getPhone() {
        return this.phone
    }

    public getGender() {
        return this.gender
    }

    public getBirth() {
        return this.birth
    }
}