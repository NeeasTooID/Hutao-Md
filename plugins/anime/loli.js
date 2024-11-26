import { sfwLoliconV3 } from 'neastooapi';

export const cmd = {
    name: ['loli'],
    command: ['loli'],
    category: ['anime'],
    detail: {
        desc: 'Random gambar anime dengan tema lolicon.'
    },
    setting: {
        error_react: true,
        isNsfw: true
    },
    async start({ m }) {
        await m.react('🕓');
        const res = await sfwLoliconV3(); // Memanggil API untuk mendapatkan data

        // Menangani respons dan mengirimkan gambar
        const imageUrl = res.data[0]?.urls; // Mengambil URL gambar dari data

        if (imageUrl) {
            await m.reply('Random lolicon image.', { image: imageUrl });
            await m.react('✅');
        } else {
            await m.react('❌');
            await m.reply('Tidak ada gambar yang ditemukan.');
        }
    }
};