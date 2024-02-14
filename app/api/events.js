'use server'
const supabaseUrl = 'https://ocmuyepjcnzhlwxsrxeb.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export async function loadStickers() {
    let { data: stickers, error } = await supabase
        .from('stickers')
        .select('*')
    return stickers;
}
