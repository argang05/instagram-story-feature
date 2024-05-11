var storyArray = [
    {
        dp: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        storyPost: "https://images.pexels.com/photos/1959036/pexels-photo-1959036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        dp: "https://images.pexels.com/photos/1193942/pexels-photo-1193942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        storyPost: "https://images.pexels.com/photos/2884189/pexels-photo-2884189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        dp: "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        storyPost: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        dp: "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        storyPost: "https://images.pexels.com/photos/1599900/pexels-photo-1599900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        dp: "https://images.pexels.com/photos/5581730/pexels-photo-5581730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        storyPost: "https://images.pexels.com/photos/5581638/pexels-photo-5581638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
];

var clutter = "";
var stories = document.querySelector("#stories");

storyArray.forEach(function (story, indx) {
    //indx will help us to target specific story elements:

    //Assigning all dp images to img elements using clutter variable:
    clutter += `<div class="story">
                     <img id="${indx}" src="${story.dp}" alt="">
                </div>`;
})

//Assigning clutter variable to stories div
stories.innerHTML = clutter;

//Adding click event listener to open and see the story:
stories.addEventListener("click", function (dets) {
    //Extracting the story post image of specific id:
    var storyArrayRef = dets.target;
    var storyArrayElementObject = storyArray[storyArrayRef.id];
    var storyPostImage = storyArrayElementObject.storyPost;

    //Displaying the story on clicking the dp:

    var fullScreen = document.querySelector("#full-screen");

    fullScreen.style.display = "block";
    fullScreen.style.backgroundImage = `url(${storyPostImage})`;

    setTimeout(() => {
        fullScreen.style.display = "none";
    }, 3000);
})