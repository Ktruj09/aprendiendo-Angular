export class Article{

    /**
     * 
     * Creamos este modelo vazado en nuestro backend, tal y como se 
     * ha creado en el backend asi sera creado en esta parte 
     */
    constructor(
        public _id: string,
        public title: string,
        public content: string,
        public image: string,
        public date: any, 
    ){}
}