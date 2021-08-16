import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';


import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallApiComponent } from './call-api/call-api.component';

import {ConfigService } from './api-service/api.service';
import { EquationComponent } from './equation/equation.component';
import { TableComponent } from './table/table.component';
import { GraphComponent } from './graph/graph.component';
import {ControlGrapComponent} from './control-grap/control-grap.component';


@NgModule({
  declarations: [
    AppComponent,
    CallApiComponent,
    EquationComponent,
    TableComponent,
    GraphComponent,
    ControlGrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
