import path from 'path'

const timeZone = 'Asia/Jakarta'

const tempName = 'temp'
global.tempDir = path.resolve(new URL('.', import.meta.url).pathname, tempName)

global.adUrl = "https://raw.githubusercontent.com/NeofetchNpc/ArchiveTMP/refs/heads/main/img-mp4/adsku.json"

const owner = [
    ['6283897390164', 'NeofetchNpc']
]

const defaultPrefix = ['/', '!', '#', '.', '-', '🗿']

const EmojiSw = ["🖤", "🤎", "💜", "💙", "💚", "💛", "🧡", "❤️", "🤍"];

export { timeZone, owner, defaultPrefix, EmojiSw }
