import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch'
import ZipResponse from '../components/ZipResponse';
import Zip from '../components/Zip';
import { ReactBingmaps } from 'react-bingmaps';

function AppContainer(props) {

    const [responseData, setResponseData] = useState('');

    const handleZipChange = async (zipValue) => {
        //console.log(`--------- fetchData called zip:${zipValue}`)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&q=${zipValue},nz`)
        const json = await res.json()
        //console.log(json);
        setResponseData(json);
    }

    const clearResponse = () => {
        setResponseData('');
    }

    return (
        <div>
            <div className="row mt-4">
                <div className="col-sm-4"></div>
                <Zip onZipChange={handleZipChange} clearResponse={clearResponse}/>
                <div className="col-sm-4"></div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-2"></div>
                <ZipResponse responseData={responseData} clearResponse={clearResponse}/>
                <div className="col-sm-2"></div>
            </div>    
            <div className="row mt-4">
            	<div className="col-sm-2"></div>
					<ReactBingmaps 
					  bingmapKey = "Aug2Q3KaC6_DMA9-TKaljEYw3IkRIntiV4BcEzBz2OURVgkYSgFpNsHYkp6p5VlE" 
					  center = {[13.0827, 80.2707]}
					  > 
					</ReactBingmaps>
            	<div className="col-sm-2"></div>
            </div>
        </div>
    );
}
  
export default AppContainer
