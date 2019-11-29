import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
employeeData=[{
  empname:"nagi",
  empid:1,
  empage:23,
  empcompany:"google",
  empdoj:new Date('9/1/2016'),
  gender:'male'
},
{
  empname:"sai",
  empid:2,
  empage:23,
  empcompany:"jpmorgan",
  empdoj:new Date('2/2/2015'),
  gender:'male'
},
{
  empname:"bhagath",
  empid:3,
  empage:23,
  empcompany:"microsoft",
  empdoj:new Date('5/8/2018'),
  gender:'male'
},
{
  empname:"gopi",
  empid:4,
  empage:23,
  empcompany:"samsung",
  empdoj:new Date('8/10/2014'),
  gender:'male'
},
{
  empname:"sundar",
  empid:5,
  empage:25,
  empcompany:"nokia",
  empdoj:new Date('01/1/2018'),
  gender:'male'
}
]
  constructor() { }

  ngOnInit() {
  }

}
