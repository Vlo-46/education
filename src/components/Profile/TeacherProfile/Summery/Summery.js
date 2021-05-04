import React from 'react'
import History from "./History";
import FundAccount from "./FundAccount";
import CardSlider from "./CardSlider";

const Summery = () => {
    return (
        <div className={'p-4'}>
            <p style={{fontSize: '18px', color: '#061358'}}>Հաշիվ</p>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <CardSlider/>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <FundAccount/>
                </div>
            </div>
            <div className={'table-responsive mt-5'}>
                <p style={{fontSize: '16px', color: '#061358'}}>Փոխանցումներ</p>
                <table className="table table-hover">
                    <tbody>
                    <History/>
                    <History/>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Summery