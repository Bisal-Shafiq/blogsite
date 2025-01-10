export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Allow cropping of the image
        },
        
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'text',
      },
    ],
  };
  