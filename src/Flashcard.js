import React, { useState, useEffect } from 'react';
import './Flashcard.css'; 

function Flashcard({ card, color }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [displayCard, setDisplayCard] = useState(card);

    useEffect(() => {
        if (isFlipped) {
            setTimeout(() => {
                setIsFlipped(false);
                setTimeout(() => setDisplayCard(card), 300); 
            }, 300); 
        } else {
            setDisplayCard(card);
        }
    }, [card]);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    const darkenColor = (col, amt) => {
        let usePound = false;
        if (col[0] == "#") {
            col = col.slice(1);
            usePound = true;
        }
        var num = parseInt(col, 16);
        var r = (num >> 16) + amt;
        if (r > 255) r = 255;
        else if (r < 0) r = 0;

        var b = ((num >> 8) & 0x00FF) + amt;
        if (b > 255) b = 255;
        else if (b < 0) b = 0;

        var g = (num & 0x0000FF) + amt;
        if (g > 255) g = 255;
        else if (g < 0) g = 0;

        return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
    };

    const backColor = darkenColor(color, -20); 
    return (
        <div className="flashcard" onClick={handleClick}>
            <div className={isFlipped ? "card flipped" : "card"}>
                <div className="card-front" style={{ backgroundColor: color }}>
                    {displayCard.question}
                    <div className="card-info">{`Alexis Piercey - ${displayCard.id}`}</div>
                </div>
                <div className="card-back" style={{ backgroundColor: backColor }}>
                    {displayCard.answer}
                    <div className="card-info">{`Alexis Piercey - ${displayCard.id}`}</div>
                </div>
            </div>
        </div>
    );
}

export default Flashcard;
