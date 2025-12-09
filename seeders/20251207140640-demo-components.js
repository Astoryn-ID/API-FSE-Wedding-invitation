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
      },
      {
        key: 'quote',
        display_name: 'Quote',
        category: 'body',
        schema_json: JSON.stringify({
          text: { type: 'string' },
          author: { type: 'string' }
        }),
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'saveDate',
        display_name: 'Save The Date',
        category: 'body',
        schema_json: JSON.stringify({
          date: { type: 'string' },
          note: { type: 'string' }
        }),
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'countdown',
        display_name: 'Countdown',
        category: 'body',
        schema_json: JSON.stringify({
          targetDate: { type: 'string' }
        }),
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'program',
        display_name: 'Program',
        category: 'body',
        schema_json: JSON.stringify({
          items: { type: 'array' }
        }),
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'dresscode',
        display_name: 'Dress Code',
        category: 'body',
        schema_json: JSON.stringify({
          palette: { type: 'array' },
          description: { type: 'string' }
        }),
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'location',
        display_name: 'Location',
        category: 'body',
        schema_json: JSON.stringify({
          title: { type: 'string' },
          address: { type: 'string' },
          mapUrl: { type: 'string' }
        }),
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'rsvp',
        display_name: 'RSVP',
        category: 'body',
        schema_json: JSON.stringify({
          ctaText: { type: 'string' },
          ctaUrl: { type: 'string' }
        }),
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'details',
        display_name: 'Details',
        category: 'body',
        schema_json: JSON.stringify({
          content: { type: 'string' }
        }),
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'faq',
        display_name: 'FAQ',
        category: 'body',
        schema_json: JSON.stringify({
          items: { type: 'array' }
        }),
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'divider',
        display_name: 'Divider',
        category: 'decoration',
        schema_json: JSON.stringify({}),
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'heroPhoto',
        display_name: 'Hero Photo',
        category: 'media',
        schema_json: JSON.stringify({
          image: { type: 'string' },
          overlayTitle: { type: 'string' },
          overlaySubtitle: { type: 'string' }
        }),
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})

    // get inserted component ids
    const [components] = await queryInterface.sequelize.query(
      `SELECT id, key FROM "Components" WHERE key IN ('header','hero','story','gallery','footer','quote','saveDate','countdown','program','dresscode','location','rsvp','details','faq','divider','heroPhoto')`
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
      },
      {
        component_id: compByKey['quote'],
        variant_key: 'quote:script-v1',
        component_type: 'quote',
        display_name: 'Quote Script',
        preview_url: null,
        version: 1,
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        component_id: compByKey['saveDate'],
        variant_key: 'saveDate:calendar-v1',
        component_type: 'saveDate',
        display_name: 'Save The Date Calendar',
        preview_url: null,
        version: 1,
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        component_id: compByKey['countdown'],
        variant_key: 'countdown:simple-v1',
        component_type: 'countdown',
        display_name: 'Countdown Simple',
        preview_url: null,
        version: 1,
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        component_id: compByKey['program'],
        variant_key: 'program:simple-v1',
        component_type: 'program',
        display_name: 'Program Schedule',
        preview_url: null,
        version: 1,
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        component_id: compByKey['dresscode'],
        variant_key: 'dresscode:palette-v1',
        component_type: 'dresscode',
        display_name: 'Dress Code Palette',
        preview_url: null,
        version: 1,
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        component_id: compByKey['location'],
        variant_key: 'location:card-v1',
        component_type: 'location',
        display_name: 'Location Card',
        preview_url: null,
        version: 1,
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        component_id: compByKey['rsvp'],
        variant_key: 'rsvp:cta-v1',
        component_type: 'rsvp',
        display_name: 'RSVP CTA',
        preview_url: null,
        version: 1,
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        component_id: compByKey['details'],
        variant_key: 'details:paragraph-v1',
        component_type: 'details',
        display_name: 'Details Paragraph',
        preview_url: null,
        version: 1,
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        component_id: compByKey['faq'],
        variant_key: 'faq:list-v1',
        component_type: 'faq',
        display_name: 'FAQ List',
        preview_url: null,
        version: 1,
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        component_id: compByKey['divider'],
        variant_key: 'divider:ornate-v1',
        component_type: 'divider',
        display_name: 'Divider Ornate',
        preview_url: null,
        version: 1,
        meta: JSON.stringify({}),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        component_id: compByKey['heroPhoto'],
        variant_key: 'heroPhoto:overlay-v1',
        component_type: 'heroPhoto',
        display_name: 'Hero Photo Overlay',
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
        'gallery:carousel-v1','footer:minimal-v1','footer:elegant-v1',
        'quote:script-v1','saveDate:calendar-v1','countdown:simple-v1','program:simple-v1','dresscode:palette-v1','location:card-v1','rsvp:cta-v1','details:paragraph-v1','faq:list-v1','divider:ornate-v1','heroPhoto:overlay-v1'
      ]
    }, {})
    await queryInterface.bulkDelete('Components', {
      key: ['header','hero','story','gallery','footer','quote','saveDate','countdown','program','dresscode','location','rsvp','details','faq','divider','heroPhoto']
    }, {})
  }
}
