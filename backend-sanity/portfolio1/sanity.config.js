import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio1',

  projectId: 'rnqjx9xv',
  dataset: 'portfolio_ds',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
