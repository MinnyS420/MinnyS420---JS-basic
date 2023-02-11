class Animal {
    constructor(name, kind) {
        this.name = name;
        this.kind = kind;
    }

    speak(sound){
        console.log(`This ${this.name} makes sound like: ${sound}`);
    }
}

let Dog = new Animal(`Dog`, `Golden Retriever`);
let Cat = new Animal(`Cat`, `Birman`);

Dog.speak(`waf waf waf`);
Cat.speak(`mauuuuuuuuuuuuuuu`);




