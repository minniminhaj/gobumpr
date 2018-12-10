$(document).ready(function() {
 
   $("#orderbtn").click(function(){
        window.location.href=https://www.zomato.com/chennai;
   });
   var app=angular.module('myapp',[]);
    app.controller('ctrl',function($scope){
         $scope.restaurant=[
                           {
                             name:"Adyar Ananda Bhavan",
                             img:"cor2.jpg" ,
                             city:"Chennai",
                             Inforamtion:"Multi-Cuisine Vegetarian Restaurant in India",
                             Speciality:"Idly,Pongal,Puri,Dosa,Chappati,Sweets,Ice Cream and Masala Dosa",
                             url:"https://www.zomato.com/hyderabad/viyyalavaari-vindu-madhapur?zrp_bid=0&zrp_pid=1&ref_id=7022&ref_type=subzone"
                            },
                           {
                            name:"Aasife Biryani" ,
                            img:"cor3.jpg",
                            city:"Chennai",
                            Inforamtion:"The World's Best Biryani",
                            Speciality:"Chicken Biryani,Mutton Biryani,Tandoori,Chicken 65 and Chilly Chicken"

                          },
                          {
                            name:"Lassi Shop" ,
                            img:"cor4.jpg",
                            city:"Chennai",
                            Inforamtion:"Taste Delicious",
                            Speciality:"Fresh Juices,Ice creams, Mocktails and Smoothies "

                          },
                          {
                            name:"Murugan Idily" ,
                            img:"cor1.jpg",
                            city:"Bengaluru",
                            Inforamtion:"South India's Best Restaurant",
                            Speciality:"Idly,Pongal,Puri,Dosa,Chappati and Masala Dosa "

                          },
                          {
                            name:"Zahoor Biryani" ,
                            img:"cor2.jpg",
                            city:"Bengaluru",
                            Inforamtion:"Bengaluru's Biryani Center",
                            Speciality:"Chicken Biryani,Mutton Biryani,Tandoori,Chicken 65 and Chilly Chicken"

                          },
                          {
                            name:"Murugan Idily" ,
                            img:"cor1.jpg",
                            city:"Hyderabad",
                            Inforamtion:"South India's Best Restaurant",
                            Speciality:"Idly,Pongal,Puri,Dosa,Chappati and Masala Dosa "

                          },
                          {
                            name:"Burger King" ,
                            img:"cor1.jpg",
                            city:"Hyderabad",
                            Inforamtion:"Burger Of Burgers ",
                            Speciality:"Chicken Burger, Veg Burger anD Mutton Burger"

                          },
                          {
                            name:"Coffe Day" ,
                            img:"cor5.jpg",
                            city:"Hyderabad",
                            Inforamtion:"Refresh Your Mind",
                            Speciality:"Coffe, Filter Coffe and Cold Coffe; "

                          },
                          {
                            name:"KFC" ,
                            img:"cor4.jpg",
                            city:"Bengaluru",
                            Inforamtion:"Crispy And Crunchy",
                            Speciality:"Bucket Chicken, Chicken Roll , French Fries and Burger "

                          },
                          {
                            name:"Mughlai Biryani" ,
                            img:"cor2.jpg",
                            city:"Hyderabad",
                            Inforamtion:"Taste of Hyderabad",
                            Speciality:"Haleem Mutton,Chicken Biryani,Chicken 65 and Chilly Chicken "

                          },
                          {
                            name:"Arya Nivas" ,
                            img:"cor2.jpg",
                            city:"Bengaluru",
                            Inforamtion:"Vegeterian to Core",
                            Speciality:"Idly,Pongal,Puri,Dosa,Chappati and Masala Dosa "

                          },
                          {
                            name:"Telangana Fast Food" ,
                            img:"cor4.jpg",
                            city:"Hyderabad",
                            Inforamtion:"Fresh Food Anytime",
                            Speciality:"Idly,Pongal,Puri,Dosa,Chappati and Masala Dosa "

                          }
                             
                             
                             
                            


         ];
                     
  
   });    
});