import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Carousel from '../components/Carousel';

const Gallery = () => {
    useScrollAnimation('.section-title, .carousel-container, .gallery-item-card');
    const [selectedImage, setSelectedImage] = useState(null);

    const items = [
        {
            src: '/staticfiles/img/galerie-eleves-ecole.jpg',
            title: "Les élèves et l'encadrement pédagogique",
            category: 'Action Éducative',
            location: "Afrique de l'Ouest",
            description: "Moment de joie et d'unité avec les élèves accompagnés dans leur établissement scolaire."
        },
        {
            src: '/staticfiles/img/galerie-distribution-vetements.jpg',
            title: "Distribution solidaire aux bénéficiaires",
            category: 'Soutien Direct',
            location: "Zone d'intervention Simadila",
            description: "Remise directe de vêtements et d'équipements pour soutenir les enfants et leurs familles."
        },
        {
            src: '/staticfiles/img/galerie-benevoles-tri.jpg',
            title: "Mobilisation et tri des dotations",
            category: 'Bénévolat & Terrain',
            location: "Centre de coordination",
            description: "Organisation, tri rigoureux et préparation des dotations par les membres de l'équipe."
        }
    ];

    const carouselImages = items.map(item => ({
        src: item.src,
        alt: item.title
    }));

    return (
        <section className="section gallery-page-section" id="galerie">
            <div className="container">
                <div className="section-header-center">
                    <h2 className="section-title">Galerie & Témoignages Visuels</h2>
                    <p className="section-subtitle">
                        Découvrez la réalité de nos actions sur le terrain, aux côtés des enfants, des familles et de nos bénévoles.
                    </p>
                </div>

                {/* Main Carousel Showcase */}
                <div className="gallery-carousel-wrapper">
                    <Carousel images={carouselImages} />
                </div>

                {/* Detailed Photo Grid */}
                <div className="gallery-cards-grid">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="gallery-item-card"
                            onClick={() => setSelectedImage(item)}
                        >
                            <div className="gallery-img-container">
                                <img src={item.src} alt={item.title} loading="lazy" />
                                <div className="gallery-overlay-badge">
                                    <span>{item.category}</span>
                                </div>
                                <div className="gallery-zoom-icon">
                                    <i className="fas fa-search-plus"></i>
                                </div>
                            </div>
                            <div className="gallery-item-info">
                                <div className="gallery-meta">
                                    <i className="fas fa-map-marker-alt"></i> {item.location}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
                        <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="gallery-modal-close" onClick={() => setSelectedImage(null)}>
                                &times;
                            </button>
                            <img src={selectedImage.src} alt={selectedImage.title} />
                            <div className="gallery-modal-caption">
                                <span className="gallery-modal-badge">{selectedImage.category}</span>
                                <h3>{selectedImage.title}</h3>
                                <p>{selectedImage.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;

