

// const API_URL = "http://localhost:3000/api/posts";
// const API_BASE_URL = "http://localhost:3000/";

//Above url is for local API  and below for Heroku where api is hosted.

const API_URL = "https://prafulblogapi.herokuapp.com/api/posts";
const API_BASE_URL = "https://prafulblogapi.herokuapp.com/";

window.onload = () => {
    getPosts();
}

const getPosts = () => {
    fetch(API_URL,{
        method : 'GET'
    }).then((response) => {
        return response.json()
    }).then((data) =>{
        buildPosts(data);
    })
}

const buildPosts = (blogPosts) => {
    let  blogPostContent = "";
    for(blogPost of blogPosts){
        var img_link = blogPost.post_image;
       // console.log(img_link)
        var imgg = img_link.replace("\\", "/");
        //console.log(imgg);
        //console.log(blogPost.post_image);
        const PostDate = new Date(parseInt(blogPost.added_date)).toDateString();
        const postImage = `${API_BASE_URL}${imgg}`;
        const postLink = `/post.html?id=${blogPost.id}`
        blogPostContent +=  `
        <a  class="post-link" href = "${postLink}" >
            <div class ="post" >
                <div class="post-image" style="background-image:url(${postImage})"></div>
                <div class="post-content">
                    <div class="post-date">${PostDate}</div>
                    <div class="post-title"><h4>${blogPost.title}</h4></div>
                    <div class="post-text">${blogPost.content}</div>
                </div>
            </div>
        </a>
        `
    }
    document.querySelector('.blog-posts').innerHTML = blogPostContent;

}