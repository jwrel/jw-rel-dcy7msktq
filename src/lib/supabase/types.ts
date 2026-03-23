// AVOID UPDATING THIS FILE DIRECTLY. It is automatically generated.
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      important_events: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          device_id: string | null
          dismissed: boolean | null
          event_date: string
          event_type: string
          id: string
          notes: string | null
          profile_id: string | null
          reminder_before: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          device_id?: string | null
          dismissed?: boolean | null
          event_date: string
          event_type: string
          id?: string
          notes?: string | null
          profile_id?: string | null
          reminder_before?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          device_id?: string | null
          dismissed?: boolean | null
          event_date?: string
          event_type?: string
          id?: string
          notes?: string | null
          profile_id?: string | null
          reminder_before?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      monthly_history_imports: {
        Row: {
          created_at: string | null
          credits: number | null
          deleted_at: string | null
          device_id: string | null
          hours: number | null
          id: string
          month: number
          notes: string | null
          profile_id: string | null
          revisitas: number | null
          source: string | null
          studies: number | null
          updated_at: string | null
          year: number
        }
        Insert: {
          created_at?: string | null
          credits?: number | null
          deleted_at?: string | null
          device_id?: string | null
          hours?: number | null
          id?: string
          month: number
          notes?: string | null
          profile_id?: string | null
          revisitas?: number | null
          source?: string | null
          studies?: number | null
          updated_at?: string | null
          year: number
        }
        Update: {
          created_at?: string | null
          credits?: number | null
          deleted_at?: string | null
          device_id?: string | null
          hours?: number | null
          id?: string
          month?: number
          notes?: string | null
          profile_id?: string | null
          revisitas?: number | null
          source?: string | null
          studies?: number | null
          updated_at?: string | null
          year?: number
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: number | null
          created_at: string | null
          currency: string | null
          email: string | null
          id: string
          paid_at: string | null
          provider: string
          provider_sale_id: string | null
          raw_payload: Json | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string | null
          currency?: string | null
          email?: string | null
          id?: string
          paid_at?: string | null
          provider: string
          provider_sale_id?: string | null
          raw_payload?: Json | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string | null
          currency?: string | null
          email?: string | null
          id?: string
          paid_at?: string | null
          provider?: string
          provider_sale_id?: string | null
          raw_payload?: Json | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          congregation: string | null
          created_at: string | null
          device_id: string | null
          email: string | null
          id: string
          name: string | null
          notes: string | null
          pioneer_start_date: string | null
          recipient_email: string | null
          recipient_name: string | null
          recipient_whatsapp: string | null
          service_role: string
          updated_at: string | null
          user_id: string | null
          whatsapp: string | null
        }
        Insert: {
          congregation?: string | null
          created_at?: string | null
          device_id?: string | null
          email?: string | null
          id?: string
          name?: string | null
          notes?: string | null
          pioneer_start_date?: string | null
          recipient_email?: string | null
          recipient_name?: string | null
          recipient_whatsapp?: string | null
          service_role: string
          updated_at?: string | null
          user_id?: string | null
          whatsapp?: string | null
        }
        Update: {
          congregation?: string | null
          created_at?: string | null
          device_id?: string | null
          email?: string | null
          id?: string
          name?: string | null
          notes?: string | null
          pioneer_start_date?: string | null
          recipient_email?: string | null
          recipient_name?: string | null
          recipient_whatsapp?: string | null
          service_role?: string
          updated_at?: string | null
          user_id?: string | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      service_sessions: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          device_id: string | null
          duration_seconds: number
          id: string
          notes: string | null
          profile_id: string | null
          session_date: string
          source: string | null
          sync_status: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          device_id?: string | null
          duration_seconds: number
          id?: string
          notes?: string | null
          profile_id?: string | null
          session_date: string
          source?: string | null
          sync_status?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          device_id?: string | null
          duration_seconds?: number
          id?: string
          notes?: string | null
          profile_id?: string | null
          session_date?: string
          source?: string | null
          sync_status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      students: {
        Row: {
          active: boolean | null
          address: string | null
          contact_type: string | null
          created_at: string | null
          deleted_at: string | null
          device_id: string | null
          id: string
          latitude: number | null
          location_text: string | null
          longitude: number | null
          name: string
          notes: string | null
          profile_id: string | null
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          address?: string | null
          contact_type?: string | null
          created_at?: string | null
          deleted_at?: string | null
          device_id?: string | null
          id?: string
          latitude?: number | null
          location_text?: string | null
          longitude?: number | null
          name: string
          notes?: string | null
          profile_id?: string | null
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          address?: string | null
          contact_type?: string | null
          created_at?: string | null
          deleted_at?: string | null
          device_id?: string | null
          id?: string
          latitude?: number | null
          location_text?: string | null
          longitude?: number | null
          name?: string
          notes?: string | null
          profile_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      study_records: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          device_id: string | null
          duration_minutes: number | null
          id: string
          notes: string | null
          profile_id: string | null
          student_id: string | null
          study_date: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          device_id?: string | null
          duration_minutes?: number | null
          id?: string
          notes?: string | null
          profile_id?: string | null
          student_id?: string | null
          study_date: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          device_id?: string | null
          duration_minutes?: number | null
          id?: string
          notes?: string | null
          profile_id?: string | null
          student_id?: string | null
          study_date?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string | null
          email: string | null
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
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          expires_at?: string | null
          id?: string
          last_payment_at?: string | null
          plan_name?: string | null
          product_id?: string | null
          product_name?: string | null
          provider: string
          provider_customer_id?: string | null
          provider_sale_id?: string | null
          raw_payload?: Json | null
          starts_at?: string | null
          status: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
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
          updated_at?: string | null
          user_id?: string | null
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const


// ====== DATABASE EXTENDED CONTEXT (auto-generated) ======
// This section contains actual PostgreSQL column types, constraints, RLS policies,
// functions, triggers, indexes and materialized views not present in the type definitions above.
// IMPORTANT: The TypeScript types above map UUID, TEXT, VARCHAR all to "string".
// Use the COLUMN TYPES section below to know the real PostgreSQL type for each column.
// Always use the correct PostgreSQL type when writing SQL migrations.

// --- COLUMN TYPES (actual PostgreSQL types) ---
// Use this to know the real database type when writing migrations.
// "string" in TypeScript types above may be uuid, text, varchar, timestamptz, etc.
// Table: important_events
//   id: uuid (not null, default: gen_random_uuid())
//   device_id: text (nullable)
//   profile_id: uuid (nullable)
//   title: text (not null)
//   event_type: text (not null)
//   event_date: timestamp with time zone (not null)
//   reminder_before: text (nullable)
//   notes: text (nullable)
//   dismissed: boolean (nullable, default: false)
//   created_at: timestamp with time zone (nullable, default: now())
//   updated_at: timestamp with time zone (nullable, default: now())
//   deleted_at: timestamp with time zone (nullable)
// Table: monthly_history_imports
//   id: uuid (not null, default: gen_random_uuid())
//   profile_id: uuid (nullable)
//   device_id: text (nullable)
//   month: integer (not null)
//   year: integer (not null)
//   hours: numeric (nullable)
//   studies: integer (nullable)
//   revisitas: integer (nullable)
//   credits: integer (nullable)
//   notes: text (nullable)
//   source: text (nullable)
//   created_at: timestamp with time zone (nullable, default: now())
//   updated_at: timestamp with time zone (nullable, default: now())
//   deleted_at: timestamp with time zone (nullable)
// Table: payments
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (nullable)
//   email: text (nullable)
//   provider: text (not null)
//   provider_sale_id: text (nullable)
//   amount: numeric (nullable)
//   currency: text (nullable)
//   status: text (nullable)
//   paid_at: timestamp with time zone (nullable)
//   raw_payload: jsonb (nullable)
//   created_at: timestamp with time zone (nullable, default: now())
// Table: profiles
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (nullable)
//   device_id: text (nullable)
//   name: text (nullable)
//   email: text (nullable)
//   whatsapp: text (nullable)
//   service_role: text (not null)
//   congregation: text (nullable)
//   notes: text (nullable)
//   pioneer_start_date: date (nullable)
//   recipient_name: text (nullable)
//   recipient_whatsapp: text (nullable)
//   recipient_email: text (nullable)
//   created_at: timestamp with time zone (nullable, default: now())
//   updated_at: timestamp with time zone (nullable, default: now())
// Table: service_sessions
//   id: uuid (not null, default: gen_random_uuid())
//   profile_id: uuid (nullable)
//   device_id: text (nullable)
//   session_date: date (not null)
//   duration_seconds: integer (not null)
//   notes: text (nullable)
//   sync_status: text (nullable)
//   source: text (nullable)
//   created_at: timestamp with time zone (nullable, default: now())
//   updated_at: timestamp with time zone (nullable, default: now())
//   deleted_at: timestamp with time zone (nullable)
// Table: students
//   id: uuid (not null, default: gen_random_uuid())
//   profile_id: uuid (nullable)
//   device_id: text (nullable)
//   name: text (not null)
//   address: text (nullable)
//   location_text: text (nullable)
//   contact_type: text (nullable)
//   notes: text (nullable)
//   active: boolean (nullable, default: true)
//   latitude: double precision (nullable)
//   longitude: double precision (nullable)
//   created_at: timestamp with time zone (nullable, default: now())
//   updated_at: timestamp with time zone (nullable, default: now())
//   deleted_at: timestamp with time zone (nullable)
// Table: study_records
//   id: uuid (not null, default: gen_random_uuid())
//   profile_id: uuid (nullable)
//   student_id: uuid (nullable)
//   device_id: text (nullable)
//   study_date: date (not null)
//   duration_minutes: integer (nullable)
//   notes: text (nullable)
//   created_at: timestamp with time zone (nullable, default: now())
//   updated_at: timestamp with time zone (nullable, default: now())
//   deleted_at: timestamp with time zone (nullable)
// Table: subscriptions
//   id: uuid (not null, default: gen_random_uuid())
//   user_id: uuid (nullable)
//   email: text (nullable)
//   provider: text (not null)
//   provider_customer_id: text (nullable)
//   provider_sale_id: text (nullable)
//   product_id: text (nullable)
//   product_name: text (nullable)
//   plan_name: text (nullable)
//   status: text (not null)
//   starts_at: timestamp with time zone (nullable)
//   expires_at: timestamp with time zone (nullable)
//   last_payment_at: timestamp with time zone (nullable)
//   raw_payload: jsonb (nullable)
//   created_at: timestamp with time zone (nullable, default: now())
//   updated_at: timestamp with time zone (nullable, default: now())

// --- CONSTRAINTS ---
// Table: important_events
//   PRIMARY KEY important_events_pkey: PRIMARY KEY (id)
// Table: monthly_history_imports
//   PRIMARY KEY monthly_history_imports_pkey: PRIMARY KEY (id)
// Table: payments
//   PRIMARY KEY payments_pkey: PRIMARY KEY (id)
// Table: profiles
//   FOREIGN KEY fk_user: FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
//   PRIMARY KEY profiles_pkey: PRIMARY KEY (id)
// Table: service_sessions
//   PRIMARY KEY service_sessions_pkey: PRIMARY KEY (id)
// Table: students
//   PRIMARY KEY students_pkey: PRIMARY KEY (id)
// Table: study_records
//   PRIMARY KEY study_records_pkey: PRIMARY KEY (id)
// Table: subscriptions
//   PRIMARY KEY subscriptions_pkey: PRIMARY KEY (id)

// --- ROW LEVEL SECURITY POLICIES ---
// Table: profiles
//   Policy "Users can manage own profile" (ALL, PERMISSIVE) roles={public}
//     USING: (auth.uid() = user_id)

