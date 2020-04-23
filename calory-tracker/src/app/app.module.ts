import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFoodListComponent } from './app-food-list/app-food-list.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { TodaylistComponent } from './todaylist/todaylist.component';
import { HomeComponent } from './home/home.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppFoodListComponent,
    HeaderComponent,
    FormComponent,
    TodaylistComponent,
    HomeComponent,
    SearchPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
