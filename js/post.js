/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

// const API_URL = "https://blogg-api.herokuapp.com/api/posts/";
// const API_BASE_URL = "https://blogg-api.herokuapp.com/";

window.onload = () => {
    getPost();
}

const getPostIdParam = () => {
    const queryString  = window.location.search;
    const urlParams = new  URLSearchParams(queryString);
    return urlParams.get("id");
}

const getPost = () => {
    // CODE GOES HERE
    const postId = getPostIdParam();
    const url = `${API_URL}${postId}`
    fetch(url, {
        method :'GET'
    }).then((response) => {
        return response.json()
    }).then((post) => {
        buildPost(post)
    })
}

const buildPost = (post) => {
    //  Convert the date number to a Date string
    var img_link = post.post_image;
    var imgg = img_link.replace("\\", "/");
    const PostDate = new Date(parseInt(post.added_date)).toDateString();
    const postImage = `${API_BASE_URL}${imgg}`;
    console.log(postImage);
    document.querySelector("header").style.backgroundImage =   `url(${postImage})`
    document.getElementById("individual-post-date").innerText = `Published on ${PostDate} `;
    document.getElementById("individual-post-title").innerText = post.title;
    document.getElementById("individual-post-content").innerText = post.content;
}

