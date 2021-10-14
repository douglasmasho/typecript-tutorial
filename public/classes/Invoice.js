export class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number
    //this alternative constructor only work if you have the access modifiers
    //this way, the constructor will automatically create properties matching the names of the arguments and initialize them with the values of the arguments you passed in
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
