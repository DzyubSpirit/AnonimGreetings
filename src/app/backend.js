
angular.module('app').run(function($httpBackend){
    var rules = [{rulename: 'Must be 5 characters'}, 
        {rulename: 'Must not be used elsewhere'},
        {rulename: 'Must be named corey'}];

    var themes = [
        {
            id: '1',
            title: '1 колонка',
            imagePath: 'images/theme/img-1col.svg',
            themeType: '1'
        },
        {
            id: '2',
            title: '1:2 колонки',
            imagePath: 'images/theme/img-12col.svg',
            themeType: '1-2'
        },
        {
            id: '3',
            title: '1:2:1 колонки',
            imagePath: 'images/theme/img-121col.svg',
            themeType: '1-2-1'
        },
        {
            id: '4',
            title: '1:3 колонки',
            imagePath: 'images/theme/img-13col.svg',
            themeType: '1-3'
        },
        {
            id: '5',
            title: '1:3:1 колонки',
            imagePath: 'images/theme/img-131col.svg',
            themeType: '1-3-1'
        },
        {
            id: '6',
            title: '1:3:2 колонки',
            imagePath: 'images/theme/img-132col.svg',
            themeType: '1-3-2'
        }
    ];

    //returns the current list of rules
    $httpBackend.whenGET('/').respond(themes);

    // adds a new rule to the rules array
    $httpBackend.whenPOST('/').respond(function(method, url, data){
    	var rule = angular.fromJson(data);
    	console.log(data)
    	rules.push(rule);
    	return [200, rules]
    });

    $httpBackend.whenGET(/.*/).passThrough();
});