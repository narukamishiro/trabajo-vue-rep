Vue.component('aboutTab', {
  
  template: '<h1>isidro lucena santiago</h1><h3>calle emilia pardo bazan,ed europan esc d 2,2 . granada . spain . 634-816-686 .<a>darksirius91@gmail.com</a></h3><p></p><div><img></img><img></img><img></img><img></img><img></img></div>'
})
Vue.component('expTab', {
  template: '<h1>experience</h1><listExp></listExp>'
})
Vue.component('eduTab', {
 
  template: '<h1>education</h1><listEdu></listEdu>'
})
Vue.component('skillTab', {

  template: '<h1>skill</h1><h3></h3><div><img></img><img></div><h3></h3><ul><li></li></ul>'
})
Vue.component('interTab', {
  template: '<h1>interests</h1><p></p>'
})
Vue.component('awardTab', {
  template: '<h1>awards</h1><ul><li></li></ul>'
})
Vue.component('proyectTab', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<h3></h3><img></img>'
})
Vue.component('listTab', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<img></img><a>about</a><a>experience</a><a>education</a><a>skill</a><a>interests</a><a>awards</a><a>proyect</a>'
})
Vue.component('listExp', {
  template: '<h2></h2><h4></h4><h3></h3><p></p>'
})
Vue.component('listEdu', {
  template: '<h2></h2><h4></h4><h3></h3><p></p>'
})