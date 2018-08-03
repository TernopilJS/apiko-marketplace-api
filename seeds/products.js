
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          id: 1,
          title: 'Apple iPhone 5 16Gb Black',
          description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
          image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
          price: 8457.0,
        },
        {
          id: 2,
          title: 'Apple iPhone 6 16Gb Black',
          description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
          image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
          price: 8457.0,
        },
        {
          id: 3,
          title: 'Apple iPhone 7 16Gb Black',
          description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
          image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
          price: 8457.0,
        },
        {
          id: 4,
          title: 'Apple iPhone 8 16Gb Black',
          description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
          image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
          price: 8457.0,
        },
        {
          id: 5,
          title: 'Apple iPhone 9 16Gb Black',
          description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
          image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
          price: 8457.0,
        },
        {
          id: 6,
          title: 'Apple iPhone 10 16Gb Black',
          description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
          image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
          price: 8457.0,
        },
        {
          id: 7,
          title: 'Apple iPhone 11 16Gb Black',
          description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
          image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
          price: 8457.0,
        },
        {
          id: 8,
          title: 'Apple iPhone 12 16Gb Black',
          description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
          image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
          price: 8457.0,
        },
        {
          id: 9,
          title: 'Apple iPhone 13 16Gb Black',
          description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
          image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
          price: 8457.0,
        },
        {
          id: 10,
          title: 'Apple iPhone 14 16Gb Black',
          description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
          image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
          price: 8457.0,
        },
        {
          id: 11,
          title: 'Apple iPhone 15 16Gb Black',
          description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
          image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
          price: 8457.0,
        },
      ]);
    });
};
