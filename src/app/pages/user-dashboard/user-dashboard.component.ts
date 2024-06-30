import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/graphql';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, MatTableModule, TranslateModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {
  pageSize: number = 100;
  pageNumber: number = 1;
  users: User[] = [];
  activeUserId: string | null = null;
  theme$: Observable<string>;

  constructor(private usersService: UsersService, private store: Store<{ theme: string }>) {
    this.theme$ = store.select('theme');
  }

  ngOnInit(): void {
    this.usersService.getUsers('').then(users => {
      this.users = users;
    });
  }

  changeActiveUser($event: string) {
    this.activeUserId = $event;
  }

}
