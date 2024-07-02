// ItemList.js
import React from 'react';
import { PiPlusBold } from 'react-icons/pi';

const AddItemComponent: React.FC = () => {

    return (<>

        <div className="col-sm-3" >
            <div
                className="xe-widget xe-conversations box2 label-info"
                onClick={() => {}}
                data-toggle="tooltip"
                data-placement="bottom"
            >

                <div className="xe-comment" style={{ left: '50%', marginLeft: -10 }}>

                    <a href="#" className="xe-user-name overflowClip_1">
                        <PiPlusBold size={20}></PiPlusBold>

                    </a>

                </div>
            </div>
        </div>
    </>);

};

export default AddItemComponent;
