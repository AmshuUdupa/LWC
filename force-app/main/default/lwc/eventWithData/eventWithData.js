import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class EventWithData extends LightningElement {
selectedContact;

    @wire(getContactList) contacts ;

    ContactSelected(evet) {
    const ContactId = evet.detail;
    console.log("evt>>"+ContactId);
    this.selectedContact = this.contacts.data.find(contact => contact.Id === ContactId);
    }

    get listIsNotEmpty(){
        console.log('contacts>>'+JSON.stringify(this.contacts));

        return this.contacts && Array.isArray(this.contacts.data) && this.contacts.data.length > 0   ;
      }

}