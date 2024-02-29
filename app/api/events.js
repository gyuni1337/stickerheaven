'use server'
import {createClient} from "@supabase/supabase-js";

const supabaseUrl = 'https://ocmuyepjcnzhlwxsrxeb.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export async function loadStickers() {
    let { data: stickers, error } = await supabase
        .from('stickers')
        .select('*')

    if(error) console.error(error);
    return stickers;
}

const getShuffledArr = arr => {
    const newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr
};

// creating limited stickers

let limited = [];
async function createLimited() {
    let allStickers = await loadStickers();

    for (let i = 0; i < 3; i++) {
        limited.push(getShuffledArr(allStickers)[0]);
    }

}

createLimited();

export async function sendLimited() {
    return limited;
}