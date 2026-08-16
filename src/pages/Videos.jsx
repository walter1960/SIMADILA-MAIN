import useScrollAnimation from '../hooks/useScrollAnimation';

const Videos = () => {
    useScrollAnimation('.section-title, .video-item');

    const videosList = [
        {
            id: 1,
            title: "Simadila Educ'Action - Vidéo 1",
            embedUrl: "https://www.youtube.com/embed/dXebTgokplU"
        },
        {
            id: 2,
            title: "Simadila Educ'Action - Vidéo 2",
            embedUrl: "https://www.youtube.com/embed/4jJgOKlPsak"
        },
        {
            id: 3,
            title: "Simadila Educ'Action - Vidéo 3",
            embedUrl: "https://www.youtube.com/embed/QRKScD6kXz0"
        }
    ];

    return (
        <section className="section" id="videos">
            <div className="container">
                <h2 className="section-title">Nos Vidéos</h2>
                <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px', color: '#64748b' }}>
                    Découvrez nos actions, distributions et reportages sur le terrain au Togo et au Bénin
                </p>
                <div className="video-grid">
                    {videosList.map((video) => (
                        <div key={video.id} className="video-item">
                            <iframe
                                src={video.embedUrl}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Videos;
