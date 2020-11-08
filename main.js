var images = ["family.jpg","mukil.jpg","dad.jpg","mom.jpg","sister.jpg"];
var names = ["family Book"," Mukil Kaarthick","Mahesh","Priya","Rishitha"];
var i = 0;
    function nextslide(){
        console.log(images);
        console.log(names);
    };
function update() 
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}