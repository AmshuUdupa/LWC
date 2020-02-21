import {
    LightningElement,
    track
} from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track firstNumber;
    @track secondNumber;
    @track finalResult;
    @track trackHistory = [];
    @track historyFlag = false;
    numberChangeHandler(event) {
        const numberName = event.target.name;
        if (numberName === "firstNumber") {
            this.firstNumber = event.target.value;
        } else if (numberName === "secondNumber") {
            this.secondNumber = event.target.value;
        }
    }

    operationHandler(event) {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        const operationName = event.target.label;
        console.log("operationName>>" + operationName);
        if (operationName === "Add") {
            console.log("finalResult>>" + this.finalResult);
            this.finalResult = `Result of ${firstN}+${secondN} is ${firstN+secondN}`;
            console.log("finalResult>>" + this.finalResult);
        } else if (operationName === "Subtract") {
            console.log("finalResult>>" + this.finalResult);
            this.finalResult = `Result of ${firstN}-${secondN} is ${firstN-secondN}`;
            console.log("finalResult>>" + this.finalResult);
        } else if (operationName === "Multiply") {
            console.log("finalResult>>" + this.finalResult);
            this.finalResult = `Result of ${firstN}x${secondN} is ${firstN*secondN}`;
            console.log("finalResult>>" + this.finalResult);
        } else if (operationName === "Divide") {
            console.log("finalResult>>" + this.finalResult);
            this.finalResult = `Result of ${firstN}/${secondN} is ${firstN/secondN}`;
            console.log("finalResult>>" + this.finalResult);
        }
        this.trackHistory.push(this.finalResult);
        console.log("trackHistory>>"+this.trackHistory);
    }
    showHistory(event) {
        this.historyFlag = event.target.checked;
    }

    clearhistory(event){
        this.trackHistory = [];
    }
}