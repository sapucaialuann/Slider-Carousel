/*
React-slick docs: https://react-slick.neostack.com/docs/api/

Icons made by Freepik from www.flaticon.com
*/
//essenciais
import React from 'react';
import Slider from 'react-slick';

//estilos e imagens; Não serão necessários com a API
import '../../css/slider.css';
import dinosaur from "../../img/dinosaur.svg";
import dinosaur1 from "../../img/dinosaur1.svg";
import dinosaur2 from "../../img/dinosaur2.svg";
import dinosaur3 from "../../img/dinosaur3.svg";
import dinosaur4 from "../../img/dinosaur4.svg";


function CarouselImage(props) {
	return (
		<a href={ props.link } className='linkLogo' >
			<img className='logoClientes' src={ props.img } alt={ props.description }/>
		</a>
	)
};


function SlideView(props) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					arrows: false,
				}
			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			}
		]
		};
		
	return(
		<Slider {...settings} className="sliderContainer">
			<CarouselImage link="#" img={ dinosaur1 } description="regular flat icon"/>
			<CarouselImage link="#" img={ dinosaur2 } description="regular flat icon"/>
			<CarouselImage link="#" img={ dinosaur } description="regular flat icon"/>
			<CarouselImage link="#" img={ dinosaur3 } description="regular flat icon"/>
			<CarouselImage link="#" img={ dinosaur4 } description="regular flat icon"/>
		</Slider>
	)
};

export default function ReactSlider(props) {
	return (
		<React.Fragment>
			<section className="sectionContainer">
				<h2> Just a simple react slider.</h2>
				<SlideView />
			</section>
		</React.Fragment>
	);
};