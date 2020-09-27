import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';

import { SharedModule } from 'src/app/shared.module';
// import { StatisticsComponent } from './in-process/statistics/statistics.component';
// import { GoingComponent } from './in-process/going/going.component';
@NgModule({
  imports: [WelcomeRoutingModule, SharedModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule {
  isCollapsed: boolean = false;
}
