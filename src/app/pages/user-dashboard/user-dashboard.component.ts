import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type User = {
  id: number;
  displayName: string;
}

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {
  pageSize: number = 100;
  pageNumber: number = 1;
  users: User[] = [];

  ngOnInit(): void {
    this.users = [
      {id: 1, displayName: 'foo'},
      {id: 1, displayName: 'bar'},
      {id: 1, displayName: 'baz'},
    ];
  }

}
