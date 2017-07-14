import React from 'react';
import RoomPreviewComponent from './RoomPreviewComponent';

const displayMessage =
    'Room List Component';
// class component
const RoomListComponent = () => {
    return (
        <div>
            {/* title for chat room component */}
            <div style={{color: "red"}}>{displayMessage}</div>

            {/* list of each chatroom component */}
            <div>
                <RoomPreviewComponent />
            </div>
        </div>
    );
};


export default RoomListComponent;
