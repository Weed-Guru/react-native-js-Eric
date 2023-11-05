import { useCallback, useReducer } from "react";

function buildReducer() {
  return (state, action) => {
    switch (action.type) {
      case 'LOADING':
        return {
          loading: true,
          success: false,
        };
      case 'SUCESS':
        return {
          loading: false,
          success: true,
          data: action.data,
        };
      case 'ERROR':
        return {
          loading: false,
          success: false,
          error: action.error,
        };
      default:
        throw new Error("Un-Implemented action type");
    }
  };
}

export default function useAsyncAction(
  func,
  onSuccess,
  onError
) {
  const initialState = {
    loading: false,
    success: false,
  };

  const [state, dispatch] = useReducer(buildReducer(), initialState);
  const action = useCallback(
    async (...args) => {
      dispatch({ type: 'LOADING' });

      try {
        const data = await func(...args);
        dispatch({ type: 'SUCESS', data });

        if (onSuccess) {
          onSuccess(data, args);
        }

        return data;
      } catch (err) {
        dispatch({ type: 'ERROR', error: err });

        if (onError) {
          onError(err);
        }
      }
    },
    [func, onError, onSuccess]
  );

  return [
    action,
    state.loading,
    {
      data: state.data,
      error: state.error,
      success: state.success,
    },
  ];
}
