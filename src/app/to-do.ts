export class ToDo {
    id: number;
    title: string = '';
    complete: boolean = false;
    dateCreated: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
