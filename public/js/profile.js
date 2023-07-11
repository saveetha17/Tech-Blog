const newFormHandler = async (event) => {
  event.preventDefault();
  console.log('test');
  const name = document.querySelector('#blog_name').value.trim();
  const description = document.querySelector('#description').value.trim();
  console.log('POST', name, description);
  if (name && description) {
    console.log(name, description);
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ blog_name: name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create blog');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete blog');
    }
  }
};

document
  .querySelector('#create-post')
  .addEventListener('click', newFormHandler);

// document
//   .querySelector('.blog-list')
//   .addEventListener('click', delButtonHandler);
console.log('JS');
