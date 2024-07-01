// ItemList.js
import React from 'react';
import { Item } from '~/types/components';
import IconComponent from './IconComponent';
interface ItemProps {
    item: Item;
    iseditor: boolean
    handleRemove: (ev: React.MouseEvent<HTMLDivElement>) => void
    handleEditor: (ev: React.MouseEvent<HTMLDivElement>) => void
}

const ItemComponent: React.FC<ItemProps> = ({ item, iseditor, handleRemove, handleEditor }) => {


    return (<>

        <div className="col-sm-3" >
            <div
                className={`xe-widget xe-conversations box2 label-info ${iseditor ? '' : 'box2-hover'}`}
                onClick={() => { window.open(item.url || '#', '_blank'); }}
                data-toggle="tooltip"
                data-placement="bottom"
                title={item.url}
            >
                {
                    iseditor && (<>
                        <div className='editor'> <IconComponent icon='PiNotePencilBold' size={16} onClick={handleEditor}></IconComponent ></div>
                        <div className='remove'> <IconComponent icon='PiMinusLight' size={16} onClick={handleRemove}></IconComponent></div>
                    </>)
                }

                <div className="xe-comment-entry">

                    <a className="xe-user-img" href="#">
                        <img
                            className="lozad img-circle"
                            width="40"
                            src={item.thum}
                            data-loaded="true"
                            alt={item.title}
                        />
                    </a>
                    <div className="xe-comment">

                        <a href="#" className="xe-user-name overflowClip_1">
                            <strong>{item.title}</strong>

                        </a>
                        <p className="overflowClip_2">{item.describe}</p>
                    </div>
                </div>
            </div>
        </div>
    </>);

};

export default ItemComponent;
