import { sfwXnekoV2 } from 'neastooapi';

export const cmd = {
    name: ['xneko'],
    command: ['xneko'],
    category: ['anime'],
    detail: {
        desc: 'Random gambar anime dengan tema xneko (NSFW).'
    },
    setting: {
        error_react: true,
        isNsfw: true  // Mengaktifkan NSFW
    },
    async start({ m }) {
        await m.react('🕓');
        const res = await sfwXnekoV2(); // Memanggil module neastooapi untuk mendapatkan gambar Xneko
        await m.reply('Random xneko image.', { image: res.results });
        await m.react('✅');
    }
};
