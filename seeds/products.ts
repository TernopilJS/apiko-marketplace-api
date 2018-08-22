import knex from 'knex';

export function seed(knex: knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(() => knex('products').insert([
      {
        title: 'Apple iPhone 5 16Gb Black',
        description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
        image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
        price: 8457.0,
      },
      {
        title: 'Apple iPhone 6 16Gb Black',
        description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
        image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
        price: 8457.0,
      },
      {
        title: 'Apple iPhone 7 16Gb Black',
        description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
        image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
        price: 8457.0,
      },
      {
        title: 'Apple iPhone 8 16Gb Black',
        description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
        image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
        price: 8457.0,
      },
      {
        title: 'Apple iPhone 9 16Gb Black',
        description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
        image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
        price: 8457.0,
      },
      {
        title: 'Apple iPhone 10 16Gb Black',
        description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
        image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
        price: 8457.0,
      },
      {
        title: 'Apple iPhone 11 16Gb Black',
        description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
        image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
        price: 8457.0,
      },
      {
        title: 'Apple iPhone 12 16Gb Black',
        description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
        image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
        price: 8457.0,
      },
      {
        title: 'Apple iPhone 13 16Gb Black',
        description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
        image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
        price: 8457.0,
      },
      {
        title: 'Apple iPhone 14 16Gb Black',
        description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
        image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
        price: 8457.0,
      },
      {
        title: 'Apple iPhone 15 16Gb Black',
        description: 'Екран Retina 4" (1136x640), ємнісний Multi-Touch / моноблок / двоядерний Apple A7 (1.3 ГГц) / ОЗП 1 ГБ / основна камера 8 Мп, фронтальна 1.2 Мп / Bluetooth 4.0 / Wi-Fi 802.11a/b/g/n / A-GPS / GLONASS / 32 ГБ вбудованої памяті / розєм 3.5 мм ',
        image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
        price: 8457.0,
      },
    ]));
};
