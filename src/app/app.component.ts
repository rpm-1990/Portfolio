import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './layouts/landing/landing.component';
import { AboutComponent } from './layouts/about/about.component';
import { ServicesComponent } from './layouts/services/services.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { PortfolioComponent } from './layouts/portfolio/portfolio.component';
import { ResumeComponent } from './layouts/resume/resume.component';
import { ContactsComponent } from './layouts/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    LandingComponent,
    AboutComponent,
    ServicesComponent,
    ScrollTopComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'developer-portfolio';

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.initTheme();
  }
}
