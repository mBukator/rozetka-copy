import axios from 'axios';
import { useEffect, useState } from 'react';

const noop = () => {};
const defaultConfig = {
  onSuccess: noop,
  onError: noop,
};


const useFetch = (fn, config = defaultConfig, deps = []) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    isSuccess: true,
    isError: false,
    error: '',
  });

  const { onSuccess, onError } = config;

  const runFetch = () => {
    if (!fn) return null;

    setState((s) => ({
      ...s,
      isLoading: true,
    }));

    fn()
      .then((data) => {
        setState((s) => ({
          ...s,
          data,
          isLoading: false,
          isSuccess: true,
          isError: false,
          error: '',
        }));
        onSuccess(data);
      })
      .catch((error) => {
        setState({
          data: null,
          isLoading: false,
          isSuccess: false,
          isError: true,
          error: error.message || 'Failed to fetch',
        });
        onError(error);
      });
  };

  useEffect(runFetch, [...deps]);

  return { ...state };
};

export default useFetch;
