store = {
		slides: [
			{title: "hello slider", body:"slide body", tag:"java"}, 
			{title:"another slide", body:"another body", tag:"sql"}],
		activeSlide: 0
};


function loadSlide(num){
	var title = store.slides[num].title;
	var body = store.slides[num].body;
	
	// Manipolare il dom affinche visualizzi il risultato di questa  cosa
	
	$('#title').html(title);
	$('#body').html(body);
	
}




loadSlide(0);
