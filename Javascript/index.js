$(document).ready(function(){
  $(".spec-images-rumah").css("border-radius", "1rem 1rem");
  $(".real-images").css("border-radius", "3rem 3rem");

  $(".contact-link").click(function(){
    var link = $(this).attr("id");
    console.log(link);
    if (link === "whatsapp") {
      window.open("https://wa.me/6281291726369?text=Halo,%20boleh%20minta%20pricelist%20Mesa%20Grande");
    }else if (link === "instagram") {
      window.open("https://www.instagram.com/hip_property/")
    }else if (link === "facebook") {
      window.open("https://www.facebook.com/hipproperty/")
    }
  });
});
