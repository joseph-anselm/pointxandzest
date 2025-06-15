export default {
    name: 'portfolioProject',
    title: 'Portfolio Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Project Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'subtitle',
        title: 'Subtitle/Short Description',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Detailed Description',
        type: 'array',
        of: [{ type: 'block' }]
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'Web Development', value: 'Web Development' },
            { title: 'Mobile App', value: 'Mobile App' },
            { title: 'UI/UX Design', value: 'UI/UX Design' },
            { title: 'Digital Transformation', value: 'Digital Transformation' }
          ]
        }
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags'
        }
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'gallery',
        title: 'Gallery Images',
        type: 'array',
        of: [{ type: 'image' }]
      },
      {
        name: 'projectUrl',
        title: 'Live Project URL',
        type: 'url'
      },
      {
        name: 'codeUrl',
        title: 'Source Code URL',
        type: 'url'
      },
      {
        name: 'details',
        title: 'Project Details',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Detail Title',
                type: 'string'
              },
              {
                name: 'value',
                title: 'Detail Value',
                type: 'string'
              }
            ]
          }
        ]
      }
    ]
  }