import React, { useState } from 'react';

interface ClickableImageProps {
    src: string;
    alt: string;
    title?: string;
    className?: string;
    style?: React.CSSProperties;
}

export const ClickableImage: React.FC<ClickableImageProps> = ({
    src,
    alt,
    title,
    className = "content-img",
    style
}) => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleImageClick = () => {
        setIsFullscreen(true);
    };

    const handleCloseModal = () => {
        setIsFullscreen(false);
    };

    const defaultStyle: React.CSSProperties = {
        maxWidth: '60%',
        height: 'auto',
        display: 'block',
        margin: '1rem 0',
        ...style
    };

    return (
        <>
            <img
                src={src}
                alt={alt}
                title={title}
                className={className}
                style={defaultStyle}
                onClick={handleImageClick}
            />

            {isFullscreen && (
                <div className="image-modal" onClick={handleCloseModal}>
                    <span className="image-modal-close" onClick={handleCloseModal}>
                        &times;
                    </span>
                    <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </>
    );
};
