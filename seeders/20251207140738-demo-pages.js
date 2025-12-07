'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // sample composition as array of instances
    const composition = [
      {
        uid: 'c1',
        variant: 'header:ornate-v1',
        props: {
          title: 'Adi & Sari',
          subtitle: 'Kami mengundang Anda',
          logo: '/assets/sample-logo.png'
        },
        position: 0
      },
      {
        uid: 'c2',
        variant: 'hero:classic-v1',
        props: {
          headline: 'Hari Bahagia Kami',
          date: '2026-06-12',
          image: '/assets/sample-hero.jpg'
        },
        position: 1
      },
      {
        uid: 'c3',
        variant: 'story:timeline-v1',
        props: {
          events: [
            { year: 2018, text: 'Pertemuan pertama' },
            { year: 2020, text: 'Mulai pacaran' },
            { year: 2025, text: 'Tunangan' }
          ]
        },
        position: 2
      },
      {
        uid: 'c4',
        variant: 'gallery:carousel-v1',
        props: {
          images: ['/assets/pic1.jpg','/assets/pic2.jpg','/assets/pic3.jpg']
        },
        position: 3
      },
      {
        uid: 'c5',
        variant: 'footer:minimal-v1',
        props: {
          copyright: 'Adi & Sari 2026'
        },
        position: 4
      }
    ]

    await queryInterface.bulkInsert('Pages', [
      {
        slug: 'adi-sari',
        title: 'Undangan Adi & Sari',
        composition_json: JSON.stringify({ components: composition }),
        theme_json: JSON.stringify({ brandColor: '#7B3F00', fontFamily: 'Inter, sans-serif' }),
        is_published: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pages', { slug: 'adi-sari' }, {})
  }
}
