import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { LoadingIndicatorService } from './loading-indicator/loading-indicator.service';

@NgModule({
  declarations: [
    AppComponent,
    LoadingIndicatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LoadingIndicatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
