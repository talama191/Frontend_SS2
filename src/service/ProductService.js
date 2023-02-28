import React from "react";

export default class ProductService extends React.Component {
    static Instance = null;

    constructor(props) {
        super(props);
        this.state = { a: 1 };
    }
    static getInstance() {
        if (ProductService.Instance == null) {
            ProductService.Instance = new ProductService();
        }

        return this.Instance;
    }
    doPing() {
        this.state.a++;
        console.log(this.state.a);
    }
    /*
    Example usage of singleton class:
    let instance = ProductService.getInstance();
        instance.doPing();
    */
}