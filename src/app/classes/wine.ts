export class Wine {

    constructor(
        public name: string,
        public vineyard?: string,
        public year?: number,
        public description?: string,
        public image?: string,
    ) {}
}
