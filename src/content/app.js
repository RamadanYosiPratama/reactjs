import React, { Component } from 'react';

class App extends Component {
    render() {
        return( 
        	<div className="wrapper">
        	<div className="header">
        	<div className="navbar">
        	<div className="logo">
        		<img className="imgfluid" src={require('../logo/babastudio-logo.png')} />

        	</div>
        	<div className="menu">
        	<ul>
        	<li><a>Home</a></li>
        	<li><a>BLogs</a></li>
        	<li><a>Gallery</a></li>
        	<li><a>Kontak</a></li>
        	</ul>
        	</div>
        	</div>
        	</div>
        	
        {/* end header */}

        <div className="slider">
        	<div className="slidercontent">
        		<img className="imageslider" src={require('../images/banner-desktop.jpg')} />
        	</div>
        </div>



        <h2 className="dataprestasi">Prestasi Murid babastudio</h2>
    <div className="content">

    	<div className="content-gambar">
    	<div className="image">
    	<img className="imagesliderr" src={require('../images/21cineplex.jpg')} />
    	<div className="contentimage">
    	<h2 className="fontimage">www.21cineplex</h2>
    	</div>
    </div>
    	<div className="image">
 		<img className="imagesliderr" src={require('../images/21cineplex.jpg')} />
    	<div className="contentimage">
    	<h2 className="fontimage">www.bpn.go.id</h2>	
    </div>
    </div>
    <div className="image">
    <img className="imagesliderr" src={require('../images/republika.jpg')} />
    <h2 className="fontimage">www.republika.co.id</h2>
    </div>
    </div>


    </div>
{/* end gambar */}
	<div className="content-gambar">
		<h2 className="dataprestasi">Tempat kursus babastudio</h2>
				<div className="content-yutube">
						<iframe width="560" height="315" src="https://www.youtube.com/embed/k1OWLK0Yhc8" frameborder="0" allow="accelerometer; autoplay; encrypted-media;gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
			<div className="content-map">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126921.16670403072!2d106.83023345735566!3d-6.225910769338846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1495f1fddc9%3A0xfe3d872dbc2b760a!2sGoogle%20Indonesia!5e0!3m2!1sid!2sid!4v1574153511927!5m2!1sid!2sid" width="550" height="300" frameborder="0"  allowfullscreen=""></iframe> 
  </div>
  </div>
  </div>


        )
}
    }

export default App;