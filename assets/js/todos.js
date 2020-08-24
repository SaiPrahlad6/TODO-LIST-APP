$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
});

//By  Clicking on X w eneed to remove that list element 
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        //grabbing input text
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-pencil-square-o").click(function(){
    $("input[type='text'").fadeToggle();
})