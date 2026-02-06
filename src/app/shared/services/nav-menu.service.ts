import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavMenuService {
    isNavMenuOpen = signal(false)

    /**
     * Opens the navigation menu.
     * Sets the navigation menu state to visible.
     */
    openNavMenu() {
      this.isNavMenuOpen.set(true);
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    }
    
    /**
     * Closes the navigation menu.
     * Sets the navigation menu state to hidden
     */
    closeNavMenu() {
      this.isNavMenuOpen.set(false);
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
}
