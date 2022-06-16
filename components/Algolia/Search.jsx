import React from "react";
import { getAlgoliaResults } from "@algolia/autocomplete-js";
import algoliasearch from "algoliasearch";
import { ProductItem } from "./ProductItem";
import { Autocomplete } from "./Autocomplete";

const appId = "8JOD4HOIAB";
const apiKey = "73111ebfaaa7f74d82e5d8f81db98c9a";
const searchClient = algoliasearch(appId, apiKey);

function Search() {
  return (
    <div className="bg-white max-w-sm m-auto rounded-3xl">
      <Autocomplete
        getSources={({ query }) => [
          {
            sourceId: "products",
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: "products",
                    query,
                    params: {
                      hitsPerPage: 5,
                    },
                  },
                ],
              });
            },
            templates: {
              item({ item, components }) {
                return <ProductItem hit={item} components={components} />;
              },
            },
          },
        ]}
      />
    </div>
  );
}

export default Search;
