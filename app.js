
Vue.component('book', {
  template: '#book-template',
  props: {
    titleprop:String,
    authorprop: String,
    themeprop: String,
    numberprop: Number,
    femaleprop: Boolean,
    url: String,
    type: String
  },
  data() {
    return{
      female: false
    }
  },
  methods: {
    hover(){

    }
  }
  })


Vue.component('sticker-cwnum', {
    template: '#sticker-cwnum-template',
    props: ['numberprop']
    })


  new Vue({
    el: '#app',
    data: {
      books: [
        {
         title: 'Emma',
         author: 'Jane Austen',
         themes: 'Fiction, Romance, British Literature, Female-Lead',
         number: 2,
         female: true,
         url: "https://m.media-amazon.com/images/M/MV5BMTYzMzQ5OTc0MF5BMl5BanBnXkFtZTcwNjkwMDExNA@@._V1_SY1000_CR0,0,1501,1000_AL_.jpg"
       },

        {title: 'Moby Dick', author: 'Herman Miller', themes: 'Fiction, Adventure, Nautical', number: 12},
        {title: 'Twelve Years a Slave', author: 'Solomon Northup', themes: 'Non-Fiction, Autobiography, American History, Slavery', number: 5},
        {title: 'The Home and the World', author: 'Rabindranath Tagore', themes: 'Non-Fiction, Autobiography, American History, Slavery', number: 3},
        {title: 'Grimms Fairytales ', author: 'Jacob Grimm and Wilhelm Grimm', themes: 'Non-Fiction, Autobiography, American History, Slavery', number: 13},
        {title: 'Hearts of Darkness', author: 'Joseph Conrad', themes: 'Non-Fiction, Autobiography, American History, Slavery', number: 2},
        {title: 'Evelina', author: 'Fanny Burley', themes: 'Non-Fiction, Autobiography, American History, Slavery', number: 0},
        {title: 'Herland', author: 'Charlotte Perkins Gillman'},
        {title: 'Behind a Mask', author: 'Louisa A. Alcott'},
        {title: 'Grimms Fairytales ', author: 'Jacob Grimm and Wilhelm Grimm', themes: 'Non-Fiction, Autobiography, American History, Slavery', number: 13},
        {title: 'Hearts of Darkness', author: 'Joseph Conrad', themes: 'Non-Fiction, Autobiography, American History, Slavery', number: 2},
        {title: 'Evelina', author: 'Fanny Burley', themes: 'Non-Fiction, Autobiography, American History, Slavery', number: 0},
        {title: 'Herland', author: 'Charlotte Perkins Gillman'},
        {title: 'Behind a Mask', author: 'Louisa A. Alcott'},
      ]
    }
  })

function(){
$(".book")


}
