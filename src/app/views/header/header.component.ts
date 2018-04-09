import {
  Component,
  OnInit,
  HostListener,
  HostBinding,
  Inject,
  EventEmitter,
  Input,
  Output
} from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW_PROVIDERS, WINDOW } from "../../helpers/window.helper";

import { ThemeService } from "../../services/theme/theme.service";
@Component({
  selector: 'ng-landing-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
  @Output() onLangChange = new EventEmitter<any>();
  currentLang = 'nl';
  isFixed;
  availableLangs = [
    {
      name: 'NL',
      code: 'nl'
    },
    {
      name: 'DE NYI',
      code: 'de'
    },
    {
      name: 'EN NYI',
      code: 'en'
    }
  ];
  egretThemes;
  constructor(
    private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {}

  ngOnInit() {
    this.egretThemes = this.themeService.egretThemes;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset =
      this.window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0;
    if (offset > 100) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }

  @HostBinding('class.menu-opened') menuOpened = false;

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

  setLang() {
    this.onLangChange.emit(this.currentLang);
  }
  changeTheme(theme) {
    this.themeService.changeTheme(theme);
  }
}
