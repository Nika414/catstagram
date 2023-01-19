export default class Api {
  constructor(options, jwt) {
    this._baseUrl = options.baseUrl;
    // Обычно лайки добавляют авторизированные пользователи, поэтому добавлен заголовок authorization
    this._headers = {
      authorization: `Bearer ${jwt}`,
    };
    this._page = 0;
    this._urlParams = {
      per_page: 21,
      orientation: 'landscape',
    };
  }

  _handleResponse(res) {
    if (res.ok) { return res.json(); }
    throw new Error('Error occurred');
  }

  getCards(query, loadNextPage) {
    const baseUrlParamets = new URLSearchParams(this._urlParams);
    const newPageNum = loadNextPage ? this._page + 1 : 1;
    this._page = loadNextPage ? this._page + 1 : 1;
    // Так как сервис по поиску котов, по дефолту ищем котов
    const searchQuery = query || 'cats';
    return fetch(`${this._baseUrl}search/photos?${baseUrlParamets}&query=${searchQuery}&page=${newPageNum}`, {
      headers: this._headers,
    }).then((res) => this._handleResponse(res))
      .catch(() => { this._page = loadNextPage ? this._page - 1 : 1; });
  }

  setLike(id) {
    return fetch(`${this._baseUrl}photos/${id}/like`, {
      method: 'POST',
      headers: this._headers,
    })
      .then((res) => this._handleResponse(res));
  }

  deleteLike(id) {
    fetch(`${this._baseUrl}photos/${id}/like`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }
}
