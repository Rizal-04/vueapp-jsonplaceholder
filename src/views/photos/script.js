import Axios from "axios";

export default {
  name: "Photos",
  data() {
    return {
      photos: [],
      isShowSkeleton: false,
      columns: [
        {
          field: "albumId",
          label: "ALBUM ID",
        },
        {
          field: "title",
          label: "TITLE",
        },
        {
          field: "url",
          label: "URL",
        },
        {
          field: "thumbnailUrl",
          label: "THUMBNAIL URL",
        },
      ],
    };
  },
  methods: {
    async handleGetDataPhotos() {
      try {
        var getPhotos = await Axios({
          url: "https://jsonplaceholder.typicode.com/photos",
          method: "GET",
        });
        // console.log(getPhotos);
        this.photos = getPhotos.data;
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  mounted() {
    this.handleGetDataPhotos();
  },
};
