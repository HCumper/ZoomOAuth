export class ScheduleData {
  meetingNumber: string  // may have leading zeroes
  topic: string
  description?: string
  start: string
  durationMinutes: number
  timezone: Timezone
  registrationReqd: boolean
  passcodeReqd: boolean
  passcode: string
  waitingRoom: boolean
  videoHostOn: boolean
  videoParticipantOn: boolean
  audioMethod: Method
  enableJoinBeforeHost: boolean
  muteParticpantsOnEntry: boolean
  recordMeeting: boolean
  alternativeHosts: string

  public constructor(init?: Partial<ScheduleData>) {
    Object.assign(this, init);
  }
}

enum Method {
  "Telephone", "Computer Audio", "Telephone and Computer Audio", "3rd Party Audio"
}

enum Timezone {
  "EDT", "CDT", "MDT", "PDT"
}
