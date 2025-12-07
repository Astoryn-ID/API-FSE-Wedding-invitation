'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // insert base components
    await queryInterface.bulkInsert('Components', [
      {
        key: 'header',
        display_name: 'Header',
        category: 'header',
        schema_json: JSON.stringify({
          title: { type: 'string' },
          subtitle: { type: 'string' },
          logo: { type: 'string' }
        }),
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'hero',
        display_name: 'Hero',
        category: 'body',
        schema_json: JSON.stringify({
          headline: { type: 'string' },
          date: { type: 'string' },
          image: { type: 'string' }
        }),
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'story',
        display_name: 'Story / Timeline',
        category: 'body',
        schema_json: JSON.stringify({
          events: { type: 'array' }
        }),
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'gallery',
        display_name: 'Gallery / Carousel',
        category: 'media',
        schema_json: JSON.stringify({
          images: { type: 'array' }
        }),
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'footer',
        display_name: 'Footer',
        category: 'footer',
        schema_json: JSON.stringify({
          copyright: { type: 'string' }
        }),
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})

    // get inserted component ids
    const [components] = await queryInterface.sequelize.query(
      `SELECT id, key FROM "Components" WHERE key IN ('header','hero','story','gallery','footer')`
    )

    const compByKey = {}
    components.forEach(c => { compByKey[c.key] = c.id })

    // insert component variants
    await queryInterface.bulkInsert('ComponentVariants', [
      // header variants
      {
        component_id: compByKey['header'],
        variant_key: 'header:simple-v1',
        component_type: 'header',
        display_name: 'Header Simple',
        preview_url: null,
        version: 1,
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        component_id: compByKey['header'],
        variant_key: 'header:ornate-v1',
        component_type: 'header',
        display_name: 'Header Ornate',
        preview_url: null,
        version: 1,
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // hero variants
      {
        component_id: compByKey['hero'],
        variant_key: 'hero:classic-v1',
        component_type: 'hero',
        display_name: 'Hero Classic',
        preview_url: null,
        version: 1,
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // story / timeline variants
      {
        component_id: compByKey['story'],
        variant_key: 'story:timeline-v1',
        component_type: 'story',
        display_name: 'Story Timeline',
        preview_url: null,
        version: 1,
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // gallery
      {
        component_id: compByKey['gallery'],
        variant_key: 'gallery:carousel-v1',
        component_type: 'gallery',
        display_name: 'Gallery Carousel',
        preview_url: null,
        version: 1,
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // footer
      {
        component_id: compByKey['footer'],
        variant_key: 'footer:minimal-v1',
        component_type: 'footer',
        display_name: 'Footer Minimal',
        preview_url: null,
        version: 1,
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        component_id: compByKey['footer'],
        variant_key: 'footer:elegant-v1',
        component_type: 'footer',
        display_name: 'Footer Elegant',
        preview_url: null,
        version: 1,
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    // remove all inserted variants and components
    await queryInterface.bulkDelete('ComponentVariants', {
      variant_key: [
        'header:simple-v1','header:ornate-v1',
        'hero:classic-v1','story:timeline-v1',
        'gallery:carousel-v1','footer:minimal-v1','footer:elegant-v1'
      ]
    }, {})
    await queryInterface.bulkDelete('Components', {
      key: ['header','hero','story','gallery','footer']
    }, {})
  }
}

