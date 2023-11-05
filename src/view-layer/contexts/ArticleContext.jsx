import { createContext, useContext, useState, useCallback } from "react";
import { useArticle } from "../../data-layer/hooks/useArticles";
import useArticlesFilter from "../../data-layer/hooks/useArticlesFilter";

const ArticleContext = createContext()

export const ArticleProvider = ({ children }) => {
  const [filterMeta, filters] = useArticlesFilter()

  const value = useArticle(filters.source, filters.keyword)

  return (<>
    <ArticleContext.Provider value={{ ...value, filterMeta }}>
      {children}
    </ArticleContext.Provider>
  </>)
}

export const useArticleContext = () => {
  const context = useContext(ArticleContext);

  return context
}