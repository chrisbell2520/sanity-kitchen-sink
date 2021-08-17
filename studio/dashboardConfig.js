export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '611b9128e822be00efc7a993',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-pim11rva',
                  apiId: 'd18f14de-ce71-4292-bbdd-b523e4de078f'
                },
                {
                  buildHookId: '611b912883ce670098bcd90b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-bs4ohduw',
                  apiId: '687c007a-7ef6-4621-bf6e-2c0b88b922fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisbell2520/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-bs4ohduw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
