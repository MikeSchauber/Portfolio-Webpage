import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { NgForm } from '@angular/forms';

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

  async sendMail(ngForm: NgForm) {
    const formular = ngForm.value;
    const { data, error } = await this.supabase.functions.invoke('send-mail', {
      body: {
        userName: formular.name,
        userMail: formular.email,
        message: formular.message,
      },
    });
    return { data, error };
  }
}
