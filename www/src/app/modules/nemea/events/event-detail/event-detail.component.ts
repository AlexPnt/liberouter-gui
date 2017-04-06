import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  @Input() data : Object;

  ftasUrl : string = "/ftas";
  ftasUrlParams : Object = {};

  scUrl : string = "/security-cloud";
  scUrlParams : Object = {};

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.generateFtasUrl();
    this.generateScUrl();
  }

  generateFtasUrl() {
    console.log(this.data);

    if (this.data["Source"] != undefined && this.data["Source"][0]["IP4"] != undefined) {
        this.ftasUrlParams["src_ip"] = this.data["Source"][0]["IP4"][0];
        console.log("adding src IP")
    }

    if (this.data["Target"] != undefined && this.data["Target"][0]["IP4"] != undefined) {
        this.ftasUrlParams["dst_ip"] = this.data["Target"][0]["IP4"][0];
        console.log("adding dst IP")
    }

    console.log(this.ftasUrl)
  }

  generateScUrl() {
    console.log(this.data);
    let time = new Date(this.data["DetectTime"]["$date"])
    this.scUrlParams = {"eventtime" : Math.floor(time.getTime()/1000)}

    console.log(this.scUrlParams)
  }

}
