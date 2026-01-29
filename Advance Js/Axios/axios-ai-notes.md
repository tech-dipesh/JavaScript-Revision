# Axios Deep Dive - Vanilla JS Fundamentals

## What is Axios?

Axios is a promise-based HTTP client for the browser that makes it easier to send HTTP requests and handle responses. It's basically a cleaner, more powerful alternative to the native `fetch()` API.

## Setup (Browser)

Include Axios via CDN in your HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

## Core Concept: HTTP Requests

Axios revolves around making HTTP requests. The basic syntax:

```javascript
axios.method(url, config)
```

## 1. GET Requests (Fetching Data)

**Basic GET:**
```javascript
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log(response.data); // The actual data
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

**GET with Query Parameters:**
```javascript
axios.get('https://api.example.com/users', {
  params: {
    page: 2,
    limit: 10
  }
})
.then(response => console.log(response.data));
```

This automatically converts to: `https://api.example.com/users?page=2&limit=10`

## 2. POST Requests (Sending Data)

```javascript
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'My Post',
  body: 'Post content here',
  userId: 1
})
.then(response => {
  console.log('Created:', response.data);
})
.catch(error => {
  console.error('Error:', error);
});
```

## 3. PUT & PATCH (Updating Data)

**PUT (Complete replacement):**
```javascript
axios.put('https://jsonplaceholder.typicode.com/posts/1', {
  id: 1,
  title: 'Updated Title',
  body: 'Updated body',
  userId: 1
})
.then(response => console.log(response.data));
```

**PATCH (Partial update):**
```javascript
axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
  title: 'Only updating title'
})
.then(response => console.log(response.data));
```

## 4. DELETE Requests

```javascript
axios.delete('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Deleted successfully');
  });
```

## Understanding the Response Object

When Axios receives a response, it gives you an object with:

```javascript
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);      // The actual response data
    console.log(response.status);    // HTTP status code (200, 404, etc.)
    console.log(response.statusText); // Status message ("OK", "Not Found")
    console.log(response.headers);   // Response headers
    console.log(response.config);    // Original request configuration
  });
```

## Error Handling (IMPORTANT!)

```javascript
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (error.response) {
      // Server responded with error status (4xx, 5xx)
      console.log('Error Data:', error.response.data);
      console.log('Status:', error.response.status);
    } else if (error.request) {
      // Request was made but no response received
      console.log('No response received:', error.request);
    } else {
      // Something else happened
      console.log('Error:', error.message);
    }
  });
```

## Using Async/Await (Modern Approach)

Much cleaner than `.then()` chains:

```javascript
async function fetchUsers() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchUsers();
```

## Setting Headers

**For single request:**
```javascript
axios.get('https://api.example.com/data', {
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN',
    'Content-Type': 'application/json'
  }
});
```

**Setting default headers:**
```javascript
axios.defaults.headers.common['Authorization'] = 'Bearer YOUR_TOKEN';
```

## Base URL (For Multiple Requests to Same API)

```javascript
// Set a base URL
axios.defaults.baseURL = 'https://api.example.com';

// Now you can use relative paths
axios.get('/users');        // https://api.example.com/users
axios.get('/posts');        // https://api.example.com/posts
axios.post('/users', data); // https://api.example.com/users
```

## Timeout

Automatically cancel requests that take too long:

```javascript
axios.get('https://api.example.com/data', {
  timeout: 5000 // 5 seconds
})
.catch(error => {
  if (error.code === 'ECONNABORTED') {
    console.log('Request timeout');
  }
});
```

## Interceptors (Advanced but Useful)

Interceptors let you run code before requests or after responses:

**Request Interceptor:**
```javascript
axios.interceptors.request.use(
  config => {
    console.log('Request sent:', config.url);
    // Add loading spinner here
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
```

**Response Interceptor:**
```javascript
axios.interceptors.response.use(
  response => {
    console.log('Response received');
    // Remove loading spinner here
    return response;
  },
  error => {
    // Handle all errors in one place
    if (error.response.status === 401) {
      console.log('Unauthorized - redirect to login');
    }
    return Promise.reject(error);
  }
);
```

## Practical Mini-Project Example

```javascript
// API Base Setup
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// Fetch and display posts
async function loadPosts() {
  try {
    const response = await axios.get('/posts', {
      params: { _limit: 5 }
    });
    
    const posts = response.data;
    const container = document.getElementById('posts');
    
    posts.forEach(post => {
      container.innerHTML += `
        <div class="post">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `;
    });
  } catch (error) {
    console.error('Failed to load posts:', error);
  }
}

// Create new post
async function createPost(title, body) {
  try {
    const response = await axios.post('/posts', {
      title: title,
      body: body,
      userId: 1
    });
    
    console.log('Post created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to create post:', error);
  }
}

// Delete post
async function deletePost(id) {
  try {
    await axios.delete(`/posts/${id}`);
    console.log('Post deleted');
  } catch (error) {
    console.error('Failed to delete:', error);
  }
}
```

## Key Takeaways for Minor Projects

1. **Use async/await** - It's cleaner and easier to read
2. **Always handle errors** - Use try/catch blocks
3. **Set baseURL** if you're hitting the same API multiple times
4. **Use params object** for query parameters instead of building URLs manually
5. **Remember response.data** - That's where your actual data lives
6. **Set timeouts** to prevent hanging requests

## Common Gotchas

- ❌ `response` → Use `response.data` instead
- ❌ Forgetting `await` with async functions
- ❌ Not handling errors (always use try/catch or .catch())
- ❌ Hardcoding URLs everywhere → Use baseURL instead