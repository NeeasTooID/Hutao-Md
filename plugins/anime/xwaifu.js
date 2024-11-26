import { sfwXwaifuV2 } from 'neastooapi';

export const cmd = {
    name: ['xwaifu'],
    command: ['xwaifu'],
    category: ['anime'],
    detail: {
        desc: 'Random gambar anime dengan tema xwaifu (NSFW).'
    },
    setting: {
        error_react: true,
        isNsfw: true  // Mengaktifkan NSFW
    },
    async start({ m }) {
        await m.react('🕓');
        const res = await sfwXwaifuV2(); // Memanggil module neastooapi untuk mendapatkan gambar Xwaifu
        await m.reply('Random xwaifu image.', { image: res.results });
        await m.react('✅');
    }
};
