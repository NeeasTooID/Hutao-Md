import { sfwNekoV2 } from 'neastooapi';

export const cmd = {
    name: ['neko'],
    command: ['neko'],
    category: ['anime'],
    detail: {
        desc: 'Random gambar anime dengan tema neko.'
    },
    setting: {
        error_react: true
    },
    async start({ m }) {
        await m.react('🕓');
        const res = await sfwNekoV2(); // Memanggil module neastooapi untuk mendapatkan gambar Neko
        await m.reply('Random neko image.', { image: res.results });
        await m.react('✅');
    }
};
