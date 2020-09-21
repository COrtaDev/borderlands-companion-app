import React, { useState, forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, Dropdown, DropdownButton, ButtonGroup, Button } from 'react-bootstrap';
// import { items } from '../modal-assets/items';
import { items } from '../modal-assets/elements';
import { SET_ITEM_NAME } from '../../actions/lootDrops';
import '../styles/selectname.css';

//We define a Custom Toggle as a Dropdown with a Custom Menu
const CustomToggle = forwardRef(({ children, onClick }, ref) => {
    return (
        // The forwardRef is important!!
        // Dropdown needs access to the DOM node in order to position the Menu
        <DropdownButton
            as={ButtonGroup}
            variant='info'
            title="Select Item Name"
            id="bg-nested-dropdown"
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
              &#x25bc;
        </DropdownButton>
    );
});

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');
        console.log(value)
        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);

/*
Here we go about rendering a dropdown with all the names of items with a filter where you can narrow your search
*/
const SelectName = (props) => {
    const dispatch = useDispatch();
    const { itemType } = useSelector(state => state.lootDrops)
    const [itemName, setItemName] = useState(null)
    const [confirmButtonVariant, setConfirmButtonVariant] = useState("secondary")
    const [dropdownButtonVariant, setDropdownButtonVariant] = useState("danger")
    const [title, setTitle] = useState('Select item name')

    const handleSelectName = (e) => {
        if (!itemName) return window.alert("Please Select an Item Name!")
        dispatch({ type: SET_ITEM_NAME, itemName: itemName })
        console.log(itemName)
        props.onHide();
    }

    const handleSelect = (e) => {
        setTitle(e)
        setItemName(e)
        setDropdownButtonVariant('primary')
        setConfirmButtonVariant('success')
    }
    let DropdownItems = [];
    if (itemType) {
        const potentialItems = items.filter((item) => item.type === itemType)
        console.log(potentialItems)
        DropdownItems = potentialItems.map((item) => <Dropdown.Item key={item.id} eventKey={item.name} value={item.name} >{item.name}</Dropdown.Item>)
    } else {
        DropdownItems = items.map((item) => <Dropdown.Item key={item.id} eventKey={item.name} value={item.name} >{item.name}</Dropdown.Item>)
    }
    return (
        <>
            <ButtonGroup vertical>
                <DropdownButton as={ButtonGroup}
                    title={title}
                    variant={dropdownButtonVariant}
                    onSelect={handleSelect}
                    id="bg-nested-dropdown">
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                        Custom toggle
                </Dropdown.Toggle>
                    {/* We will map the Dropdown.Item components for each item in the items array */}
                    <Dropdown.Menu as={CustomMenu}>
                        {DropdownItems}
                    </Dropdown.Menu>
                </DropdownButton>
                <Button id='confirm-item' variant={confirmButtonVariant} onClick={handleSelectName}>Confirm</Button>
            </ButtonGroup>
            <br></br>
        </>
    )
}
export default SelectName;
