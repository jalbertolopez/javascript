classPersona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar () {
        console.log(`Hola, me llamo ${this.nombre}${this.apellido}`);
    }
    soyAlto () {
        const ALTURA_MINIMA = 1.8;
        returnthis.altura > ALTURA_MINIMA;
    }

}
classDesarrolladorextendsPersona{
    constructor(nombre, apellido, altura, profesion){
        super(nombre, apellido, altura);
        // Este es una tributo propio de la clase hija
        this.profesion = profesion;
    }
    saludar () {
        console.log(`Hola, me llamo ${this.nombre}${this.apellido} y soy ${this.profesion}`)
    }
}

var desarrollador = new Desarrollador('Daniel', 'Reyes', 1.89, 'Quimico')