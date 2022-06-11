export const Filter = (videos, { category, all, search }) => {
  let sortedVideos = videos;
  if (all && sortedVideos) {
    return sortedVideos;
  }
  if (category && sortedVideos) {
    sortedVideos = sortedVideos.filter(
      (item) => item.categoryName === category
    );
  }
  if (search && sortedVideos) {
    sortedVideos = sortedVideos.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.categoryName.toLowerCase().includes(search.toLowerCase())
    );
  }
  return sortedVideos;
};
