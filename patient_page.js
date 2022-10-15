fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=Parkinson's%20disease%20excercises&key=AIzaSyAsMmr44NhRLZxAa2mH4SMM6A62odMJIvM")
.then((result)=>{
    return result.json()
}).then((data)=>{
    console.log(data)
    let videos= data.items
    let videoContainer= document.querySelector(".yTC")
    for(video of videos)
        
        videoContainer.innerHTML += `
            
            <b type="button" onclick="location.href='https://www.youtube.com/watch?v=${video.id.videoId}';"><p>${video.snippet.title}</p><img src="${video.snippet.thumbnails.high.url}"> </button>
            
            

        `
})