import { useState } from 'react';
import './chat.scss'

function Chat() {
    
    const [chat, setChat] = useState(true);

  return (
      <div className='chat'>
          <div className='messages'>
              <h1>Messages</h1>
              
              <div className='message'>
                  <img src='https://avatars.githubusercontent.com/u/61962850?s=400&u=5e8ba51a235a1cfc92ea021106dd78894de317eb&v=4' alt='' />
                  <span>Jhon doe</span>
                  <p>hello welcome home...</p>
              </div>

              <div className='message'>
                  <img src='https://avatars.githubusercontent.com/u/61962850?s=400&u=5e8ba51a235a1cfc92ea021106dd78894de317eb&v=4' alt='' />
                  <span>Jhon doe</span>
                  <p>hello welcome home...</p>
              </div>

              <div className='message'>
                  <img src='https://avatars.githubusercontent.com/u/61962850?s=400&u=5e8ba51a235a1cfc92ea021106dd78894de317eb&v=4' alt='' />
                  <span>Jhon doe</span>
                  <p>hello welcome home...</p>
              </div>

              <div className='message'>
                  <img src='https://avatars.githubusercontent.com/u/61962850?s=400&u=5e8ba51a235a1cfc92ea021106dd78894de317eb&v=4' alt='' />
                  <span>Jhon doe</span>
                  <p>hello welcome home...</p>
              </div>

              <div className='message'>
                  <img src='https://avatars.githubusercontent.com/u/61962850?s=400&u=5e8ba51a235a1cfc92ea021106dd78894de317eb&v=4' alt='' />
                  <span>Jhon doe</span>
                  <p>hello welcome home...</p>
              </div>

              <div className='message'>
                  <img src='https://avatars.githubusercontent.com/u/61962850?s=400&u=5e8ba51a235a1cfc92ea021106dd78894de317eb&v=4' alt='' />
                  <span>Jhon doe</span>
                  <p>hello welcome home...</p>
              </div>

              <div className='message'>
                  <img src='https://avatars.githubusercontent.com/u/61962850?s=400&u=5e8ba51a235a1cfc92ea021106dd78894de317eb&v=4' alt='' />
                  <span>Jhon doe</span>
                  <p>hello welcome home...</p>
              </div>

 
          </div>
          {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              John Doe
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Chat