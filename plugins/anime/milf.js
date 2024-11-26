import { sfwXmilfV1 } from 'neastooapi';

export const cmd = {
    name: ['milf'],
    command: ['milf'],
    category: ['anime'],
    detail: {
        desc: 'Random gambar anime dengan tema milf.'
    },
    setting: {
        error_react: true,
        isNsfw: true
    },
    async start({ m }) {
        await m.react('🕓');
        const res = await sfwXmilfV1(); // Memanggil module neastooapi untuk mendapatkan gambar Milf
        await m.reply('Random milf image.', { image: res.results });
        await m.react('✅');
    }
};
