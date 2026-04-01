import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey,
      {
        auth: {
          persistSession: false, // ← behebt den Lock-Konflikt
        },
      },
    );
  }

  getTodos() {
    return this.supabase.from('todos').select('*');
  }

  async sendMail() {
    const { data, error } = await this.supabase.functions.invoke('hello-world');
    console.log(data); // { message: 'Hello from Supabase!' }
    if (error) console.error(error);
  }
}
