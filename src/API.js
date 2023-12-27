import axios from 'axios';

const baseURL = 'https://fakestoreapi.com/';

const API = axios.create({
  baseURL,
});

export const getAllProducts = () => API.get('/products').then(({ data }) => data);

export const getProductById = (id) => API.get(`/products/${id}`).then(({data}) => data)