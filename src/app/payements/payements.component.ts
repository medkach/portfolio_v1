import {Component, OnInit, ViewChild, viewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-payements',
  templateUrl: './payements.component.html',
  styleUrl: './payements.component.css'
})
export class PayementsComponent implements OnInit {
  constructor(private http:HttpClient) {
  }
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  public dataSource:any;
  public payments:any;
  public displayedColumns:string[]=['id','date','amount','type','status','firstName'];
  ngOnInit(): void {
    this.http.get("http://localhost:8085/domain1/payments").subscribe(
      {
        next:data =>{this.payments=data;
          this.dataSource=new MatTableDataSource(this.payments);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
        }
        ,error:err => console.log(err)
      }


    );
  }

}
