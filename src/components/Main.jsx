import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import login_img from '../assets/login_page.png';
import kartela_logo from '../assets/logo_kartela.png';
import Form from 'react-bootstrap/Form';
import "@fontsource/roboto";
import "@fontsource/rubik";


function Login() {

    document.title = "Giriş";

    return (
        
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saksı Tanıtım</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h2 class="logo">SAKSI</h2>
        <nav class="navigation">
            <a href="#" class="active">Anasayfa</a>
            <a href="#">Misyonumuz</a>
            <a href="#">Hakkımızda</a>
        </nav>
    </header>
    <section class="parallax">
        <img src="hill1.png" id="hill1">
        <img src="hill2.png" id="hill2">
        <img src="hill3.png" id="hill3">
        <img src="hill4.png" id="hill4">
        <img src="hill5.png" id="hill5">
        <img src="tree.png" id="tree">  
        <img src="leaf.png" id="leaf">
        <h2 id="text">Saksı Yeni Nesil Bitki Medyası</h2>
        <img src="plant.png" id="plant">
    </section>

    <div class="services_section layout_padding">
        <div class="container">
           <h1 class="services_taital">Our Tea Services</h1>
           <p class="services_text">It is a long established fact that a reader will be </p>
           <div class="services_section_2 layout_padding">
              <div class="row">
                 <div class="col-md-6">
                    <div class="box_main active">
                       <div class="left_main">
                          <div class="cup_img_1"><img src="images/cup-img-1.png"></div>
                       </div>
                       <div class="middle_main">
                          <div class="border_10 active"></div>
                       </div>
                       <div class="right_main">
                          <h6 class="milk_text">Milk Tea</h6>
                          <h1 class="price_text">$10</h1>
                       </div>
                    </div>
                    <div class="box_main">
                       <div class="left_main">
                          <div class="cup_img_1"><img src="images/cup-img-2.png"></div>
                       </div>
                       <div class="middle_main">
                          <div class="border_10"></div>
                       </div>
                       <div class="right_main">
                          <h6 class="milk_text">Yellow Tea</h6>
                          <h1 class="price_text">$20</h1>
                       </div>
                    </div>
                    <div class="box_main">
                       <div class="left_main">
                          <div class="cup_img_1"><img src="images/cup-img-3.png"></div>
                       </div>
                       <div class="middle_main">
                          <div class="border_10"></div>
                       </div>
                       <div class="right_main">
                          <h6 class="milk_text">Green Tea</h6>
                          <h1 class="price_text">$20</h1>
                       </div>
                    </div>
                 </div>
                 <div class="col-md-6">
                    <div class="box_main">
                       <div class="left_main">
                          <div class="cup_img_1"><img src="images/cup-img-4.png"></div>
                       </div>
                       <div class="middle_main">
                          <div class="border_10"></div>
                       </div>
                       <div class="right_main">
                          <h6 class="milk_text">Red Tea</h6>
                          <h1 class="price_text">$10</h1>
                       </div>
                    </div>
                    <div class="box_main">
                       <div class="left_main">
                          <div class="cup_img_1"><img src="images/cup-img-5.png"></div>
                       </div>
                       <div class="middle_main">
                          <div class="border_10"></div>
                       </div>
                       <div class="right_main">
                          <h6 class="milk_text">Red Tea</h6>
                          <h1 class="price_text">$10</h1>
                       </div>
                    </div>
                    <div class="box_main">
                       <div class="left_main">
                          <div class="cup_img_1"><img src="images/cup-img-5.png"></div>
                       </div>
                       <div class="middle_main">
                          <div class="border_10"></div>
                       </div>
                       <div class="right_main">
                          <h6 class="milk_text">Red Tea</h6>
                          <h1 class="price_text">$10</h1>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <div class="see_bt"><a href="#">See More</a></div>
        </div>
     </div>
     
    <section class="sec">
        <h2>Saksı scrolling website</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non massa est. Etiam nec rutrum augue, nec maximus sem. Nunc consequat mollis lacus, sed mollis eros faucibus nec. Sed porttitor, sapien ac efficitur commodo, dui arcu aliquet ex, in bibendum tellus metus et orci. Aliquam aliquet ex vel mi feugiat, id varius tellus dictum. Suspendisse nec efficitur turpis. Quisque eu sollicitudin dui, sed finibus ligula.

            Mauris dignissim nulla ut enim tempor ultricies. Integer vitae dui lacus. Proin ullamcorper et lectus quis sollicitudin. Suspendisse placerat, lacus convallis lacinia dignissim, orci nulla rhoncus risus, non laoreet mauris dolor non mi. Mauris sagittis iaculis massa, eget porta mi. Praesent ultrices at nunc vitae tristique. Phasellus sed est arcu. Fusce euismod sem ac lectus tincidunt iaculis. Cras elementum malesuada augue, non tristique felis eleifend vitae. Nulla arcu augue, dictum sed sem non, mattis finibus ipsum. Sed euismod nisi ut massa condimentum accumsan. Donec erat est, pulvinar ut vestibulum ut, faucibus eu arcu. Phasellus luctus, ex vel convallis posuere, velit nisi vehicula lectus, a auctor lectus est vitae eros. Morbi non posuere massa.
            
            Etiam euismod orci non arcu elementum imperdiet. Sed sed mauris at nisl auctor sodales. Ut in tellus ac quam lacinia malesuada. Curabitur porta interdum blandit. Ut et urna odio. Mauris eu rhoncus odio, sed placerat dolor. Donec pharetra dui eu dapibus molestie. Maecenas rutrum lorem turpis, eget pretium odio eleifend et. Nullam eu lectus libero. Donec suscipit leo a tristique lacinia. Ut rhoncus efficitur ullamcorper. Aenean quis ex a neque ullamcorper sollicitudin. Nunc mollis volutpat ligula et efficitur. Phasellus posuere ullamcorper leo vitae vehicula.
            
            Aenean a tempor erat. Sed pretium, metus non ullamcorper consequat, neque justo dictum augue, ac volutpat neque nisi nec leo. Pellentesque imperdiet magna nec commodo pretium. Curabitur in nisl felis. Quisque feugiat metus et dolor placerat pretium vitae in metus. Curabitur faucibus consequat nibh, vel placerat dui maximus eget. Quisque scelerisque orci et felis lobortis auctor. Vivamus rutrum posuere elit, a aliquam justo bibendum in. Quisque at pulvinar urna, ut congue nulla. Maecenas dictum justo sed ligula cursus, eget iaculis purus imperdiet. Ut fringilla, orci vitae viverra euismod, ante massa blandit sapien, et consequat arcu tortor in eros. Nulla arcu ante, varius vitae metus vitae, ultrices feugiat mi. Vestibulum non pretium leo.
            
            Sed id facilisis metus. Aenean aliquet neque dui, et scelerisque augue tincidunt a. Vestibulum cursus luctus nibh, vel tempor elit porttitor quis. Nam bibendum nisl sed semper molestie. Cras mollis neque ullamcorper mi pellentesque, vitae porttitor lectus hendrerit. Suspendisse non venenatis augue, ut malesuada tortor. Sed venenatis leo eu lacus consequat, finibus lobortis ligula ultrices. Sed arcu eros, volutpat eget est vel, volutpat accumsan sapien. Donec tellus erat, semper a sollicitudin sed, efficitur facilisis dui. Proin dapibus pharetra ex, eu varius eros elementum nec. Sed nec tincidunt sapien.<br><br></p>
    </section>

    <script src="script.js"></script>
</body>

    )
}

export default Login