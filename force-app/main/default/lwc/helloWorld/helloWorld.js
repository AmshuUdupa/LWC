import { LightningElement, track } from 'lwc';
// import templateOne from './templateOne.html'
// import templateTwo from './templateTwo.html'


export default class HelloWorld extends LightningElement {
    @track dynamicGreeting = 'World';
    detailsVisible = false;
    templateOne = true;
    firstName = '';
    lastName = '';
    fullName = { firstName: '', lastName: '' };
    @track x;
    inIt() {
        this.x = new Date();
    }
    setDate() {
        this.x.setHours(7);
        console.log("setter");
    }
    // render() {
    //     return this.templateOne ? this.templateOne : templateTwo;
    // }

    // switchTemplate(event) {

    //     this.templateOne = this.template === true ? false : true;
    // }

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

    handleChange(event) {
        const field = event.target.name;
        if (field === "firstname") {
            this.firstName = event.target.value;
            this.fullName.firstName = event.target.value;
            console.log('first name set');
        }
        else if (field === "lastname") {
            this.lastName = event.target.value;
            // this.fullName.lastName= event.target.value;
            console.log('last name set');

        }
    }

    get changeUpperCase() {
        console.log('uppercase')
        return `${this.firstName} ${this.lastName}`.trim().toUpperCase();
    }

}