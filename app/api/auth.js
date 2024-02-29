'use server'

import { AuthError, createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ocmuyepjcnzhlwxsrxeb.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


export async function signIn(req) {
let { data, error } = await supabase.auth.signInWithPassword({
  email: req.email,
  password: req.password 
});
return !error;

}

export async function signUp(email, password) {
    let { data, error } = await supabase.auth.signUp({
  email: email,
  password: password
});
}

export async function authed() {
    const { data: { user } } = await supabase.auth.getUser()
    return !!user;
}

// const sessionLength= 10 * 365 * 24 * 60 * 60 * 1000; // 10 years in milliseconds
// export async function refreshSession() {
//     const { data, error } = await supabase.auth.setSession({
//         access_token,
//         refresh_token
//     })
// }