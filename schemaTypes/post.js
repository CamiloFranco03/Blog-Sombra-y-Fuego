export default {
    name: 'post',
    title: 'Entradas del Blog',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Título del Artículo',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug / URL Amigable',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'publishedAt',
        title: 'Fecha de Publicación',
        type: 'datetime',
        validation: Rule => Rule.required()
      },
      {
        name: 'excerpt',
        title: 'Resumen Corto (Para Tarjetas)',
        type: 'text',
        rows: 3,
        description: 'Texto breve que aparecerá en la grilla de la Home y en el catálogo.'
      },
      {
        name: 'mainImage',
        title: 'Imagen Principal',
        type: 'image',
        options: {
          hotspot: true, // Permite recortar la imagen de forma inteligente
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Texto Alternativo (SEO)',
          }
        ]
      },
      {
        name: 'cardStyle',
        title: 'Estilo Visual de la Tarjeta (Home)',
        type: 'string',
        options: {
          list: [
            { title: 'Box Oscuro (Borde Bronce)', value: 'dark' },
            { title: 'Box Dorado/Claro', value: 'light' },
            { title: 'Fondo de Imagen (Photo Overlay)', value: 'overlay' }
          ],
          layout: 'radio'
        },
        initialValue: 'dark',
        description: 'Define la apariencia que tendrá la tarjeta en la landing principal.'
      },
      {
        name: 'isFeatured',
        title: '¿Destacar en la Home?',
        type: 'boolean',
        description: 'Actívalo si este artículo debe mostrarse en los 6-7 slots de la landing principal.',
        initialValue: false
      },
      {
        name: 'body',
        title: 'Cuerpo del Artículo',
        type: 'array',
        of: [
          { type: 'block' }, // Permite títulos, negritas, listas y párrafos
          { 
            type: 'image',
            options: { hotspot: true },
            fields: [{ name: 'alt', type: 'string', title: 'Texto Alternativo' }]
          }
        ],
        description: 'El contenido completo de la entrada.'
      }
    ]
  }