const body = document.querySelector('.body');
$('.image').click(function(e)
{
    let imageSrc = $(e.target).attr('src');
    $('.mainImage').attr('src' , imageSrc);

});
function color (color)
{
    body.style.background = color;
}  