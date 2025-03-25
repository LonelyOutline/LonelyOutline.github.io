var posts=["2025/03/24/hello-world/","2025/03/25/发布的第一篇文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };