import React, { Component } from 'react'

const backdropStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding: 50
}

const modalStyle = {
  backgroundColor: '#fff',
  width: 500,
  height: 300,
  marginTop: 100,
  marginLeft: 340,
  padding: 30,
  overflow: 'scroll',
  fontFamily: 'Lato',
  fontSize: 13,
  lineHeight: 1.4
}

const closeStyle = {
  position: 'fixed',
  marginTop: -25,
  marginLeft: 500,
  fontFamily: 'Lato',
  fontSize: 26,
  color: '#3A4047',
  cursor: 'pointer'
}

const titleStyle = {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 5
}

const lineStyle = {
  width: 500,
  height: 2,
  backgroundColor: '#3A4047',
  marginBottom: 5
}

const bodyStyle = {
  textAlign: 'justify'
}

export default class extends Component {
  render() {
    if(!this.props.show) {
      return null
    }
    return (
      <div style={backdropStyle} onClick={this.props.onClose}>
        <div style={modalStyle}>
          <div style={closeStyle} onClick={this.props.onClose}>
            x
          </div>
          <div style={titleStyle}>
            The Dashboard Story
          </div>
          <div style={lineStyle} />
          <div style={bodyStyle}>
            The UP Dashboard went live on January 15, 2018. Its mission was to <b> digitize the UP Diliman campus </b> by making campus-related data more accessible. In the months that followed, Dashboard became home to over a dozen useful and interesting features.
            <br/><br/>
            Today, the Dashboard has its eyes set on making the flow of data a two-way stream. <b> All users are invited to share facts, statistics, and insights they’d like applied to the website</b>. After all, who better to write the living history of UP Diliman than its community?
            <br/><br/>
            You can <a href='https://www.fb.com/updashboard'>connect with us on Facebook</a>, <a href='mailto:updashboard@gmail.com'> email us</a>, or leave your thoughts in the Contact Us tab of our website.
            <br/><br/>
            Enjoy the Dashboard —it’s yours to explore.
            <br/><br/>
            Oh, and welcome home.
          </div>
        </div>
      </div>
    )
  }
}