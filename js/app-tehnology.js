$(function() {

    window.app = {};

    app.posts = [
        { tag: '<i class="fa fa-html5 fa-stack-1x fa-inverse"></i>', tehnology: 'HTML 5', pre: "Використання нових елементів, анімація та графіка, мультимедіа. Техноголія дозволяє створювати досить вражаючі, веб-сайти без JS.", exp: 'Досвід розробки більше 3х років' },
        { tag: '<i class="fa fa-css3 fa-stack-1x fa-inverse"></i>', tehnology: 'CSS 3', pre: "Розробка каскадних таблиць стилів третього покоління: від закругленних кутів до трансформації. Створення анімованих елементів без використання JS.", exp: 'Досвід розробки більше 3х років' },
        { tag: '<i class="fa fa-arrows-alt fa-stack-1x fa-inverse"></i>', tehnology: 'Адаптивный дизайн', pre: "Досвід застосування гнучкого макета на основі grid-сітки, використання гнучких зображень, робота з медіа - запитами, проектування для мобільних пристроїв.", exp: 'Досвід розробки біля 2х років' },
        { tag: '<i class="fa fa-th fa-stack-1x fa-inverse"></i>', tehnology: 'Bootstrap 3', pre: "Досвід розробки сайтів на основі фреймворка Bootstrap: grid-сітка, шаблони, типографіка, медіа, таблиці, форми, модальні вікна, навігація та алерти.", exp: 'Досвід розробки біля 2х років' },
        { tag: '<i class="fa fa-code fa-stack-1x fa-inverse"></i>', tehnology: 'PHP 5.4', pre: "Досвід розробки серверної частини сайтів: HTTP-авторизація, cookies та сессії, работа з локальними та віддаленими файлами, сокети.", exp: 'Досвід розробки біля 1го року' },
        { tag: '<i class="fa fa-database fa-stack-1x fa-inverse"></i>', tehnology: 'MySQL 5.7', pre: "Створення бази данних, конфігурування, структура та типи данних, нормалізація БД. Модифікації, форматування даних та розрахунків, формування обмежень даних.", exp: 'Досвід розробки біля 1го року' },
        { tag: '<i class="fa fa-database fa-stack-1x fa-inverse"></i>', tehnology: 'MongoDB', pre: "Створення бази данних, конфігурування, структура та Shema, Mongoose.", exp: 'Досвід розробки < 1го року' },
        { tag: '<i class="fa fa-code fa-stack-1x fa-inverse"></i>', tehnology: 'Node.js', pre: "Створення RESTful API, npm менеджер, Express фреймворк", exp: 'Досвід розробки < 1го року' },
        { tag: '<i class="fa fa-bar-chart fa-stack-1x fa-inverse"></i>', tehnology: 'Chart.js', pre: "Створення створення графіків будь якої складності, візуальне оформлення, оновлення з БД чи JSON файла", exp: 'Досвід розробки < 1го року' },
        { tag: '<i class="fa fa-map-marker fa-stack-1x fa-inverse"></i>', tehnology: 'GoogleMapApi & Leaflet.js', pre: "Створення карт будь якої складності, візуальне оформлення карт, стилізація контенту маркерів", exp: 'Досвід розробки < 1го року' },
        { tag: '<i class="fa fa-tasks fa-stack-1x fa-inverse"></i>', tehnology: 'Gulp.js', pre: "Створення тасків, міні версії js-css файлів, перевірка на помилки, конвертація less/sass, поєднання однотипних файлів, серіалізація проекту", exp: 'Досвід розробки < 1го року' },
        { tag: '<i class="fa fa-picture-o fa-stack-1x fa-inverse"></i>', tehnology: 'MaterializeCSS', pre: "Розробка сайтів на основі фреймворка Materialize: grid-сітка, шаблони, типографіка, медіа, таблиці, форми, z-depth-X, hoverable, material design, модальні вікна, навігація та алерти.", exp: 'Досвід розробки біля 1го року' },
        { tag: '<i class="fa fa-bold fa-stack-1x fa-inverse"></i>', tehnology: 'Backbone.js', pre: "Розробка сайтів на основі js-фреймворка Backbone: model, collection, view, CRUD.", exp: 'Досвід розробки < 1го року' },
        { tag: '<i class="fa fa-facebook fa-stack-1x fa-inverse"></i>', tehnology: 'React.js', pre: "Розробка сайтів на основі js-фреймворка React: webpack, babel, redux, es6, jsx, axios.", exp: 'Досвід розробки < 1го року' },
        { tag: '<i class="fa fa-google fa-stack-1x fa-inverse"></i>', tehnology: 'AngularJS & 2', pre: "Розробка сайтів на основі js-фреймворка AngularJS & 2: typescript, components, router.", exp: 'Досвід розробки < 1го року' },     
    ];    

    app.Post = Backbone.Model.extend({});

    app.Directory = Backbone.Collection.extend({
        model: app.Post
    });

    app.View = Backbone.View.extend({ 
        className: 'col-md-4 col-lg-4 col-sm-4',       
        template: $("#tmpl-tehnology").html(),
        render: function () {
            var tmpl = _.template(this.template);
            
            $(this.el).html(tmpl(this.model.toJSON()));
            return this;
        }
    });
    
    app.DirectoryView = Backbone.View.extend({
        el: "#posts-tehnology",
        //className: '<div class="row text-center">',
        initialize: function () {
            this.collection = new app.Directory(app.posts);
            this.render();
        },

        render: function () {
            var that = this;
            _.each(this.collection.models, function (item) {
                var oneView = new app.View({
	                model: item
	            });
	            this.$el.append(oneView.render().el);
            }, this);
        }
    });

    (function(){
        new app.DirectoryView();
    })();
});
