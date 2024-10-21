
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:1337/graphql",
  documents: ["./**/*.tsx"],
  generates: {
    './gql/graphql.tsx': {
      plugins: [
        "typescript",
        "typescript-resolvers",
        "typescript-operations",
      ]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  },
  ignoreNoDocuments: true,
};

export default config;
