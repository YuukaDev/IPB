import { autocomplete } from "@algolia/autocomplete-js";
import { createQuerySuggestionsPlugin } from "@algolia/autocomplete-plugin-query-suggestions";
import algoliasearch from "algoliasearch";

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY;
const searchClient = algoliasearch(appId, apiKey);

const querySuggestionsPlugin = createQuerySuggestionsPlugin({
  searchClient,
  indexName: "products",
  getSearchParams() {
    return {
      hitsPerPage: 10,
    };
  },
});

autocomplete({
  container: "#autocomplete",
  placeholder: "Search",
  openOnFocus: true,
  plugins: [querySuggestionsPlugin],
});

export default function AutocompleteContainer() {
  return (
    <div class="container">
      <div id="autocomplete"></div>
    </div>
  );
}
