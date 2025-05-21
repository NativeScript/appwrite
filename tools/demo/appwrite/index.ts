import { DemoSharedBase } from '../utils';
import { Client, Account, ID } from '@nativescript/appwrite';

export class DemoSharedAppwrite extends DemoSharedBase {
  client: Client;
  account: Account;

  constructor() {
    super();
    this.client = new Client().setEndpoint('https://<REGION>.cloud.appwrite.io/v1').setProject('<PROJECT_ID>');
    this.account = new Account(this.client);
  }

  async createAccount(email: string, password: string) {
    try {
      const response = await this.account.create(ID.unique(), email, password);
      console.log('Account created:', response);
    } catch (error) {
      console.error('Error creating account:', error);
    }
  }

  async login(email: string, password: string) {
    try {
      const response = await this.account.createEmailPasswordSession(email, password);
      console.log('Logged in:', response);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }

  async logout() {
    try {
      const response = await this.account.deleteSession('current');
      console.log('Logged out:', response);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }
}
