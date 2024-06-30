import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../translate-loader';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { change } from './actions/theme.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    UserDashboardComponent,
    TranslateModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'admin-dashboard';
  supported_langs: string[] = ['en', 'vi'];
  selectedLang: string = 'en';
  selectedTheme: string = 'light';

  constructor(public translate: TranslateService, private store: Store<{ theme: string }>) {
    this.translate.addLangs(this.supported_langs);
    this.translate.setDefaultLang(this.selectedLang);
    const browserLang = translate.getBrowserLang() as string;
    this.translate.use(browserLang.match(/en|vi/) ? browserLang : 'en');
  }

  switchLanguage() {
    this.translate.use(this.selectedLang);
  }

  switchTheme() {
    this.store.dispatch(change({theme: this.selectedTheme}));
  }

}
