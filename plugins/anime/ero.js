import { sfwEroV1 } from 'neastooapi';

export const cmd = {
    name: ['ero'],
    command: ['ero'],
    category: ['anime'],
    detail: {
        desc: 'Random gambar anime dengan tema ero.'
    },
    setting: {
        error_react: true,
        isNsfw: true
    },
    async start({ m }) {
        await m.react('🕓');
        const res = await sfwEroV1(); // Memanggil module neastooapi untuk mendapatkan gambar Ero
        await m.reply('Random ero image.', { image: res.results });
        await m.react('✅');
    }
};
