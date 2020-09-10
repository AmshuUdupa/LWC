public with sharing class ContactController {
       @AuraEnabled(cacheable=true)
    public static list<Contact> getContactList() {

        return [select id , name , title ,phone from Contact LIMIT 10];
    }
}
