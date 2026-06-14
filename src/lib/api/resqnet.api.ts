import { supabase } from '@/lib/supabase'

// ---------------------------------------------------------------------------
// Profile type — mirrors the `profiles` table in Supabase
// ---------------------------------------------------------------------------
export type Profile = {
  id: string
  full_name: string | null
  phone: string | null
  avatar_url: string | null
  role: 'user' | 'volunteer'
  blood_group: string | null
  allergies: string | null
  conditions: string | null
  medications: string | null
  contact_name: string | null
  contact_phone: string | null
  is_verified: boolean
  created_at: string
  updated_at: string
}

export type SosEvent = {
  id: string
  user_id: string
  emergency_type: string | null
  severity: string | null
  status: 'active' | 'assigned' | 'completed' | 'cancelled'
  latitude: number | null
  longitude: number | null
  address: string | null
  description: string | null
  created_at: string
  resolved_at: string | null
}

// ---------------------------------------------------------------------------
// PROFILE API
// ---------------------------------------------------------------------------

/** Fetch the logged-in user's profile */
export async function getProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) { console.error('getProfile error:', error.message); return null }
  return data as Profile
}

/** Update the logged-in user's profile fields */
export async function updateProfile(
  userId: string,
  updates: Partial<Omit<Profile, 'id' | 'created_at' | 'updated_at'>>
): Promise<{ error: string | null }> {
  const { error } = await supabase
    .from('profiles')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', userId)

  return { error: error ? error.message : null }
}

/** Switch the user's role between 'user' and 'volunteer' */
export async function setUserRole(
  userId: string,
  role: 'user' | 'volunteer'
): Promise<{ error: string | null }> {
  return updateProfile(userId, { role })
}

// ---------------------------------------------------------------------------
// SOS API
// ---------------------------------------------------------------------------

/** Create a new SOS event and return its ID */
export async function createSosEvent(payload: {
  userId: string
  emergencyType?: string
  severity?: string
  latitude?: number
  longitude?: number
  address?: string
  description?: string
}): Promise<{ id: string | null; error: string | null }> {
  const { data, error } = await supabase
    .from('sos_events')
    .insert({
      user_id: payload.userId,
      emergency_type: payload.emergencyType ?? 'other',
      severity: payload.severity ?? 'high',
      latitude: payload.latitude,
      longitude: payload.longitude,
      address: payload.address,
      description: payload.description,
      status: 'active',
    })
    .select('id')
    .single()

  if (error) return { id: null, error: error.message }
  return { id: data.id, error: null }
}

/** Cancel an active SOS event */
export async function cancelSosEvent(
  sosId: string
): Promise<{ error: string | null }> {
  const { error } = await supabase
    .from('sos_events')
    .update({ status: 'cancelled', resolved_at: new Date().toISOString() })
    .eq('id', sosId)

  return { error: error ? error.message : null }
}

/** Fetch user's SOS history */
export async function getSosHistory(userId: string): Promise<SosEvent[]> {
  const { data, error } = await supabase
    .from('sos_events')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(20)

  if (error) { console.error('getSosHistory error:', error.message); return [] }
  return (data ?? []) as SosEvent[]
}

// ---------------------------------------------------------------------------
// EMERGENCY CONTACTS API
// ---------------------------------------------------------------------------

export type EmergencyContact = {
  id: string
  name: string
  phone: string
  relation: string | null
  priority: number
}

export async function getEmergencyContacts(userId: string): Promise<EmergencyContact[]> {
  const { data, error } = await supabase
    .from('emergency_contacts')
    .select('*')
    .eq('user_id', userId)
    .order('priority', { ascending: true })

  if (error) { console.error('getContacts error:', error.message); return [] }
  return (data ?? []) as EmergencyContact[]
}

export async function addEmergencyContact(
  userId: string,
  contact: Omit<EmergencyContact, 'id'>
): Promise<{ error: string | null }> {
  const { error } = await supabase
    .from('emergency_contacts')
    .insert({ user_id: userId, ...contact })

  return { error: error ? error.message : null }
}

export async function deleteEmergencyContact(contactId: string): Promise<{ error: string | null }> {
  const { error } = await supabase
    .from('emergency_contacts')
    .delete()
    .eq('id', contactId)

  return { error: error ? error.message : null }
}

// ---------------------------------------------------------------------------
// CONNECTION TEST
// ---------------------------------------------------------------------------

/** Quick connectivity test — call this from the browser console to verify setup */
export async function testSupabaseConnection(): Promise<void> {
  console.log('🔌 Testing Supabase connection...')
  const { data, error } = await supabase.from('profiles').select('count').limit(1)
  if (error) {
    console.error('❌ Connection FAILED:', error.message)
  } else {
    console.log('✅ Supabase connected successfully!', data)
  }
}
