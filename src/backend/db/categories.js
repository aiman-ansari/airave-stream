import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Beaches",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWnktG3KElSUb4lzxr1DlD6IWSOowp_hEIPFmUKdlIYWQ6bIrYNfGL_FqEhLAq1DloXY4&usqp=CAU'
    
  },
  {
    _id: uuid(),
    categoryName: "Mountains",
    image: 'https://wallpaperaccess.com/full/48753.jpg'
    
  },
  {
    _id: uuid(),
    categoryName: "Winter",
    image: 'https://w0.peakpx.com/wallpaper/46/898/HD-wallpaper-japan-kinkaku-ji-kyoto-temple-in-lake-with-snow-during-winter-travel.jpg'
    
  },
  {
    _id: uuid(),
    categoryName: "Nature",
    image: 'https://img2.goodfon.com/wallpaper/nbig/b/6e/autumn-park-sun-rays-sunbeams-4281.jpg'
    
  },
  {
    _id: uuid(),
    categoryName: "Town",
    image: 'https://image.winudf.com/v2/image/Y29tLndhbGxwYXBlcjRrLndhbGxwYXBlcmhkLmVpZmZlbHRvd2VyX3NjcmVlbl8wXzE1MTAxNjE2MjBfMDc3/screen-0.jpg?fakeurl=1&type=.jpg'
    
  },
  {
    _id: uuid(),
    categoryName: "Cultural",
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/10/03/17/tajmahal.jpg?width=1200'
    
  },
];
