import React from 'react';
import { Link, Route } from 'react-router-dom';
import RoomListComponent from './RoomListComponent';
import Routes from '../routes';



class GetHelpComponent extends React.Component {
    constructor(props){
        super(props);
        console.log('PROPS:');
        const defaultUsername = "Guest"+Math.round(Math.random()*100);

        this.state = {
            socket: io(),
            grade: '',
            subject: '',
            currentRoom: false,
            username: defaultUsername
        }
        this.handleChangeGrade = this.handleChangeGrade.bind(this)
        this.handleChangeSubject = this.handleChangeSubject.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeGrade(e){
        this.setState({grade: e.target.value})
        console.log('grade', this.state.grade, 'subject', this.state.subject)

    }

    handleChangeSubject(e){
        this.setState({subject: e.target.value})
        console.log('grade', this.state.grade, 'subject', this.state.subject)

    }

    handleSubmit(e){
      console.log('grade', this.state.grade, 'subject', this.state.subject)
        this.setState({currentRoom: true})
        e.preventDefault();

        const roomName = this.state.grade + ' ' + this.state.subject;
        // this.state.socket.emit('room', {this.socket.});
    }

    render(){
      console.log('GET HELP: ');

        const linkTo = "/chatroom/"+this.state.grade+"/"+this.state.subject;
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
                    <Link style={{flex:1}} to={linkTo}>
                        <input type="submit" value="Submit" />
                    </Link>
                </form>
                {(this.state.current_room) ?
                  <ChatRoom grade={this.state.grade}
                  subject={this.state.subject}
                  username={this.state.username}
                   />
                  :
                  <RoomListComponent
                    grade={this.state.grade}
                    subject={this.state.subject}/>
                }
            </div>
        );
    }
};


export default GetHelpComponent;
