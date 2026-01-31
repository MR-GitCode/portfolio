import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavMenuService {
    isNavMenuOpen = signal(false)

    openNavMenu() {
      this.isNavMenuOpen.set(true);
    }
    
    closeNavMenu() {
      this.isNavMenuOpen.set(false);
    }
}
