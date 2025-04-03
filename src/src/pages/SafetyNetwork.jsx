import React from "react";
import Page from "./Page";
import BackButton from "../components/BackButton";

import first from '../static/images/safety_network/1.jpg';
import second from '../static/images/safety_network/2.jpg';
import third from '../static/images/safety_network/3.jpg';
import fourth from '../static/images/safety_network/4.jpg';
import fifth from '../static/images/safety_network/5.jpg';
import sixth from '../static/images/safety_network/6.jpg';
import seventh from '../static/images/safety_network/7.jpg';
import eighth from '../static/images/safety_network/8.jpg';
import ninth from '../static/images/safety_network/9.jpg';


export default class SafetyNetwork extends Page {

    static title = "Безопасный интернет";
    static description = "Правила поведения в виртуальном пространстве";
    static link = "/safety_network";

    render() {

        const images = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth];

        return (<main className={'concrete-page'}>
            <h1>{SafetyNetwork.title}</h1>
            <h2>{SafetyNetwork.description}</h2>
            <div className={'images'}>
                {images.map(current => (
                    <img src={current} alt={'current'}/>
                ))}
            </div>
            <BackButton/>
        </main>);
    }
}