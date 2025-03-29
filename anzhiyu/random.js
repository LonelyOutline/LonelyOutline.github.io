var posts=["2025/03/27/htlm基础内容-基础结构、知识）/","2025/03/27/关于博客/","2025/03/27/前端JS：关于DOM元素/","2025/03/25/发布的第一篇文章/","2025/03/28/碎碎念/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };