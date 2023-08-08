import React from 'react'
import ImageItem from './ImageItem'
import './Images.css'
import Image1 from '../assets/atl.jpg'
import Image2 from '../assets/ukelele.JPG'
import Image3 from '../assets/unc.jpg'
import Image4 from '../assets/aura.jpg'
import Image5 from '../assets/zen.jpeg'
import Image6 from '../assets/ny.JPG'

export default function Images() {
    return (
        <div className="cards">
            <h1>A glimpse into Armaan.</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards_items">
                        <div className="row">
                            <div className="column">
                                <ImageItem 
                                src={Image1}
                                text="Armaan Loving Atlanta"
                                label=""
                                path="/contact"
                                />
                            </div>
                            <div className="column">
                                <ImageItem 
                                src={Image2}
                                text="Armaan Playing the Ukelele"
                                label=""
                                path="/contact"
                                />
                            </div>
                            <div className="column">
                                <ImageItem 
                                src={Image3}
                                text="Armaan at UNC"
                                label=""
                                path="/contact"
                                />
                                </div>
                            </div>
                        
                        <div className="row">
                        <div className="column">
                        <ImageItem 
                            src={Image4}
                            text="Armaan's Dog Aura"
                            label=""
                            path="/contact"
                        />
                        </div>
                        <div className="column">
                        <ImageItem 
                            src={Image5}
                            text="Armaan's Dog Zen"
                            label=""
                            path="/contact"
                        />
                        </div>
                        <div className="column">
                        <ImageItem 
                            src={Image6}
                            text="Armaan sleeping in NYC"
                            label=""
                            path="/contact"
                        />
                        </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )

}