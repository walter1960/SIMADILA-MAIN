import useScrollAnimation from '../hooks/useScrollAnimation';

const Join = () => {
    useScrollAnimation('.section-title, .join-form-container');
    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title">Rejoindre l'Association</h2>
                <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
                    Devenez acteur du changement en adhérant à Simadila Educ'Action. Ensemble, construisons l'avenir.
                </p>

                <div className="join-form-container fade-in">
                    <h3>Formulaire d'Adhésion</h3>
                    <form action="mailto:simadilaeducaction@gmail.com?subject=Nouvelle Demande d'Adhésion" method="post"
                        encType="text/plain">
                        <div className="form-group">
                            <label>Identité</label>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                <input type="text" name="nom" placeholder="Nom" required />
                                <input type="text" name="prenom" placeholder="Prénom" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Coordonnées</label>
                            <input type="email" name="email" placeholder="Adresse Email" required
                                style={{ marginBottom: '15px' }} />
                            <input type="tel" name="phone" placeholder="Numéro de Téléphone" required />
                        </div>

                        <div className="form-group">
                            <label>Adresse Postale</label>
                            <input type="text" name="address" placeholder="Rue, Ville, Code Postal, Pays" />
                        </div>

                        <div className="form-group">
                            <label>Profession / Compétences</label>
                            <input type="text" name="profession" placeholder="Votre métier ou domaine d'expertise" />
                        </div>

                        <div className="form-group">
                            <label>Pourquoi souhaitez-vous nous rejoindre ?</label>
                            <textarea name="motivation" rows="4" placeholder="Dites-nous en quelques mots..."></textarea>
                        </div>

                        <button type="submit" className="btn btn-large" style={{ width: '100%' }}>Envoyer la demande</button>
                        <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '0.85rem', color: '#666' }}>
                            En cliquant sur Envoyer, votre client mail s'ouvrira avec vos informations préremplies.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Join;
