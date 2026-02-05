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
    }
    
    /**
     * Closes the navigation menu.
     * Sets the navigation menu state to hidden
     */
    closeNavMenu() {
      this.isNavMenuOpen.set(false);
    }
}
