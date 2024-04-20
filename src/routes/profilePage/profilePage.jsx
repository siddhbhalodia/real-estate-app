import List from '../../components/list/List'
import './profilePage.scss'

export default function ProfilePage() {
  return (
    <div className='profilePage'>
        <div className='details'>
            <div className="wrapper">
                <div className="title">
                    <h1>User Information</h1>
                    <button>Update profile</button>
                </div>
                <div className="info">
                    <span>Avatar: <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png" alt="" /></span>
                    <span>Username : <b>John Doe</b></span>
                    <span>Username : <b>john@gmail.com</b></span>
                </div>  
                <div className="title">
                    <h1>My List</h1>
                    <button>Create New Post</button>
                </div>
                <List />
                <div className="title">
                    <h1>Saved List</h1>
                </div>
                <List />
            </div>
        </div>
        <div className='chatContainer'>
            <div className="wrapper"></div>
        </div>
    </div>
  )
}
