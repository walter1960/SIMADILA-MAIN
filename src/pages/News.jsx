import { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const News = () => {
    useScrollAnimation('.section-title, .news-card');
    const [filter, setFilter] = useState('all');

    const newsArticles = [
        {
            id: 1,
            title: "Objectif 2026 : Accompagnement de 50 enfants au Togo et au Bénin",
            date: "15 janvier 2026",
            category: "impact",
            image: "/staticfiles/img/galerie-eleves-ecole.jpg",
            excerpt: "Simadila Educ'Action lance ses programmes d'accompagnement éducatif 2026 pour 50 enfants bénéficiaires au Togo et au Bénin.",
            link: "/mission"
        },
        {
            id: 2,
            title: "Distribution de 500 kits scolaires au Togo et au Bénin",
            date: "20 décembre 2025",
            category: "terrain",
            image: "/staticfiles/img/galerie-distribution-vetements.jpg",
            excerpt: "Notre équipe sur le terrain a distribué 500 kits scolaires complets aux élèves des écoles partenaires au Togo et au Bénin.",
            link: "/galerie"
        },
        {
            id: 3,
            title: "Mobilisation bénévole et préparation des dotations",
            date: "10 décembre 2025",
            category: "terrain",
            image: "/staticfiles/img/galerie-benevoles-tri.jpg",
            excerpt: "Nos bénévoles se mobilisent pour organiser, trier et préparer les fournitures et équipements scolaires destinés aux écoles rurales.",
            link: "/galerie"
        },
        {
            id: 4,
            title: "Documents statutaires et engagement RGPD disponibles",
            date: "1 décembre 2025",
            category: "transparence",
            image: "/staticfiles/img/simadila-enfants-ecole.jpg",
            excerpt: "Consultez les statuts officiels de l'association ainsi que notre politique de protection des données et de l'image de nos bénéficiaires.",
            link: "/publications"
        }
    ];

    const categories = [
        { value: 'all', label: 'Toutes les actualités' },
        { value: 'impact', label: 'Impact' },
        { value: 'terrain', label: 'Actions Terrain' },
        { value: 'transparence', label: 'Transparence & Statuts' }
    ];

    const filteredNews = filter === 'all'
        ? newsArticles
        : newsArticles.filter(article => article.category === filter);

    return (
        <section className="section" id="news">
            <div className="container">
                <h2 className="section-title">Actualités</h2>
                <p className="section-subtitle">
                    Suivez nos actions sur le terrain et découvrez l'impact de votre soutien
                </p>

                {/* Filter Tabs */}
                <div className="news-filters">
                    {categories.map(({ value, label }) => (
                        <button
                            key={value}
                            className={`filter-btn ${filter === value ? 'active' : ''}`}
                            onClick={() => setFilter(value)}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* News Grid */}
                <div className="news-grid">
                    {filteredNews.map((article) => (
                        <article key={article.id} className="news-card">
                            <div className="news-image">
                                <img src={article.image} alt={article.title} />
                                <span className="news-category">{article.category}</span>
                            </div>
                            <div className="news-content">
                                <time className="news-date">{article.date}</time>
                                <h3 className="news-title">{article.title}</h3>
                                <p className="news-excerpt">{article.excerpt}</p>
                                <Link to={article.link} className="news-link">
                                    Lire la suite <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="news-cta">
                    <h3>Restez informé de nos actions</h3>
                    <p>Inscrivez-vous à notre newsletter pour recevoir nos actualités chaque mois</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Votre email" />
                        <button className="btn">S'inscrire</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
