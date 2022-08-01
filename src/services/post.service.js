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
  getNewEmptyPost
  
};



async function query(filterBy={}) {
  return await httpService.get(ENDPOINT, filterBy)

}

async function getById(id) {
  return await httpService.get(`${ENDPOINT}/${id}`)

}

async function remove(id) {
  
  return await httpService.delete(`${ENDPOINT}/${id}`)


}

async function save(post) {
   
  return post._id
  ? await httpService.put(`${ENDPOINT}/${post._id}`, post)
  : await httpService.post(ENDPOINT, post)


}




const story = {
  
  "txt": "Best trip ever",
  "imgUrl": "http://some-img", 
  "createdAt": 123543452,
  "by": {
    "_id": "u101",
    "fullname": "moyshale_ufnik",
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
      "likedBy": [ 
        {
          "_id": "u105",
          "fullname": "Bob",
          "imgUrl": "http://some-img"
        }
      ]
    }

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


const storyww = {
  "txt": "Best trip ever",
}


function getEmptyPost() {
  return story
}

function getEmptyComment(){
  return  {
    "id": "1023",
    "by": {
      "_id": "u105",
      "fullname": "his wife",
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

function getNewEmptyPost() {
  const copy = JSON.parse(JSON.stringify(story))
  copy.txt = "newwwwwwwwwwwww asfasdfasd"
  delete copy._id
  console.log('copy:',copy?._id)
  return copy

}










