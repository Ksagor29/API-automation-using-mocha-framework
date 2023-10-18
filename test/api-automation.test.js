
const axios = require('axios');
const { expect } = require('chai');
const envData = require('../env.json');



describe('API CRUD Operations Automation Test', () => {
  let postId;

  it('get all posts', async () => {
    const response = await axios.get(`${envData.baseUrl}/posts`);
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('array');
    expect(response.data.length).to.equal(100);
  });

  it('get post by postId', async () => {
    const response = await axios.get(`${envData.baseUrl}/posts/1`);
    expect(response.status).to.equal(200);
    expect(response.data.id).to.equal(1);
  });

  it('get comments by postId', async () => {
    const response = await axios.get(`${envData.baseUrl}/posts/1/comments`);
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('array');
    expect(response.data.length).to.equal(5);
  });

  it('create a new post', async () => {
    const newPost = {
      title: 'New Post',
      body: 'This is a new post',
      userId: 1
    };

    const response = await axios.post(`${envData.baseUrl}/posts`, newPost);
    expect(response.status).to.equal(201);
    expect(response.data.title).to.equal(newPost.title);
    expect(response.data.body).to.equal(newPost.body);

  });

  it('update post by postId', async () => {
    const updatedPost = {
      id: 1,
      title: 'Updated Post',
      body: 'This post has been updated',
      userId: 1
    };

    const response = await axios.put(`${envData.baseUrl}/posts/1`, updatedPost);
    expect(response.status).to.equal(200);
    expect(response.data.title).to.equal(updatedPost.title);
    expect(response.data.body).to.equal(updatedPost.body);
  });

  it('delete post by postId', async () => {
    const response = await axios.delete(`${envData.baseUrl}/posts/1`);
    expect(response.status).to.equal(200);
  });
});

