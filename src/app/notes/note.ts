export class Note {
    id: number;
    text: string = '';
    dateCreated: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}