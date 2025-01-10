export default {
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        
      },
      {
        name: 'summary',
        title: 'Summary',
        type: 'text',
        description: 'A brief introduction or summary of the post.',
        
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{ type: 'author' }],
        
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
        
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
       
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'block', // Correct block type for rich text
          }
        ],
        
      },
    ],
  };
  