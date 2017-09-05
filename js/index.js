//Isotope这个jQuery插件，可以用它来创建动态和智能布局，
//尤其是现在主流的【瀑布流】形式，非常方便。
//也可以隐藏和显示与过滤项目，重新排序和整理甚至更多


// $(window).load(function () {

// var $container = $('#gallery-content-center');
    
// $container.isotope({itemSelector : 'img'});

	
// $("#filter-all").click(function() { 
// 	$container.isotope({ filter: '.all' });; 
// });
// $("#filter-studio").click(function() {  
// 	$container.isotope({ filter: '.studio' });;  
// });
// $("#filter-landscape").click(function() {  
// 	$container.isotope({ filter: '.landscape' });;  
// });

// });


//imagesLoaded可以在所有的图片都被加载之后触发一个回调函数。
var $container = $('#gallery-content-center').imagesLoaded( function() {

	//要进行布局的元素
 	$container.isotope({itemSelector : 'img'});

	
$("#filter-all").click(function() { 

	//Isotope可以通过filter参数选项隐藏和显示元素items。匹配的items被显示，不匹配的items被隐藏
	$container.isotope({ filter: '.all' });; 
});
$("#filter-studio").click(function() {  
	$container.isotope({ filter: '.studio' });;  
});
$("#filter-landscape").click(function() {  
	$container.isotope({ filter: '.landscape' });;  
});
$("#filter-gaoxiao").click(function() {  
	$container.isotope({ filter: '.gaoxiao' });;  
});
}); 