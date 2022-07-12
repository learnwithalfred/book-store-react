import http from '../../api/http-common';

function getAll() {
  return http.get('/books');
}

function addNewBook(data) {
  return http.post('/books', data);
}

const BookService = {
  getAll,
  addNewBook,
};

export default BookService;
