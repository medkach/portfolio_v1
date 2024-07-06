import {Component, Input} from '@angular/core';
import {HttpClient, HttpEventType} from "@angular/common/http";
import {finalize, Subscription} from "rxjs";

@Component({
  selector: 'app-rag',
  templateUrl: './rag.component.html',
  styleUrl: './rag.component.css'
})
export class RagComponent {
  @Input()
  requiredFileType!:string;

  fileName = '';

  constructor(private http:HttpClient) {
  }
  onFileSelected(event:any) {
    const filee:File = event.target.files[0];

    if (filee) {

      this.fileName = filee.name;

      const file = new FormData();

      file.append("file", filee);
      //localhost:8085/payments?date=12%2F02%2F2012&amount=12000000&typePayment=CASH&studentCode=code33'

      const upload$ = this.http.post("http://localhost:8085/domain1/payments/save", file);

      upload$.subscribe(
        {next:value =>{console.log('test file:'+value.toString()) },
        error:err => console.log("test errr:"+err)}
       // value =>

      );
    }
  }
  embedding() {

  }
}
