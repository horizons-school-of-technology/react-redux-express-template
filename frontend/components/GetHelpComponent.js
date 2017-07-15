import React from 'react';
import { Link, Route } from 'react-router-dom';
import RoomListComponent from './RoomListComponent';


class GetHelpComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            grade: '',
            subject: ''
        }
        this.handleChangeGrade = this.handleChangeGrade.bind(this)
        this.handleChangeSubject = this.handleChangeSubject.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeGrade(e){
        this.setState({grade: e.target.value})
    }

    handleChangeSubject(e){
        this.setState({subject: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
    }

    render(){
        return (
            <div className={'flexboxcol'}>
                <h2 style={{flex:1}}>I need help in ....</h2>
                <form onSubmit={this.handleSubmit} className={'flexbox'}>
                    <label style={{flex:1, textAlign: 'center'}}>
                        Select Your Grade
                        <select value={this.state.grade} onChange={this.handleChangeGrade} name="Grade" placeholder='Grade'>
                            <option value="4">Grade 4</option>
                            <option value="5">Grade 5</option>
                            <option value="6">Grade 6</option>
                            <option value="7">Grade 7</option>
                            <option value="8">Grade 8</option>
                            <option value="9">Grade 9</option>
                            <option value="10">Grade 10</option>
                            <option value="11">Grade 11</option>
                            <option value="12">Grade 12</option>
                        </select>
                    </label>
                    <label style={{flex:1, textAlign: 'center'}}>
                        Select a Course
                        <select value={this.state.subject} onChange={this.handleChangeSubject} name="Subject" placeholder='Subject'>
                            <option value="Math">Math</option>
                            <option value="Physics">Physics</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="History">History</option>
                            <option value="English">English</option>
                            <option value="Art">Art</option>
                            <option value="Biology">Biology</option>
                        </select>
                    </label>
                    <Link style={{flex:1}} to="/chatroom">
                        <input type="submit" value="Submit" />
                    </Link>
                </form>
                <RoomListComponent grade={this.state.grade} subject={this.state.subject}/>
            </div>
        );
    }
};


export default GetHelpComponent;
