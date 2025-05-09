import { Client, Account, ID } from 'appwrite';
import conf from '../conf/conf.prod.js';

class AuthenticationService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ username, password, email }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        username,
        password,
        email
      );

      return userAccount;
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );

      return session;
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();

      return user;
    } catch (error) {
      console.warn('Inside catch.....No user session found:');
      return null;
    }
  }

  async logout() {
    try {
      const exit = await this.account.deleteSessions();

      return exit;
    } catch (error) {
      throw error;
    }
  }
}

const auth = new AuthenticationService();

export default auth;
