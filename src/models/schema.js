import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 2,
  tables: [
    tableSchema({
      name: 'todos',
      columns: [
        {name: 'title', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'newDescription', type: 'string'},
        {name: 'done', type: 'boolean'},
      ],
    }),
  ],
});
