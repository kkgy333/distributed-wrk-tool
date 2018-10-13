import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from "@angular/cdk/layout";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {AppConfig, ROLES} from "./app.config";
import {Permission} from "./plugins/permission";

/**
 * 异步加载语言文件
 * @param {HttpClient} http
 * @returns {TranslateHttpLoader}
 */
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),

    AppRoutingModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _permission: Permission) {

    this._permission.define(ROLES.login, () => {
      console.log("permission login: ", !!AppConfig.getUser());
      return !!AppConfig.getUser();
    });

    this._permission.define(ROLES.logout, () => {
      console.log("permission logout: ", !AppConfig.getUser());
      return !AppConfig.getUser()
    })
  }
}
