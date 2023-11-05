import useAsyncAction from "./useAsyncAction";
import { useCallback, useEffect, useReducer, useRef } from "react";
import { isEqual } from "lodash";
import { fetchArticles } from "../api";

const ARTICLE_FETCH = 'ARTICLE_FETCH'
const ARTICLE_RESET = 'ARTICLE_RESET'

const initialState = {
  articles: null,
  total: 0,
  page: 1
}

function reducer(state, action) {
  switch (action.type) {
    case ARTICLE_FETCH:
      const newData =
        action.articles?.reduce(
          (acc, curr) => {
            if (!state.articles?.find((i) => { i.authour === curr.authour && i.content === curr.content })) {
              acc.push(curr);
            }

            return acc;
          },
          [...(state.articles ?? [])]
        ) ?? [];

      return {
        articles: newData,
        total: action.total ? action.total : state.total,
        page: action.page && action.page > state.page ? action.page : state.page,
      };
    case ARTICLE_RESET:
      return { state: initialState }
    default: return state
  }
}

export const useArticle = (filterMeta, filters, pageSize = 20) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const filterRef = useRef()
  const filterMetaRef = useRef()

  const [fetchList, loading, { error }] = useAsyncAction(
    useCallback(async (filterMeta, filters, page) => {
      return await fetchArticles(filterMeta, filters, page, pageSize)
    }, [pageSize]),

    useCallback((res, [, page]) => {
      dispatch({
        type: ARTICLE_FETCH,
        articles: res.articles,
        total: res.totalResults,
        page
      })
    })
  )

  useEffect(() => {
    if (!isEqual(filterRef.current, filters) || !isEqual(filterMetaRef.current, filterMeta)) {
      if (!isEqual(state, initialState)) {
        dispatch({ type: ARTICLE_RESET })
      }
      fetchList(filterMeta, filters, 1)
      filterRef.current = filters
      filterMetaRef.current = filterMeta
    }
  }, [fetchList, filterMeta, filters, state])

  const hasMore = state.total > (state.items?.length || 0);

  const loadMore = useCallback(() => {
    if (hasMore) {
      fetchList(filterMeta, filters, state.page + 1);
    }
  }, [filterMeta, filters, fetchList, state.page, hasMore]);

  return {
    articles: state.articles,
    loading,
    error,
    loadMore,
    hasMore
  }
}