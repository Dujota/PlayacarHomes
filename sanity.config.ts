/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision';
import { apiVersion, dataset, previewSecretId, projectId } from 'lib/sanity.api';
import { previewDocumentNode } from 'plugins/previewPane';
import { productionUrl } from 'plugins/productionUrl';
import { settingsPlugin, settingsStructure } from 'plugins/settings';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
// Document types
import agent from 'schemas/agent';
import authorType from 'schemas/author';
import listingType from 'schemas/listing';
import contactObject from 'schemas/objects/contact';
import galleryObject from 'schemas/objects/gallery';
import postType from 'schemas/post';
import settingsType from 'schemas/settings';
const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Playacar Homes Realty';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [authorType, postType, settingsType, listingType, agent, contactObject, galleryObject],
  },
  plugins: [
    deskTool({
      structure: settingsStructure(settingsType),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    settingsPlugin({ type: settingsType.name }),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: [postType.name, settingsType.name],
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
