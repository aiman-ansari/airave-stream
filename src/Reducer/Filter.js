export const Filter = (videos, {category,all}) =>{
    let sortedVideos = videos;
    if(all && sortedVideos) {
         return  sortedVideos
    }
    if(category && sortedVideos){
        sortedVideos = sortedVideos.filter((item) => item.categoryName === category)
    }
   return sortedVideos
}