var gallery = new Vue({

    el: '#gallery',

    data: {
        photoAuthor: "",
        photoWidth: "",
        photoHeight: "",
        photoFeed: null
    },

    mounted() {
        axios
            .get('https://picsum.photos/v2/list')
            .then(response => {
                this.photoFeed = response.data;
            })
            .catch(error => console.log(error))
    },

    computed: {

        photoInfo: function () {

            var photos = this.photoFeed;
            var photoAuthor = this.photoAuthor;
            var photoWidth = this.photoWidth;
            var photoHeight = this.photoHeight;
            return photos;
        }
    }

});


function clickOnImage(imgs) {

    var expandImg = document.getElementById("expand");
    expandImg.src = imgs.src;

}