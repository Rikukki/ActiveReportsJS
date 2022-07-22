import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
    '<div id="designer-host"><gc-activereports-designer [report]="report"> </gc-activereports-designer></div>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  report = { id: 'assets/report.rdlx-json', displayName: 'my report' };
}