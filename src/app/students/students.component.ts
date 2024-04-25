import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{
  constructor(private http:HttpClient) {
  }
  public students!:any;
  public dataSource:any;
  public displayedColumns:string[]=['id','firstName','lastName','code','program']

  ngOnInit(): void {
    this.http.get("http://localhost:8085/domain1/students").subscribe(
      {
        next:data=>{
          this.students=data;
          this.dataSource=new MatTableDataSource(this.students);

        },
        error:err => {console.log(err)}
      }
    )
  }

}
