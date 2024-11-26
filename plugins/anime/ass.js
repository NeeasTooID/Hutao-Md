import { sfwxassV1 } from 'neastooapi';

export const cmd = {
    name: ['ass'],
    command: ['ass'],
    category: ['anime'],
    detail: {
        desc: 'Random foto anime ass 18+.'
    },
    setting: {
        error_react: true,
        isNsfw: true
    },
    async start({ m }) {
        await m.react('🕓');
        const res = await sfwxassV1(); // Memanggil module neastooapi untuk mendapatkan gambar
        await m.reply('Random ass image.', { image: res.results });
        await m.react('✅');
    }
};
