<template></template>

<script setup>
import axios from 'axios';

const runTests = async () => {
  try{
    // 기본 get 테스트
    const getResponse = await axios.get('/api/books');
    console.log('도서 목록: ', getResponse.data);
  
    //1권 가져오기
    const getById = await axios.get('/api/books/1');
    console.log('1권 도서 내용 : ',getById.data);
  
    //가격으로 정렬해서 가져오기
    const getSortedByPrice=await axios.get('/api/books?_sort=price');
    console.log('가격으로 정렬된 전체 도서 목록 : ', getSortedByPrice.data );
  
  
    //아이디 역정렬 가져오기
    const getSortedById=await axios.get('/api/books?_sort=-id');
    console.log('아이디로 역정렬된 전체 도서 목록 : ', getSortedById.data );
  
    //페이지네이션(id로 역정렬, 페이지=2, 목록개수=3)
    const getPageNation=await axios.get('/api/books?_sort=-id&_page=2&_per_page=3');
    console.log('페이지 네이션된 도서 목록 : ', getPageNation.data );
  
    const newBook={
      title:'새로운 도서',
      author:'새 작가',
      price:30000,
    };
  
    //post(추가) 테스트
    const post=await axios.post('/api/books',newBook);
    // console.log('postResponse : ', post.data );
  
    //put(수정) 테스트
    const updateBook={
      title:'수정된 책이름',
      author:'수정된 작가',
      price:3,
    };
  
    const put=await axios.put('/api/books/1',updateBook);
    // console.log('putResponse : ',put.data);
  
    //deldte(삭제) 테스트
    const d=await axios.delete('api/books/1');
  }catch(error){
    console.error('에러 발생 : ',error.message);
  }
};
runTests();
</script>

<style scoped></style>