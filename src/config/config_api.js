// const SEARCH_API = "https://lawtechaddin.simidoc.vn";
// const SPELL_API = "https://lawtechaddin.simidoc.vn/api/spell/spellcheck";

const SEARCH_API = "http://112.137.142.8:5000";
const SPELL_API = "http://112.137.142.8:5005/api/spell/spellcheck";

const SEARCH_DOCUMENTS = {
  detail: SEARCH_API + '/api/lawtech/document/',
  searchByCode: SEARCH_API + '/api/lawtech/document/searchByCode',
  searchByContent: SEARCH_API + '/api/lawtech/document/searchByContent',
  searchByTitle: SEARCH_API + '/api/lawtech/document/searchByTitle',
};


export {
  SEARCH_DOCUMENTS,
  SEARCH_API,
  SPELL_API
}