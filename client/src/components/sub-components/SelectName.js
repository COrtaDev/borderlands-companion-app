import React, { useState, forwardRef } from 'react';
import { FormControl, Dropdown, DropdownButton, ButtonGroup, Button } from 'react-bootstrap';
import { items } from '../modal-assets/items';
import '../styles/selectname.css';

//I need to define a Custom Toggle as a Dropdown with a Custom Menu
const CustomToggle = forwardRef(({ children, onClick }, ref) => {
    return (
        // The forwardRef is important!!
        // Dropdown needs access to the DOM node in order to position the Menu
        <DropdownButton
            as={ButtonGroup}
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
                // style={{ paddingTop: '0px' }}
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
const SelectName = (props) => {
    const [confirmButtonVariant, setConfirmButtonVariant] = useState("secondary")
    const [title, setTitle] = useState('Select item name')
    const handleSelectItem = (e) => {
        // if (!itemType) return window.alert("Please Select an Item Type!")
        // dispatch({ type: SET_ITEM_TYPE, itemType: itemType })
        // console.log(itemType)
        console.log('I want to confirm this is happening')
        props.onHide();
    }
    const DrowdownItems = items.map((item) => <Dropdown.Item key={item.id} eventKey={item.id} value={item.name} >{item.name}</Dropdown.Item>)
    return (
        <>
            <ButtonGroup vertical>
                <DropdownButton as={ButtonGroup}
                    title={title}
                    id="bg-nested-dropdown">
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                        Custom toggle
                </Dropdown.Toggle>
                    {/* We will map the Dropdown.Item components for each item in the items array */}
                    <Dropdown.Menu as={CustomMenu}>
                        {DrowdownItems}
                        {/* <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>Orange</Dropdown.Item>
                        <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item> */}
                    </Dropdown.Menu>
                </DropdownButton>
                <Button id='confirm-item' variant={confirmButtonVariant} onClick={handleSelectItem}>Confirm</Button>
            </ButtonGroup>
            <br></br>
        </>
    )
}
export default SelectName;
