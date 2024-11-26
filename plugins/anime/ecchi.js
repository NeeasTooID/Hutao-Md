import { sfwEcchiV1 } from 'neastooapi';

export const cmd = {
    name: ['ecchi'],
    command: ['ecchi'],
    category: ['anime'],
    detail: {
        desc: 'Random gambar anime dengan tema ecchi.'
    },
    setting: {
        error_react: true,
        isNsfw: true
    },
    async start({ m }) {
        await m.react('🕓');
        const res = await sfwEcchiV1(); // Memanggil module neastooapi untuk mendapatkan gambar Ecchi
        await m.reply('Random ecchi image.', { image: res.results });
        await m.react('✅');
    }
};
