import React, { useState, useEffect } from 'react';

import './styles.css';

function DevForm(props) {
    const { onSubmit } = props;

    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {

                const { latitude, longitude } = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);

            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        );
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
        });

        setGithubUsername('');
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username">Usuário do Github</label>
                <input
                    id="github_username"
                    name="github_username"
                    required
                    value={github_username}
                    onChange={e => setGithubUsername(e.target.value)}
                >
                </input>
            </div>

            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input
                    id="techs"
                    name="techs"
                    required
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                >
                </input>
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="Latitude">Latitude</label>
                    <input
                        id="Latitude"
                        type="number"
                        name="Latitude"
                        required
                        value={latitude}
                        onChange={e => setLatitude(e.target.value)}
                    ></input>
                </div>

                <div className="input-block">
                    <label htmlFor="Longitude">Longitude</label>
                    <input
                        id="Longitude"
                        type="number"
                        name="Longitude"
                        required
                        value={longitude}
                        onChange={e => setLongitude(e.target.value)}
                    ></input>
                </div>
            </div>

            <button type="submit">Salvar </button>

        </form>
    );
}

export default DevForm;