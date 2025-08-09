import { Component } from '@angular/core';
import { AsideBar } from '../../components/aside-bar/aside-bar';
import { LucideAngularModule } from 'lucide-angular';
import { RouterOutlet } from '@angular/router'; // ✅ Required import
import { Header } from '../../components/header/header';
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    AsideBar,
    LucideAngularModule,
    Header,
    RouterOutlet // ✅ Include this to support <router-outlet>
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {}
