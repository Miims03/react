import React, { useState } from 'react';
import ImgReact from '../assets/react.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'





function Carousel() {

    const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />
    const arrowRight = <FontAwesomeIcon icon={faArrowRight} />

    const [items, setItems] = useState([
        {
            id: 1,
            itemName: 'Item1',
            itemPrice: 111,
            itemImg: 'src/assets/react.svg',
        },
        {
            id: 2,
            itemName: 'Item2',
            itemPrice: 222,
            itemImg: 'src/assets/react.svg',
        },
        {
            id: 3,
            itemName: 'Item3',
            itemPrice: 333,
            itemImg: 'src/assets/react.svg',
        },
        {
            id: 4,
            itemName: 'Item4',
            itemPrice: 444,
            itemImg: 'src/assets/react.svg',
        },
        {
            id: 5,
            itemName: 'Item5',
            itemPrice: 555,
            itemImg: 'src/assets/react.svg',
        },
        {
            id: 6,
            itemName: 'Item6',
            itemPrice: 666,
            itemImg: 'src/assets/react.svg',
        },
        {
            id: 7,
            itemName: 'Item7',
            itemPrice: 777,
            itemImg: 'src/assets/react.svg',
        },
        {
            id: 8,
            itemName: 'Item8',
            itemPrice: 888,
            itemImg: 'c:\Users\amine\AppData\Local\Temp\oxfords-women.png',
        },
    ])

    // const addItem = () => {
    //     const newItem = {
    //         id: setayD(ayD + 1), // Incrémente automatiquement l'ID
    //         itemName: `Item ${items.length + 1}`,
    //         itemPrice: 777,
    //         itemImg: ImgReact,
    //     };
    //     setItems([...items, newItem]); // Ajoute le nouvel élément à la liste des articles
    // };
    // addItem()
    // console.log(items.length)

    window.onload = () => {
        console.log("page is fully loaded");
    }
    
    const itemSlide = document.querySelectorAll('.items')
    let slidUnit = 0
    let size = 3

    const slideLeft = () => {
        size--
        console.log(size)
        if (size < 3) {
            size = 3
            slidUnit = 0
        }else{
            slidUnit += 109.5
        }
        itemSlide.forEach(elem => {
                elem.style.transform = `translateX(${slidUnit}%)`
        });
    }

    const slideRight = () => {
        size++
        console.log(size)
        if (size > items.length) {
            size = 3
            slidUnit = 0
        }else{
            slidUnit -= 109.8
        }
        itemSlide.forEach(elem => {
                elem.style.transform = `translateX(${slidUnit}%)`
        });
    }

    // itemSlide.forEach(elem => {
    //     elem.addEventListener('mouseenter',()=>{
    //         elem.style.marginBottom = `5%`
    //     });
    //     elem.addEventListener('mouseleave',()=>{
    //         elem.style.marginBottom = `0%`
    //     })
    // });
    

    return (
        <div className='Carousel'>
            <h1>Carousel</h1>
            <div className='allSlider'>
                <button 
                className='Left'
                onClick={slideLeft}
                >
                    {arrowLeft}
                </button>
                
                <div className='slider'>
                    {items.map(item => (
                        <div key={item.id}
                        className='items'
                        // className={`items ${clicLeft  ? 'SlideLeft' : ''}`}
                        >
                            <h3>{item.itemName}</h3>
                            <img src={item.itemImg} />
                            <h4>{item.itemPrice}</h4>
                        </div>
                    ))}
                </div>
                
                <button 
                className='Right'
                onClick={slideRight}>
                        {arrowRight}
                </button>
            </div>
        </div>
    );
}

export default Carousel;