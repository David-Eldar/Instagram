import { httpService } from './http-service'

const ENDPOINT = 'comment'

export const commentService = {
  query,
  addComment,
  removeComment,
  getEmptyComment,
}

async function query(filterBy) {
  return await httpService.get(ENDPOINT, filterBy)
}

async function addComment(comment) {
  return await httpService.post(ENDPOINT, comment)
}

async function removeComment(commentId) {
  return await httpService.delete(`${ENDPOINT}/${commentId}`, commentId)
}

function getEmptyComment() {
  return Promise.resolve({
    userName:'',
    userImgUrl:'',
    txt:'',
    createdAt: new Date(),
    likes:0
  })
}
