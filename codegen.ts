
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:1337/graphql",
  documents: ["./**/*.tsx"],
  generates: {
    './gql/': {
      preset: "client",
      plugins: [
        "typescript",
        "typescript-resolvers",
      ]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  },
  ignoreNoDocuments: true,
};

export default config;
