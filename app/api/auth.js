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
if(error) {
  return false;
} else {
  // console.log(data.user.email);
  return true;
}

}

export async function signUp(email, password) {
    let { data, error } = await supabase.auth.signUp({
  email: email,
  password: password
});
}

export async function authed() {
    const { data: { user } } = await supabase.auth.getUser()
    if(user) {
      return true;
    } else {
      return false;
    }
}