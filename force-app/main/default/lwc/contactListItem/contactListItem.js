import { LightningElement,api,track } from 'lwc';

export default class ContactListItem extends LightningElement {
@api contact;

selectHandler(event) {
    event.preventDefault();
    console.log("list item>>"+JSON.stringify(this.contact));
    const selectedEvent = new customEvent('selected', {detail: this.contact.Id});
    console.log("selectedEvent>>"+selectedEvent);
    this.dispatchEvent(selectedEvent);
}
}