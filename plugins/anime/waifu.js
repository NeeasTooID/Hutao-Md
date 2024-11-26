import { sfwWaifuV2 } from 'neastooapi';

export const cmd = {
    name: ['waifu'],
    command: ['waifu'],
    category: ['anime'],
    detail: {
        desc: 'Random gambar anime dengan tema waifu.'
    },
    setting: {
        error_react: true
    },
    async start({ m }) {
        await m.react('🕓');
        const res = await sfwWaifuV2(); // Memanggil module neastooapi untuk mendapatkan gambar Waifu
        await m.reply('Random waifu image.', { image: res.results });
        await m.react('✅');
    }
};
