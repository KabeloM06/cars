import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order{
    public id?: number;
    public name?: string;
    public address?: string;
    public city?: string;
    public province?: string;
    public postalCode?: string;
    public country?: string;
    public shipped: boolean = false;

    constructor(public cart: Cart){}

    clear() {
        this.id = undefined;
        this.name = this.address = this.city = undefined;
        this.province = this.postalCode = this.country = undefined;
        this.shipped = false;
        this.cart.clear();
    }
}