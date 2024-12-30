import path from 'path'

const timeZone = 'Asia/Jakarta'

const tempName = 'temp'
global.tempDir = path.resolve(new URL('.', import.meta.url).pathname, tempName)

global.adUrl = "https://raw.githubusercontent.com/kajedevid/dbku/refs/heads/main/adsku.json"

global.pluginsUrl = "https://raw.githubusercontent.com/kajedevid/dbku/refs/heads/main/pluginsKu.json"

const owner = [
    ['6283897390164', 'NeofetchNpc'],
    ['6289653162830']
]

const defaultPrefix = ['/', '!', '#', '.', '-', '🗿']

const EmojiSw = ["🖤", "🤎", "💜", "💙", "💚", "💛", "🧡", "❤️", "🤍"];

export { timeZone, owner, defaultPrefix, EmojiSw }
