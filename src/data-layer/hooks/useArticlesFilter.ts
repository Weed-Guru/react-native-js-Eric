import { useState } from "react";
import { debounce } from "lodash";

export default function useArticlesFilter() {
  const [keyword, _setKeyword] = useState("");
  const [source, _setSource] = useState('all');

  const debouncedSetKeyword = debounce(_setKeyword, 500);
  const debounceSetSource = debounce(_setSource)

  return [
    {
      setKeyword: debouncedSetKeyword,
      setSource: debounceSetSource
    },
    {
      keyword: keyword,
      source: source
    },
  ];
}
