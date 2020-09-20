// this will render a form similar to how we did in login/ signup
import React from 'react';

const SelectItem = () => {

    // I would like to render toggle buttons for the user to click the type of item they wish to drop
    // the items are weapon type, class mod, grenade, sheild, or artifact then confirm to close the modal
    return (
        <>
            <div class="field">
                <div class="control">
                    <div class="select">
                        <select>
                            <option value={null}>Select Weapon Type</option>
                            <option value='Pistol'>Pistol</option>
                            <option value='SMG'>SMG</option>
                            <option value='Shotgun'>Shotgun</option>
                            <option value='AR'>AR</option>
                            <option value='Sniper'>Sniper</option>
                            <option value='RPG'>RPG</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SelectItem;
