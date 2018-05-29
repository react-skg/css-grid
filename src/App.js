import React, {Component} from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="codepen">
        <header className="pen">
          <div className="pen__details">
            <h1>Some Amazing Pen Name</h1>
            <p className="pen__author">A Pen by Pavkout</p>
          </div>
          <button className="button button--dirty">☁️ Save</button>
          <button className="button">️️☁️ Save As Private</button>
          <button className="button">⚙ Settings</button>
          <button className="button">👀 Change View</button>
          <img
            className="pen_image"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/420406/profile/profile-80.jpg?1527519785"
            alt="Pavkout"
            height="44"/>
        </header>
        <section className="code">
          <div className="editor">
            <header className="editor__header">
              <button className="button button--small editor__settings">⚙</button>
              <h3 className="editor__heading">HTML</h3>
              <button className="button button--small editor__settings">⌄</button>
            </header>
            <div className="editor__code">
              <div className="editor__gutter">
                <span className="editor__number">1</span>
              </div>

              <textarea className="editor__input">
                {`<p>Oh Hey There!</p>`}
              </textarea>
            </div>
          </div>
          <div className="editor">
            <header className="editor__header">
              <button className="button button--small editor__settings">⚙</button>
              <h3 className="editor__heading">CSS</h3>
              <button className="button button--small editor__settings">⌄</button>
            </header>
            <div className="editor__code">
              <div className="editor__gutter">
                <span className="editor__number">1</span>
                <span className="editor__number">2</span>
                <span className="editor__number">3</span>
              </div>

              <textarea id="css-editor" className="editor__input">{`.codepen {\n  display: grid;\n}`}
              </textarea>
            </div>

          </div>
          <div className="editor">
            <header className="editor__header">
              <button className="button button--small editor__settings">⚙</button>
              <h3 className="editor__heading">JS</h3>
              <button className="button button--small editor__settings">⌄</button>
            </header>
            <div className="editor__code">
              <div className="editor__gutter">
                <span className="editor__number">1</span>
              </div>
              <textarea className="editor__input">const react_meetup = 'awesome';</textarea>
            </div>

          </div>
        </section>
        <section className="preview">
          <iframe
            title="React Meetup"
            src="https://www.meetup.com/Thessaloniki-ReactJS-Meetup/events/251021038/"
            frameborder="0"></iframe>
        </section>
        <footer className="settings">
          <button className="button button--small button--black">Console</button>
          <button className="button button--small button--black">Assets</button>
          <button className="button button--small button--black">⌘</button>
        </footer>
      </div>
    );
  }
}

export default App;
