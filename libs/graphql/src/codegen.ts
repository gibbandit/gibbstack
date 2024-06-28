import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://127.0.0.1:3000/api/graphql',
  documents: ['libs/features/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    'libs/graphql/schema.graphql': {
      plugins: ['schema-ast'],
    },
    'libs/graphql/src/introspection.json': {
      plugins: ['urql-introspection'],
    },
    'libs/graphql/src/gql/': {
      preset: 'client',
    },
  },
};

export default config;
