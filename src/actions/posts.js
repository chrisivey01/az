import { FETCH_DATA} from './types';
import axios from 'axios'

export const fetchData = () => dispatch =>{
    axios('https://api.jsonbin.io/b/5ce80d1fb4565f1948041970')
    .then(res => dispatch({
        type:FETCH_DATA,
        data: res
    }))
}