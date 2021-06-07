import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { TestPageComponent } from './page/test-page/test-page.component';
import { LayoutComponent } from './page/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSliderModule } from '@angular/material/slider';
import { NavigationComponent } from './page/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu'
import { CoreCommonModule } from 'src/app/core/core-common/core-common.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomePageComponent,
    TestPageComponent,
    NavigationComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSliderModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    CoreCommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
