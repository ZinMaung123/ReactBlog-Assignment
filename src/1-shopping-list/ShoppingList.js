import React from 'react';
import ItemList from './ItemList';
import Header from './Header';
import Item from './Item';
import InputForm from './InputForm';

class ShoppingList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            list : ["Milk", "Coffee", "Chicken"]
        }
    }

    addItem = (item)=>{
        const currentList = this.state.list;
        currentList.push(item);
        this.setState({
            list : currentList
        });
    }

    popItem = ()=>{
        const currentList = this.state.list;
        currentList.pop();
        this.setState({
            list : currentList
        });
    }

    
    render(){
        return (
            <React.Fragment>
                <Header name="Shopping List"/>
                <ItemList>
                {
                    this.state.list.map ((item,index)=>{
                        return <Item text={item} key={index}></Item>
                    })
                }
                </ItemList>
                <InputForm formIsSubmitted={this.addItem} />
                <button onClick={this.popItem}>Pop Item</button>
            </React.Fragment>
        )
    }
}

export default ShoppingList;