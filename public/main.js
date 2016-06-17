'use strict';

$(() => {
      $.get('/posts')
      .done((data)=> {
        let dbPosts = data;
        console.log('dbData: ', dbPosts);
        renderPosts(dbPosts);
      });
});

let renderPosts = dbPosts => {
  dbPosts.forEach(dbPost => {
    let $newPost = $('div.template').clone();
    $newPost.removeClass('template').addClass('new-post').attr('id', dbPost.id);
    $newPost.find('.template-author-name').removeClass('template-author-name').addClass('author-Name').text(dbPost.author);
    let date = dbPost.date.slice(0, 24);
    $newPost.find('.template-time-stamp').removeClass('template-time-stamp').addClass('time-stamp').text(date);
    $newPost.find('.template-post-message').removeClass('template-time-stamp').addClass('post-message').text(dbPost.post);
    $('div.append-here').append($newPost);
  });
};

// let createPost = () => {
//   let newAuthor = $('')
// }
