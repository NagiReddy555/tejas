import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class EmailService{
    getEmails(){
        return ["nagendra@123","gopi@123"];
    };
}