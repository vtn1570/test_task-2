export default function swiper() {
    console.log(document)
    document.onselectstart = () => { // cancel selecting of images
        return false; 
      };
}
