const newFormHandler = async (event) => {
  event.preventDefault();
  console.log('test');

  const comment_name = document.getElementById('comment-name').value.trim();
  const blog_id = document.querySelector('input').value;

  // const post_id = event.target.getAttribute('data-post-id');
  // const comment_name = document.querySelector('#comment-name').value.trim();
  console.log('POST', comment_name, blog_id);

  if (comment_name) {
    console.log(comment_name);
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment_name: comment_name, blog_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);
