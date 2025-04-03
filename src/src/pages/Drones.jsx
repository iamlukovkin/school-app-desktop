import React from "react";
import BackButton from "../components/BackButton";
import first from '../static/images/drones/first.png';
import second from '../static/images/drones/second.png';
import third from '../static/images/drones/third.png';
import Page from "./Page";

export default class Drones extends Page {

    static title = "При обнаружении БПЛА";
    static description = "Памятка населению о порядке действий населения при обнаружении беспилотных летательных аппаратов (БПЛА)";
    static link = "/drones";

    render() {
        const images = [first, second, third];
        return (<main className={'concrete-page'}>
            <div className={'images'}>
                {images.map(current => (
                    <img src={current} alt={'current'}/>
                ))}
            </div>
            <BackButton/>
        </main>)
    }
}