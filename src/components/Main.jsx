import React from "react";
import saksilogo from '../assets/saksilogo.png';
import hill1 from '../assets/hill1.png';
import hill2 from '../assets/hill2.png';
import hill3 from '../assets/hill3.png';
import hill4 from '../assets/hill4.png';
import hill5 from '../assets/hill5.png';
import tree from '../assets/tree.png';
import leaf from '../assets/leaf.png';
import plant from '../assets/plant.png';


function Main() {

    document.title = "Saksı";

    return (


        <div className="body">
            <div className="header">
                <img className="" src={saksilogo} alt="" />
                <nav className="navigation">
                    <a href="#" className="active">Anasayfa</a>
                    <a href="#">Misyonumuz</a>
                    <a href="#">Hakkımızda</a>
                </nav>
            </div>

            <div className="parallax">
                <img className="" src={hill1} alt="" />
                <img className="" src={hill2} alt="" />
                <img className="" src={hill3} alt="" />
                <img className="" src={hill4} alt="" />
                <img className="" src={hill5} alt="" />
                <img className="" src={tree} alt="" />
                <img className="" src={leaf} alt="" />
                <h2 id="text">Saksı Yeni Nesil Bitki Medyası</h2>
                <img className="" src={plant} alt="" />
            </div>
            
            <div className="sec">
                <h2>Saksı scrolling website</h2>
            <div>

            </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non massa est. Etiam nec rutrum augue, nec maximus sem. Nunc consequat mollis lacus, sed mollis eros faucibus nec. Sed porttitor, sapien ac efficitur commodo, dui arcu aliquet ex, in bibendum tellus metus et orci. Aliquam aliquet ex vel mi feugiat, id varius tellus dictum. Suspendisse nec efficitur turpis. Quisque eu sollicitudin dui, sed finibus ligula.

                    Mauris dignissim nulla ut enim tempor ultricies. Integer vitae dui lacus. Proin ullamcorper et lectus quis sollicitudin. Suspendisse placerat, lacus convallis lacinia dignissim, orci nulla rhoncus risus, non laoreet mauris dolor non mi. Mauris sagittis iaculis massa, eget porta mi. Praesent ultrices at nunc vitae tristique. Phasellus sed est arcu. Fusce euismod sem ac lectus tincidunt iaculis. Cras elementum malesuada augue, non tristique felis eleifend vitae. Nulla arcu augue, dictum sed sem non, mattis finibus ipsum. Sed euismod nisi ut massa condimentum accumsan. Donec erat est, pulvinar ut vestibulum ut, faucibus eu arcu. Phasellus luctus, ex vel convallis posuere, velit nisi vehicula lectus, a auctor lectus est vitae eros. Morbi non posuere massa.
                    
                    Etiam euismod orci non arcu elementum imperdiet. Sed sed mauris at nisl auctor sodales. Ut in tellus ac quam lacinia malesuada. Curabitur porta interdum blandit. Ut et urna odio. Mauris eu rhoncus odio, sed placerat dolor. Donec pharetra dui eu dapibus molestie. Maecenas rutrum lorem turpis, eget pretium odio eleifend et. Nullam eu lectus libero. Donec suscipit leo a tristique lacinia. Ut rhoncus efficitur ullamcorper. Aenean quis ex a neque ullamcorper sollicitudin. Nunc mollis volutpat ligula et efficitur. Phasellus posuere ullamcorper leo vitae vehicula.
                    
                    Aenean a tempor erat. Sed pretium, metus non ullamcorper consequat, neque justo dictum augue, ac volutpat neque nisi nec leo. Pellentesque imperdiet magna nec commodo pretium. Curabitur in nisl felis. Quisque feugiat metus et dolor placerat pretium vitae in metus. Curabitur faucibus consequat nibh, vel placerat dui maximus eget. Quisque scelerisque orci et felis lobortis auctor. Vivamus rutrum posuere elit, a aliquam justo bibendum in. Quisque at pulvinar urna, ut congue nulla. Maecenas dictum justo sed ligula cursus, eget iaculis purus imperdiet. Ut fringilla, orci vitae viverra euismod, ante massa blandit sapien, et consequat arcu tortor in eros. Nulla arcu ante, varius vitae metus vitae, ultrices feugiat mi. Vestibulum non pretium leo.
                    
                    Sed id facilisis metus. Aenean aliquet neque dui, et scelerisque augue tincidunt a. Vestibulum cursus luctus nibh, vel tempor elit porttitor quis. Nam bibendum nisl sed semper molestie. Cras mollis neque ullamcorper mi pellentesque, vitae porttitor lectus hendrerit. Suspendisse non venenatis augue, ut malesuada tortor. Sed venenatis leo eu lacus consequat, finibus lobortis ligula ultrices. Sed arcu eros, volutpat eget est vel, volutpat accumsan sapien. Donec tellus erat, semper a sollicitudin sed, efficitur facilisis dui. Proin dapibus pharetra ex, eu varius eros elementum nec. Sed nec tincidunt sapien.
                </p>
            </div>

        </div>
    );
}

export default Main;