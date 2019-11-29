import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class EmailService{
    getEmails(){
        return ["nagi @123","bargav@123"];
    };
}