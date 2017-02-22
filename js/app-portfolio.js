$(function() {

    window.app = {};

    app.posts = [
        { modalItem: 'href="#portfolioModal1"', img: '<img src="img/portfolio/polo360-preview.jpg" class="img-responsive" alt="polo360-preview">', title: '<h4>Polo360</h4>', pre: '<p class="text-muted">Responsive Web Site Template</p>' },
        { modalItem: 'href="#portfolioModal2"', img: '<img src="img/portfolio/mostrare-preview.jpg" class="img-responsive" alt="mostrare-preview">', title: '<h4>Mostrare</h4>', pre: '<p class="text-muted">Responsive Web Site Template</p>' },
        { modalItem: 'href="#portfolioModal3"', img: '<img src="img/portfolio/fowler-preview.jpg" class="img-responsive" alt="fowler-preview">', title: '<h4>Martin Fowler</h4>', pre: '<p class="text-muted">Responsive Web Site</p>' },
        { modalItem: 'href="#portfolioModal4"', img: '<img src="img/portfolio/pattern-preview.jpg" class="img-responsive" alt="pattern-preview">', title: '<h4>Pattern</h4>', pre: '<p class="text-muted">Responsive Web Site</p>' },
        { modalItem: 'href="#portfolioModal5"', img: '<img src="img/portfolio/rasm-preview.jpg" class="img-responsive" alt="rasm-preview">', title: '<h4>Rasm</h4>', pre: '<p class="text-muted">Responsive Wordpress Template</p>' },
        { modalItem: 'href="#portfolioModal6"', img: '<img src="img/portfolio/likezz-preview.jpg" class="img-responsive" alt="likezz-preview">', title: '<h4>Likezz</h4>', pre: '<p class="text-muted">Responsive Wordpress Template</p>' },
        { modalItem: 'href="#portfolioModal7"', img: '<img src="img/portfolio/osbb-preview.jpg" class="img-responsive" alt="osbb-preview">', title: '<h4>OCBB</h4>', pre: '<p class="text-muted">Responsive Web Site in clean ES</p>' },
        { modalItem: 'href="#portfolioModal8"', img: '<img src="img/portfolio/land-preview.jpg" class="img-responsive" alt="land-preview">', title: '<h4>Land</h4>', pre: '<p class="text-muted">Responsive Web Site with Materialize</p>' }
    ];    

    app.Post = Backbone.Model.extend({});

    app.Directory = Backbone.Collection.extend({
        model: app.Post
    });

    app.View = Backbone.View.extend({ 
        className: 'col-md-4 col-sm-4 col-lg-4 portfolio-item',       
        template: $("#tmpl-portfolio").html(),
        render: function () {
            var tmpl = _.template(this.template);
            
            $(this.el).html(tmpl(this.model.toJSON()));
            return this;
        }
    });
    
    app.DirectoryView = Backbone.View.extend({
        el: "#posts-portfolio",
        //className: '<div class="row">',
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