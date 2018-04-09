import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatGridListModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatOptionModule,
  MatRippleModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSnackBarModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonDirectivesModule } from '../directives/common/common-directives.module';
import { HomeRoutes } from './home.routing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './subheader/subheader.component';
import { IntroComponent } from './intro/intro.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioDetailComponent } from './portfolio.detail/detail.component';
import { PortfolioFotoAlbumComponent } from './portfolio.fotoalbum/fotoalbum.component';
import { GemeenteComponent } from './gemeente/gemeente.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

import { WINDOW_PROVIDERS } from '../helpers/window.helper';
import { ThemeService } from '../services/theme/theme.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatListModule,
    MatOptionModule,
    MatRippleModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    FlexLayoutModule,
    CommonDirectivesModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    SubHeaderComponent,
    IntroComponent,
    PortfolioComponent,
    PortfolioDetailComponent,
    PortfolioFotoAlbumComponent,
    ServicesComponent,
    GemeenteComponent,
    ContactComponent,
    FooterComponent
  ],
  providers: [WINDOW_PROVIDERS, ThemeService
]

})
export class HomeModule { }
