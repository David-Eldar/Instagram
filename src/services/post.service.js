import { storageService } from './async-storage.service.js';
import { utilService } from './util.service.js';

const KEY = 'postDB';


const story = {
  "_id": "s101",
  "txt": "Best trip ever",
  "imgUrl": "http://some-img", //Can be an array if decide to support multiple imgs
  "createdAt": 123543452,
  "by": {
    "_id": "u101",
    "fullname": "moyshale_ufnik",
    // "imgUrl": "http://some-img"
    "imgUrl": "http://some-img"
  },
  "loc": {
    "lat": 11.11,
    "lng": 22.22,
    "name": "Tel Aviv"
  },
  "comments": [
    {
      "id": "c1001",
      "by": {
        "_id": "u105",
        "fullname": "Bob",
        "imgUrl": "http://some-img"
      },

      "txt": "good one!",
      "likedBy": [ // Optional
        {
          "_id": "u105",
          "fullname": "Bob",
          "imgUrl": "http://some-img"
        }
      ]
    }
    // {
    //   "id": "c1002",
    //   "by": {
    //     "_id": "u106",
    //     "fullname": "Dob",
    //     "imgUrl": "http://some-img"
    //   },
    //   "txt": "not good!",
    // }
  ],
  "likedBy": [
    {
      "_id": "u105",
      "fullname": "Bob",
      "imgUrl": "http://some-img"
    },
    {
      "_id": "u106",
      "fullname": "Dob",
      "imgUrl": "http://some-img"
    }
  ],

  "tags":["fun", "kids"]
}

const user = {
  "_id": "u101",
  "username": "Muko",
  "password": "mukmuk",
  "fullname": "Muki Muka",
  "imgUrl": "http://some-img",
  "createdAt": 123543452,
  "following": [
    {
      "_id": "u106",
      "fullname": "Dob",
      "imgUrl": "http://some-img"
    }
  ],
  "followers": [
    {
      "_id": "u105",
      "fullname": "Bob",
      "imgUrl": "http://some-img"
    }
  ],
  "savedStoryIds": ["s104", "s111", "s123"]
}

export const postService = {
  query,
  getById,
  remove,
  save,
  getEmptyPost,
  getEmptyComment
};

_createPosts();

async function query() {
  try {
    return await storageService.query(KEY);
  } catch (e) {
    console.error(e)
  }
}

async function getById(id) {
  try {
    return await storageService.get(KEY, id);
  } catch (e) {
    console.error(e)
  }
}

async function remove(id) {
  try {
    return await storageService.remove(KEY, id);
  } catch (e) {
    console.error(e)
  }
}

async function save(post) {
  try {
    const savedpost = post._id
      ? await storageService.put(KEY, post)
      : await storageService.post(KEY, post);
    return savedpost;
  } catch (e) {
    console.error(e)
  }
}

function getEmptyPost() {
  return story
  // return {
  //   _id: '',
  //   name,
  //   price,
  //   createdAt: Date.now(),
  //   reviews: ['good', 'great', 'fine'],
  // };
}

function getEmptyComment(){
  return  {
    "id": "c1001",
    "by": {
      "_id": "u105",
      "fullname": "Bob",
      "imgUrl": "http://some-img"
    },
    "txt": "good one!",
    "likedBy": [ // Optional
      {
        "_id": "u105",
        "fullname": "Bob",
        "imgUrl": "http://some-img"
      }
    ]
  }
}

// Create Test Data:
function _createPosts() {
  let posts = JSON.parse(localStorage.getItem(KEY));
  if (!posts || !posts.length) {
    posts = []
    for (let i = 0; i < 30; i++) {
      posts.push(_createPost())
    }
    localStorage.setItem(KEY, JSON.stringify(posts));
  }
  return posts;
}

function _createPost() {
  const post = getEmptyPost();
  post._id = utilService.makeId();
  return post;
}
