export default {
  name: "Landing",
  data() {
    return {
      gallery: false,
      al: {
        hasGrayscale: true,
        itemsToShow: 2,
        breakpoints: {
          768: {
            hasGrayscale: false,
            itemsToShow: 4,
          },
          960: {
            hasGrayscale: true,
            itemsToShow: 6,
          },
        },
      },
      items: [
        {
          title: "Slide 1",
          image: "https://picsum.photos/id/0/1230/500",
        },
        {
          title: "Slide 2",
          image: "https://picsum.photos/id/1/1230/500",
        },
        {
          title: "Slide 3",
          image: "https://picsum.photos/id/2/1230/500",
        },
        {
          title: "Slide 4",
          image: "https://picsum.photos/id/3/1230/500",
        },
        {
          title: "Slide 5",
          image: "https://picsum.photos/id/4/1230/500",
        },
        {
          title: "Slide 6",
          image: "https://picsum.photos/id/5/1230/500",
        },
        {
          title: "Slide 7",
          image: "https://picsum.photos/id/6/1230/500",
        },
        {
          title: "Slide 8",
          image: "https://picsum.photos/id/7/1230/500",
        },
      ],
    };
  },
  methods: {
    switchGallery(value) {
      this.gallery = value;
      if (value) {
        document.documentElement.classList.add("is-clipped");
      } else {
        document.documentElement.classList.remove("is-clipped");
      }
    },
  },
};
