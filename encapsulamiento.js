// Este código muestra una clase llamada User en JavaScript que utiliza campos privados (denotados por el prefijo #) y tiene métodos para crear un usuario, validar el nombre y mostrar el nombre. 
class User {
    #fullName;

    constructor(firstName, lastName){
        this.#validate(firstName);
        this.#fullName = `${firstName} ${lastName}`;
    }

    #validate(firstName){
        if(firstName.length > 3){
            throw new Error('Nombre demasiado corto');
        }
    }

    printName(){
        console.log(this.#fullName)
    }
}

// La clase User tiene un campo privado #fullName que almacenará el nombre completo del usuario.
// El constructor toma dos parámetros, firstName y lastName, y llama al método #validate() para asegurarse de que el firstName sea válido antes de asignar el nombre completo.
// El método privado #validate(firstName) verifica si el nombre es demasiado corto (menos de 4 caracteres) y, si es así, lanza un error.
// El método público printName() imprime el nombre completo del usuario.

// # Intento de acceder a los campos privados fuera de la clase

user.#fullName;
user.#validate('John');

//Estos intentos de acceder a los campos privados #fullName y #validate() fuera de la clase User arrojarán errores. Los campos privados solo pueden ser accedidos y modificados dentro de la propia clase en la que están definidos.


class User {
    constructor(firstName, lastName) {
        this.validate(firstName);
        this._fullName = `${firstName} ${lastName}`;
    }

    validate(firstName) {
        if (firstName.length > 3) {
            throw new Error('Nombre demasiado corto');
        }
    }

    printName() {
        console.log(this._fullName);
    }
}

const user = new User('Rick', 'Astley');
user.printName();

// Intento de acceder fuera de la clase
console.log(user._fullName); // Acceso permitido (simulando privacidad)
user.validate('John');       // Acceso permitido (simulando privacidad)


// DESDE TYPESCRIPT
class User {
    private fullName: string;

    constructor(firstName: string, lastName: string) {
        this.validate(firstName);
        this.fullName = `${firstName} ${lastName}`;
    }

    private validate(firstName: string): void {
        if (firstName.length > 3) {
            throw new Error('Nombre demasiado corto');
        }
    }

    printName(): void {
        console.log(this.fullName);
    }
}

const user = new User('Rick', 'Astley');
user.printName();

// Acceder a los campos privados fuera de la clase arrojará un error en TypeScript
// user.fullName;  // Error: Property 'fullName' is private and only accessible within class 'User'.
// user.validate('John');  // Error: Property 'validate' is private and only accessible within class 'User'.
