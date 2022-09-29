import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/64392125-fd90-49c3-a533-88fa7f7cd991.jpg",
  },
  {
    url: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/09742591-7440-4ffd-bf20-26c82c2221a7.jpg",
  },
  {
    url: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/0cc1fe40-c218-4047-93df-4b646a502436.jpg",
  },
  {
    url: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/c0d1ae46-fbbe-417d-aa88-c15123a4e883.jpg",
  },
];

function ImageSlider() {
  return (
    <div style={{ marginBottom: "80px" }}>
      <SimpleImageSlider
        width="100%"
        height="320px"
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
}

export { ImageSlider };
