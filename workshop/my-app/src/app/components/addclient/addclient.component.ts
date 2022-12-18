import { Component, OnInit } from '@angular/core';
import { ClientListApicallService } from 'src/app/services/client-list-apicall.service';
import { Client } from 'src/app/models/Client';
@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  client = new Client("","","","",0)
  constructor(private clientService: ClientListApicallService) { }

  ngOnInit(): void {
  }
  postClient(client : Client){
    this.clientService.postClient(client,'POST');

  }

}
