// Category.js
import React from 'react';
import { Category, Item } from '~/types/components';
import ItemComponent from './ItemComponent';
import AddItemComponent from './AddItemComponent'
interface CategoryProps {
    category: Category;
    iseditor:boolean;
    handleRemove: (ev: React.MouseEvent<HTMLDivElement>,title:string) => void;
    handleEditor: (ev: React.MouseEvent<HTMLDivElement>,title:string) => void;
}



const CategoryComponent: React.FC<CategoryProps> = ({ category,iseditor,handleEditor,handleRemove }) => {
    const itemList = [];

    for (let i = 0, item: Item; item = category.children[i++];) {
        itemList.push(<ItemComponent key={i} item={item} iseditor={iseditor} handleEditor={(ev)=>{handleEditor(ev,item.id)}} handleRemove={(ev)=>{handleRemove(ev,item.id)}}/>)
    }
    if(iseditor){
        itemList.push(<AddItemComponent  key={"pushitem"} />)
    }
 
    return (
        <>
            <h4 className="text-gray" id={category.title}>
                <i className="linecons-tag"  style={{ marginLeft: '7px' }}></i>
                {category.title}
            </h4>
            <div className="row">
                {
                    itemList
                }

            </div>
            <br />
        </>

    );
};

export default CategoryComponent;
