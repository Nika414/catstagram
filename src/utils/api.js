/* eslint-disable no-return-assign */
export default class Api {
  constructor(options, jwt) {
    this._baseUrl = options.baseUrl;
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
    throw new Error('Произошла ошибка!');
  }

  getCards(query) {
    return fetch(`${this._baseUrl}search/photos?${new URLSearchParams(this._urlParams)}&query=${query || 'cats'}&page=${this._page += 1}`, {
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }
}
