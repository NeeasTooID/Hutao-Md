import { sfwMaidV1 } from 'neastooapi';

export const cmd = {
    name: ['maid'],
    command: ['maid'],
    category: ['anime'],
    detail: {
        desc: 'Random gambar anime dengan tema maid.'
    },
    setting: {
        error_react: true
    },
    async start({ m }) {
        await m.react('🕓');
        const res = await sfwMaidV1(); // Memanggil module neastooapi untuk mendapatkan gambar Maid
        await m.reply('Random maid image.', { image: res.results });
        await m.react('✅');
    }
};
