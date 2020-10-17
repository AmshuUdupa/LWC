import { LightningElement, track } from 'lwc';
import templateOne from './templateOne.html'
import templateTwo from './templateTwo.html'


export default class HelloWorld extends LightningElement {
    @track dynamicGreeting = 'World';
    detailsVisible = false;
    templateOne = true;

    render() {
        return this.templateOne ? this.templateOne : templateTwo;
    }

    switchTemplate(event) {

        this.templateOne = this.template === true ? false : true;
    }

    contacts = [
        { Id: 1, name: 'Asha' },
        { Id: 2, name: 'Usha' },
        { Id: 3, name: 'Mahesha' },
        { Id: 4, name: 'Umesha' },
    ];

    changeGreeting(event) {
        this.dynamicGreeting = event.target.value;
    }

    handleClick(event) {
        this.detailsVisible = event.target.checked;
        console.log("clicked");
    }


}