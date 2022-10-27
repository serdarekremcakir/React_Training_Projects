import {post,get,postJSON} from './request'

export const getUsers = () => get('https://jsonplaceholder.typicode.com/users');

