
const app = new Vue(
    {
        el: '#app',
        data: {
            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ],
            // inizializzo la variabile che mi salva l'elemento dell'array
            slideScrolled: 0,
        },

        // creo una funzione per capire se gli elementi degli array sono selezionati e inserire le immagini dinamicamente le immagini nel dom con VUE attraverso un method

        methods: {

            setIndex: function (value) {
                this.slideScrolled = value;
            },
            setClass: function (value) {
                if (this.slideScrolled == value) {
                    return "active";
                }
            },
            nextImage: function () {

                if (this.slideScrolled == this.slides.length - 1) {
                    this.slideScrolled = 0;
                } else {
                    this.slideScrolled++;
                }
            },
            prevImage: function () {

                if (this.slideScrolled == 0) {
                    this.slideScrolled = this.slides.length - 1
                } else {
                    this.slideScrolled--;
                }
            },
        },
    },
);
