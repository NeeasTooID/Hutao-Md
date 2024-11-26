import { sfwAwooV2 } from 'neastooapi';

export const cmd = {
    name: ['awoo'],
    command: ['awoo'],
    category: ['anime'],
    detail: {
        desc: 'Random gambar anime gadis serigala.'
    },
    setting: {
        error_react: true
    },
    async start({ m }) {
        await m.react('🕓');
        const res = await sfwAwooV2(); // Memanggil module neastooapi untuk mendapatkan gambar Awoo
        await m.reply('Random awoo image.', { image: res.results });
        await m.react('✅');
    }
};
