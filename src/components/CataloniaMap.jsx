import React, { useEffect } from "react";
import { ReactSVG } from 'react-svg';
import Map from "../data/map";

const CataloniaMap = () => {
    const comarques = [
        'g4238', // Grup de comarques
        // Tarragona
        'path3912', // Montsià
        'path3931', // Baix Ebre
        'path3923', // Ribera d'Ebre
        'path3921', // Terra Alta
        'path3935', // Baix Camp
        'path3940', // Priorat
        'path3943', // Tarragonès
        'path4009', // Alt Camp
        'path4012', // Conca de Barberà
        'path4037', // Baix Penedès


        // LLeida
        'path3960', // Pallars Jussà
        'path3956', // Alta Ribagorça
        'path4015', // Garrigues
        'path4018', // Segarra
        'path4107', // Solsonés
        'path4184', // Segrià
        'path4205', // Urgell
        'path4186', // Plà d'Urgell
        'path4124', // Noguera
        'path3977', // Pallar Sobrià
        'path3970', // Alt Urgell
        'path3814', // Val d'Aran

        // Girona
        'path3985', // Baix Empordà
        'path3979', // Alt Empordà
        'path3988', // Gironès
        'path3991', // Pla de l'Estany
        'path3994', // Garrotxa
        'path3994', // Selva
        'path4078', // Ripollès
        'path3967', // Cerdanya

        // Barcelona
        'path4002', // Maresme
        'path4006', // Vallès Oriental
        'path4021', // Anoia
        'path4024', // Valles Occidental
        'path4030', // Barcelonès
        'path4040', // Alt Penedès
        'path4063', // Garraf
        'path4103', // Berguedà
        'path4099', // Baix LLobregat
        'path4097', // Bages
        'path4070', // Osona
    ]
    const provincies = [
        'g5869', // Grup de provincies
        'path4297', // Lleida
        'path4283', // Tarragona
        'path5847', // Girona
        'path5845', // Barcelona
    ]

    useEffect(() => {
        const hideProvincies = () => {
            provincies.forEach((id) => {
                const path = document.getElementById(id);
                if (path) {
                    path.setAttribute("display", "none")
                }
            })
        }
        hideProvincies();
    }, [])


    return <Map />
}

export default CataloniaMap;