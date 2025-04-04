import {defineStore} from "pinia";

export const useBookStore=defineStore('book',()=>{
    //state
    const books=ref([]);
    const isLoading=ref(flase);
    const error=ref(null);

    const fetchBooks = async () => {

        isLoading.value=true;
        try {
            const params={
                _sort:sortBy,
                _page:1,
                _per_page:3,
            };
          const response = await axios.get('/api/books');
          books.value = response.data.data;
        } catch (e) {
            error.value='도서 목록 가져오기 실패';
        //   console.error('도서 목록 가져오기 실패:', error);
        }
        finally{
            isLoading.value=false;
        }
    };
    return{
        books,
        isLoading,
        error,
        fetchBooks,
    };
});