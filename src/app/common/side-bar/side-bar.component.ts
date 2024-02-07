import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router,private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {

  }

  onNavigate(direction: string) {
    this.router.navigate([direction]);
  }

  isRouteActive(routePath: string): boolean {
    return this.router.isActive(routePath, true);
  }

}
