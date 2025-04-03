<template>
    <div class="book-list">
        <h1>도서 목록</h1>
        <div v-if="books.length===0" class="no-books">
            등록된 도서가 없습니다.
        </div>
        <div v-else v-for="book in books" :key="book.id">
            <h3>{{ book.title }}</h3>
            <p>저자 : {{ book.author }}</p>
            <p>가격 : {{ book.price }}원</p>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const books=ref([]);

const fetchBooks= async()=>{
    try{
        const response = await axios.get('/api/books?_sort=title&_page=1&_limit=2');
        console.log(response.data);
        books.value=response.data;
    }catch(error){
        console.error('도서 목록 가져오기 실패 : ',error);
    }
}

fetchBooks();
</script>