import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  get client() {
    return this.supabase;
  }

  async login(username: string, password: string) {
    const { data, error } = await this.supabase
    .from('users')
    .select('*')
    .eq('username', username)
    .eq('password', password)
    .maybeSingle();

    if(error) {
      console.error('Erro no login', error.message);
      return null;
    }

    return data;
  }

  async createUser(username: string, password: string) {
    const { data, error } = await this.supabase
    .from('users')
    .insert({ username, password })
    .select()
    .single();

  if (error) {
    console.error('Erro a criar utilizador:', error.message);
    return null;
  }

  return data;
  }

}
