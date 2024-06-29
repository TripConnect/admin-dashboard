import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { User } from '../models/graphql';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private findUsersQuery: QueryRef<{users: User[]}, { searchTerm: string }>;

  constructor(private apollo: Apollo) {
    this.findUsersQuery = this.apollo.watchQuery({
      query: gql`query Users($searchTerm: String!) {
        users(searchTerm: $searchTerm) {
          id
          avatar
          username
          displayName
        }
      }`
    });
  }

  async getUsers(searchTerm: string): Promise<User[]> {
    const result = await this.findUsersQuery.refetch({ searchTerm });
    return result.data.users;
  }
}
