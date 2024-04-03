/**
 * This plugin contains all the logic for setting up the `Settings` singleton
 */
import { BookIcon } from '@sanity/icons';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { GiFamilyHouse } from 'react-icons/gi';
import { definePlugin, type DocumentDefinition } from 'sanity';
import { type StructureResolver } from 'sanity/structure';

export const settingsPlugin = definePlugin<{ type: string }>(({ type }) => {
  return {
    name: 'settings',
    document: {
      // Hide 'Settings' from new document options
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === 'global') {
          return prev.filter((templateItem) => templateItem.templateId !== type);
        }

        return prev;
      },
      // Removes the "duplicate" action on the "settings" singleton
      actions: (prev, { schemaType }) => {
        if (schemaType === type) {
          return prev.filter(({ action }) => action !== 'duplicate');
        }

        return prev;
      },
    },
  };
});

// The StructureResolver is how we're changing the DeskTool structure to linking to a single "Settings" document, instead of rendering "settings" in a list
// like how "Post" and "Author" is handled.
export const settingsStructure = (typeDef: DocumentDefinition): StructureResolver => {
  return (S, context) => {
    // The `Settings` root list item
    const settingsListItem = // A singleton not using `documentListItem`, eg no built-in preview
      S.listItem().title(typeDef.title).icon(typeDef.icon).child(S.editor().id(typeDef.name).schemaType(typeDef.name).documentId(typeDef.name));
    const webpages = S.documentTypeListItems().find((listItem) => listItem.getId() === 'page');
    // The default root list items (except custom ones)
    const defaultListItems = S.documentTypeListItems()
      .filter((listItem) => listItem.getId() !== typeDef.name)
      .filter((listItem) => listItem.getId() !== 'post')
      .filter((listItem) => listItem.getId() !== 'listing')
      .filter((listItem) => listItem.getId() !== 'vacationRentals')
      .filter((listItem) => listItem.getId() !== 'rentals')
      .filter((listItem) => listItem.getId() !== 'page');
    return S.list()
      .title('Content')
      .items([
        settingsListItem,
        webpages,
        S.divider(),
        orderableDocumentListDeskItem({
          icon: GiFamilyHouse,
          type: 'listing', // Use your document type name here
          title: 'Listings',
          S,
          context,
        }),
        orderableDocumentListDeskItem({
          icon: GiFamilyHouse,
          type: 'rentals', // Use your document type name here
          title: 'Rentals',
          S,
          context,
        }),
        orderableDocumentListDeskItem({
          icon: GiFamilyHouse,
          type: 'vacationRentals', // Use your document type name here
          title: 'Vacation Rentals',
          S,
          context,
        }),
        orderableDocumentListDeskItem({
          icon: BookIcon,
          type: 'post', // Use your document type name here
          title: 'Blog Posts',
          S,
          context,
        }),
        // S.listItem()
        //   .title('Posts')
        //   .child(
        //     orderableDocumentListDeskItem({
        //       type: 'post', // Use your document type name here
        //       // title: 'Ordered Posts',
        //       S,
        //       context,
        //     })
        //   ),
        S.divider(),
        ...defaultListItems,
      ]);
  };
};
