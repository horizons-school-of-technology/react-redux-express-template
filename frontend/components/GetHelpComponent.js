import React from 'react';

const displayMessage =
'Get Help Page';

// class component
const GetHelpComponent = () => {
    return (
        <div className={'flexboxcol'}>
            <h2 style={{flex:1}}>I need help in ....</h2>
            <div className={'flexbox'}>
                <div style={{flex:1}}>
                    <select style={{flex:1}} name="Grade" placeholder='Grade'>
                        <option value="grade4">Grade 4</option>
                        <option value="grade5">Grade 5</option>
                        <option value="grade6">Grade 6</option>
                        <option value="grade7">Grade 7</option>
                        <option value="grade8">Grade 8</option>
                        <option value="grade9">Grade 9</option>
                        <option value="grade10">Grade 10</option>
                        <option value="grade11">Grade 11</option>
                        <option value="grade12">Grade 12</option>
                    </select>
                </div>
                <div style={{flex:1}}>
                    <select style={{flex:1}} name="Subject" placeholder='Subject'>
                        <option value="math">Math</option>
                        <option value="physics">Physics</option>
                        <option value="chemistry">Chemistry</option>
                        <option value="history">History</option>
                        <option value="english">English</option>
                        <option value="art">Art</option>
                        <option value="biology">Biology</option>
                    </select>
                </div>
        </div>
    </div>
    );
};


export default GetHelpComponent;
