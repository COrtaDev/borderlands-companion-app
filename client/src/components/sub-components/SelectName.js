import React, { useState, forwardRef, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, Dropdown, DropdownButton, ButtonGroup, Button } from 'react-bootstrap';
import { SET_ITEM_NAME } from '../../actions/lootDrops';
import { filterNames } from '../../actions/filterNames';
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
        // console.log(value)
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
    const { itemType, itemElement, itemManufacturer } = useSelector(state => state.lootDrops)
    const [itemName, setItemName] = useState(null)
    const [confirmButtonVariant, setConfirmButtonVariant] = useState("secondary")
    const [dropdownButtonVariant, setDropdownButtonVariant] = useState("danger")
    const [title, setTitle] = useState('Select item name')
    const childRef = useRef(null);

    const handleSelectName = (e) => {
        if (!itemName) return window.alert("Please Select an Item Name!")
        dispatch({ type: SET_ITEM_NAME, itemName: itemName })
        // console.log(itemName)
        props.onHide();
    }
    const handleSelect = (e) => {
        setTitle(e)
        setItemName(e)
        setDropdownButtonVariant('primary')
        setConfirmButtonVariant('success')
    }
    // let DropdownItems = [];
    // let potentialLoot = loot;
    // console.log(potentialLoot);
    /*
    Here we have reached a point where we need to filter the possible names based on the state of the app.
    Depending on if the user has made selections in the previous modals, the list of potential names will be limited by:
        - itemType
        - itemManufacturer
        - itemElement
    For now I plan on brute force filtering the list of potential names by checking the state to see if a selection has been made elseware in the app...
    */
    // if (itemType) {
    //     //If the user has made a selection of itemType we aught to filter based on that
    //     const potentialItems = items.filter((item) => item.type === itemType);
    //     // console.log(potentialItems)
    //     DropdownItems = potentialItems.map(
    //         (item) =>
    //             <Dropdown.Item key={item.id} eventKey={item.name} value={item.name} >{item.name}</Dropdown.Item>
    //     );
    // } else {
    //     DropdownItems = items.map(
    //         (item) =>
    //             <Dropdown.Item key={item.id} eventKey={item.name} value={item.name} >{item.name}</Dropdown.Item>
    //     );
    // }
    return (
        <>
            <ButtonGroup vertical>
                <DropdownButton as={ButtonGroup}
                    title={title}
                    variant={dropdownButtonVariant}
                    onSelect={handleSelect}
                    id="bg-nested-dropdown">
                    <Dropdown.Toggle ref={childRef} as={CustomToggle} id="dropdown-custom-components" />
                    {/* We will map the Dropdown.Item components for each item in the items array */}
                    <Dropdown.Menu ref={childRef} as={CustomMenu}>
                        {filterNames(itemType, itemElement, itemManufacturer)}
                    </Dropdown.Menu>
                </DropdownButton>
                <Button id='confirm-item' variant={confirmButtonVariant} onClick={handleSelectName}>Confirm</Button>
            </ButtonGroup>
            <br></br>
        </>
    )
}
export default SelectName;
