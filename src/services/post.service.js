import { storageService } from './async-storage.service.js';
import { utilService } from './util.service.js';
import { httpService } from './http-service'

const KEY = 'postDB';
const ENDPOINT = 'post'



export const postService = {
  query,
  getById,
  remove,
  save,
  getEmptyPost,
  getEmptyComment,
  
};

_createPosts();

async function query() {
  return await httpService.get(ENDPOINT, filterBy)

  // try {
  //   return await storageService.query(KEY);
  // } catch (e) {
  //   console.error(e)
  // }
}

async function getById(id) {
  return await httpService.get(`${ENDPOINT}/${id}`)

  // try {
  //   return await storageService.get(KEY, id);
  // } catch (e) {
  //   console.error(e)
  // }
}

async function remove(id) {
  
  return await httpService.delete(`${ENDPOINT}/${id}`)

  // try {
  //   return await storageService.remove(KEY, id);
  // } catch (e) {
  //   console.error(e)
  // }
}

async function save(post) {
   
  return toy._id
  ? await httpService.put(`${ENDPOINT}/${post._id}`, post)
  : await httpService.post(ENDPOINT, post)

  // try {
  //   const savedpost = post._id
  //     ? await storageService.put(KEY, post)
  //     : await storageService.post(KEY, post);
  //   return savedpost;
  // } catch (e) {
  //   console.error(e)
  // }
}

function getEmptyPost() {

  return Promise.resolve({
    by:{
      userName: '',
      userImg:'',
    },
    content:{
      img:'',
      video:'',
      txt:'',
    },
    createdAt: new Date(),
    likes: 0,
    viewedBy:0
  })

  // return story
}

function getEmptyComment(){

  return Promise.resolve({
    userName:'',
    txt:'',
    createdAt: new Date(),
    likes:0
  })
}



function _createPosts() {
  let posts = utilService.loadFromStorage(KEY)
  if (!posts || !posts.length) {
    posts = [
      _createPost('moyshe_ufnik', '"http://some-img"', ['"http://some-img"','Best trip ever']),
      _createPost('david_eldar', '"http://some-img"', ['"http://some-img"','Grate Show Last Night']),
      _createPost('shani_aharon', '"http://some-img"', ['"http://some-img"','Anothr day in paradise']),
      
    ]
    utilService.saveToStorage(KEY, posts)
    
  }
  return posts
}

function _createPost(userName, userImg, content) {
  return {
    _id: utilService.makeId(),
    userName,
    userImg,
    content,
    inStock: true,
    createdAt: new Date(),
    likes: 0,
    viewedBy:0,
    comments: [
      { _id: utilService.makeId(), txt: utilService.getLoremIpsum(5), createdAt: new Date() },
      { _id: utilService.makeId(), txt: utilService.getLoremIpsum(5), createdAt: new Date() },
      { _id: utilService.makeId(), txt: utilService.getLoremIpsum(5), createdAt: new Date() },
    ],
  }
}














