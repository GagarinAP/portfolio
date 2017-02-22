$(function() {

    window.app = {};

    app.skills = [
        { tag: '<i class="fa fa-cogs" aria-hidden="true"></i>', tehnology: ' ООП', pre: '<p>Базові принципи та парадигми обєктно-орієнтованого програмування.</p>' },
        { tag: '<i class="fa fa-clipboard" aria-hidden="true"></i>', tehnology: ' Паттерни проектування', pre: '<p>Використання яких дозволяє знизити складність розробки за рахунок готових абстракцій.</p>' },
        { tag: '<i class="fa fa-code" aria-hidden="true"></i>', tehnology: ' Кодінг', pre: '<p>Чистота коду та коментування блоків, секцій.</p>' }        
    ];   

    app.Skill = Backbone.Model.extend({});

    app.Directory = Backbone.Collection.extend({
        model: app.Skill
    });

    app.View = Backbone.View.extend({ 
        className: 'col-lg-4 col-sm-4 col-md-4',       
        template: $("#tmpl-skills").html(),
        render: function () {
            var tmpl = _.template(this.template);
            
            $(this.el).html(tmpl(this.model.toJSON()));
            return this;
        }
    });
    
    app.DirectoryView = Backbone.View.extend({
        el: "#posts-skills",
        //className: '<div class="row">',
        initialize: function () {
            this.collection = new app.Directory(app.skills);
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