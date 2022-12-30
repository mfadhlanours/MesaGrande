$(document).ready(function(){
  $(".spec-images-rumah").css("border-radius", "1rem 1rem");
  $(".real-images").css("border-radius", "3rem 3rem");

  function contactLink(whatsapp){
    window.open("https://wa.me/6281291726369?text=Halo,%20boleh%20minta%20pricelist%20Mesa%20Grande")
  }
  function contactLink(instagram){
    window.open("https://www.instagram.com/hip_property/")
  }
  function contactLink(facebook){
    window.open("https://www.facebook.com/hipproperty/")
  }
  function contactLink(email){
    window.open("https://wa.me/6281291726369?text=Halo,%20boleh%20minta%20pricelist%20Mesa%20Grande")
  }

  $(".contact-link").click(function(){
    var link = $(this).attr("id");
    contactLink(link);
  })
});
