import { sfwMeguminV2 } from 'neastooapi';

export const cmd = {
    name: ['megumin'],
    command: ['megumin'],
    category: ['anime'],
    detail: {
        desc: 'Random gambar anime dengan tema Megumin.'
    },
    setting: {
        error_react: true
    },
    async start({ m }) {
        await m.react('🕓');
        const res = await sfwMeguminV2(); // Memanggil module neastooapi untuk mendapatkan gambar Megumin
        await m.reply('Random Megumin image.', { image: res.results });
        await m.react('✅');
    }
};
