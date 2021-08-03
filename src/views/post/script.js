import Axios from "axios";

export default {
  name: "Post",
  data() {
    return {
      table: [],
      isShowSkeleton: false,
      coments: [],
      isLoading: false,
      isShowComment: false,
      columns: [
        {
          field: "userId",
          label: "USER ID",
        },
        {
          field: "title",
          label: "TITLE",
        },
        {
          field: "body",
          label: "BODY",
        },
      ],
      dataForm: {
        userId: 0,
        title: "",
        body: "",
      },
      statusModal: false,
    };
  },
  methods: {
    async handelegetData() {
      try {
        this.isShowSkeleton = true;
        var getData = await Axios({
          url: "https://jsonplaceholder.typicode.com/posts",
          method: "GET",
        });
        this.table = getData.data;
      } catch (error) {
        console.log(error.response);
      } finally {
        setTimeout(() => {
          this.isShowSkeleton = false;
        }, 2000);
      }
    },
    handleClearDataComment() {
      this.coments = [];
    },

    async handlePost() {
      this.isLoading = true;
      var request = {
        userId: this.dataForm.userId,
        title: this.dataForm.title,
        body: this.dataForm.body,
      };
      var postData = await Axios({
        method: "POST",
        data: request,
        url: "https://jsonplaceholder.typicode.com/posts",
      });
      this.isLoading = false;
      this.$buefy.toast.open({
        duration: 1000,
        message: `Sukses !`,
        position: "is-top",
        type: "is-success",
      });
      setTimeout(() => {
        this.statusModal = false;
        this.handelegetData();
      }, 1500);
      // alert(
      //   `User Id : ${this.dataForm.userId} , Title : ${this.dataForm.title} , Body : ${this.dataForm.body}`
      // );

      //async berfungsi untuk menandai di dalam function tersebut ada yg perlu di tunggu
      // await adalah posisi tunggu
    },
    async handleShowComment(postId) {
      this.isLoading = true;
      var getComment = await Axios({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
      });
      this.coments = getComment.data;
      this.isShowComment = true;
      this.isLoading = false;
    },
  },

  mounted() {
    this.handelegetData();
  },
};
