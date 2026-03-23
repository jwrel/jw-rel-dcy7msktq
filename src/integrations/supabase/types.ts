export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '14.1'
  }
  public: {
    Tables: {
      important_events: {
        Row: {
          created_at: string
          deleted_at: string | null
          device_id: string
          dismissed: boolean
          event_date: string
          event_type: string
          id: string
          notes: string | null
          profile_id: string | null
          reminder_before: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          device_id: string
          dismissed?: boolean
          event_date: string
          event_type?: string
          id?: string
          notes?: string | null
          profile_id?: string | null
          reminder_before?: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          device_id?: string
          dismissed?: boolean
          event_date?: string
          event_type?: string
          id?: string
          notes?: string | null
          profile_id?: string | null
          reminder_before?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'important_events_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      monthly_history_imports: {
        Row: {
          created_at: string
          credits: number | null
          deleted_at: string | null
          device_id: string
          hours: number
          id: string
          month: number
          notes: string | null
          profile_id: string | null
          revisitas: number
          source: string | null
          studies: number
          updated_at: string
          year: number
        }
        Insert: {
          created_at?: string
          credits?: number | null
          deleted_at?: string | null
          device_id: string
          hours?: number
          id?: string
          month: number
          notes?: string | null
          profile_id?: string | null
          revisitas?: number
          source?: string | null
          studies?: number
          updated_at?: string
          year: number
        }
        Update: {
          created_at?: string
          credits?: number | null
          deleted_at?: string | null
          device_id?: string
          hours?: number
          id?: string
          month?: number
          notes?: string | null
          profile_id?: string | null
          revisitas?: number
          source?: string | null
          studies?: number
          updated_at?: string
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: 'monthly_history_imports_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      payments: {
        Row: {
          amount: number | null
          created_at: string
          currency: string | null
          email: string
          id: string
          paid_at: string | null
          provider: string
          provider_sale_id: string | null
          raw_payload: Json | null
          status: string
          user_id: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          currency?: string | null
          email: string
          id?: string
          paid_at?: string | null
          provider?: string
          provider_sale_id?: string | null
          raw_payload?: Json | null
          status: string
          user_id?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          currency?: string | null
          email?: string
          id?: string
          paid_at?: string | null
          provider?: string
          provider_sale_id?: string | null
          raw_payload?: Json | null
          status?: string
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          congregation: string | null
          created_at: string
          device_id: string
          email: string | null
          id: string
          name: string | null
          notes: string | null
          pioneer_start_date: string | null
          recipient_email: string | null
          recipient_name: string | null
          recipient_whatsapp: string | null
          service_role: string | null
          updated_at: string
          user_id: string | null
          whatsapp: string | null
        }
        Insert: {
          congregation?: string | null
          created_at?: string
          device_id: string
          email?: string | null
          id?: string
          name?: string | null
          notes?: string | null
          pioneer_start_date?: string | null
          recipient_email?: string | null
          recipient_name?: string | null
          recipient_whatsapp?: string | null
          service_role?: string | null
          updated_at?: string
          user_id?: string | null
          whatsapp?: string | null
        }
        Update: {
          congregation?: string | null
          created_at?: string
          device_id?: string
          email?: string | null
          id?: string
          name?: string | null
          notes?: string | null
          pioneer_start_date?: string | null
          recipient_email?: string | null
          recipient_name?: string | null
          recipient_whatsapp?: string | null
          service_role?: string | null
          updated_at?: string
          user_id?: string | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      service_sessions: {
        Row: {
          created_at: string
          deleted_at: string | null
          device_id: string
          duration_seconds: number
          id: string
          notes: string | null
          profile_id: string | null
          session_date: string
          source: string | null
          sync_status: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          device_id: string
          duration_seconds?: number
          id?: string
          notes?: string | null
          profile_id?: string | null
          session_date: string
          source?: string | null
          sync_status?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          device_id?: string
          duration_seconds?: number
          id?: string
          notes?: string | null
          profile_id?: string | null
          session_date?: string
          source?: string | null
          sync_status?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'service_sessions_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      students: {
        Row: {
          active: boolean | null
          address: string | null
          contact_type: string | null
          created_at: string
          deleted_at: string | null
          device_id: string
          id: string
          latitude: number | null
          location_text: string | null
          longitude: number | null
          name: string
          notes: string | null
          profile_id: string | null
          updated_at: string
        }
        Insert: {
          active?: boolean | null
          address?: string | null
          contact_type?: string | null
          created_at?: string
          deleted_at?: string | null
          device_id: string
          id?: string
          latitude?: number | null
          location_text?: string | null
          longitude?: number | null
          name: string
          notes?: string | null
          profile_id?: string | null
          updated_at?: string
        }
        Update: {
          active?: boolean | null
          address?: string | null
          contact_type?: string | null
          created_at?: string
          deleted_at?: string | null
          device_id?: string
          id?: string
          latitude?: number | null
          location_text?: string | null
          longitude?: number | null
          name?: string
          notes?: string | null
          profile_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'students_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      study_records: {
        Row: {
          created_at: string
          deleted_at: string | null
          device_id: string
          duration_minutes: number | null
          id: string
          notes: string | null
          profile_id: string | null
          student_id: string | null
          study_date: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          device_id: string
          duration_minutes?: number | null
          id?: string
          notes?: string | null
          profile_id?: string | null
          student_id?: string | null
          study_date: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          device_id?: string
          duration_minutes?: number | null
          id?: string
          notes?: string | null
          profile_id?: string | null
          student_id?: string | null
          study_date?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'study_records_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'study_records_student_id_fkey'
            columns: ['student_id']
            isOneToOne: false
            referencedRelation: 'students'
            referencedColumns: ['id']
          },
        ]
      }
      subscriptions: {
        Row: {
          created_at: string
          email: string
          expires_at: string | null
          id: string
          last_payment_at: string | null
          plan_name: string | null
          product_id: string | null
          product_name: string | null
          provider: string
          provider_customer_id: string | null
          provider_sale_id: string | null
          raw_payload: Json | null
          starts_at: string | null
          status: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          expires_at?: string | null
          id?: string
          last_payment_at?: string | null
          plan_name?: string | null
          product_id?: string | null
          product_name?: string | null
          provider?: string
          provider_customer_id?: string | null
          provider_sale_id?: string | null
          raw_payload?: Json | null
          starts_at?: string | null
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          expires_at?: string | null
          id?: string
          last_payment_at?: string | null
          plan_name?: string | null
          product_id?: string | null
          product_name?: string | null
          provider?: string
          provider_customer_id?: string | null
          provider_sale_id?: string | null
          raw_payload?: Json | null
          starts_at?: string | null
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      sync_logs: {
        Row: {
          action: string | null
          created_at: string
          device_id: string
          entity_id: string | null
          entity_type: string
          error_message: string | null
          id: string
          status: string | null
        }
        Insert: {
          action?: string | null
          created_at?: string
          device_id: string
          entity_id?: string | null
          entity_type: string
          error_message?: string | null
          id?: string
          status?: string | null
        }
        Update: {
          action?: string | null
          created_at?: string
          device_id?: string
          entity_id?: string | null
          entity_type?: string
          error_message?: string | null
          id?: string
          status?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] & DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
