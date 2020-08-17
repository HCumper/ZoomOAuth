import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { ZoomMtg } from '@zoomus/websdk';
import { ScheduleData } from '../scheduler/ScheduleData';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
//export class SchedulerComponent { };
export class SchedulerComponent implements OnInit {

  constructor(public httpClient: HttpClient, @Inject(DOCUMENT) document) {
  }

  ngOnInit(): void {
  }

  scheduleMeeting(): void {
    const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IjV5VV84NU5XUXlPZkRrT3c2OGg5cUEiLCJleHAiOjE1OTc5NjAyMzksImlhdCI6MTU5NzM1NTQ0MX0.nz8xDJXQvLh9WgHThWc2WY9LDGQFs8NAWYqZ3sSMGlw';

    let meetingParams = new ScheduleData({
      topic: "CPR 2",
      description: "Intoduction to resuscitation",
      start: "2020-08-18T12-23-14T",
      durationMinutes: 30,
      timezone: 2,
      registrationReqd: true,


      passcodeReqd: true,
      waitingRoom: true,
      videoHostOn: true,
      videoParticipantOn: false,
      audioMethod: 2,
      enableJoinBeforeHost: true,
      muteParticpantsOnEntry: false,
      recordMeeting: false,
      alternativeHosts: "mary@company.com"
    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token
      })
    };

    const clientId: string = this.getClientId();

    const url: string = options.uri + "?response_type=code" + ";client_id=" + clientId + ";redirect_uri=https://localhost:4200/authorized";
    // get authorization code
    //this.httpClient.get(url);


    this.httpClient.post(url, (error, response, body) => {

      // Parse response to JSON
      body = JSON.parse(body);

      // Logs your access and refresh tokens in the browser
      console.log(`access_token: ${body.access_token}`);
      console.log(`refresh_token: ${body.refresh_token}`);
    }
    );

  }

  //the client must already have been authenticated
  // look up the client's id from secure database, key vault or elsewhere
  getClientId(): string {
    return "FJ5mgJblRWmacDoDSeeSvg";
  }
}

var options = {
  uri: "https://zoom.us/oauth/authorize",
  qs: {
    status: 'active'
  },
  auth: {
    'bearer': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IjV5VV84NU5XUXlPZkRrT3c2OGg5cUEiLCJleHAiOjE1OTc2Nzg0NzQsImlhdCI6MTU5NzA3MzY3NX0.TqRkVhjkNBSPMGL3VVU7St2Y0mbV27oj8-Ot_VGGozw"
  },
  headers: {
    'User-Agent': 'Zoom-api-Jwt-Request',
    'content-type': 'application/json'
  },
  json: true //Parse the JSON string in the response
};

