import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = store=> {
    const {users} = store.app
    return {users}
}

function MainPage({users}) {
    console.log("The users from main page",users)
      const {avatar_url,bio,company,created_at,email,followers,following,location,name,organizations_url,public_repos,twitter_username,hireable,blog}= users
    return (
        <div className='main_page'>
            Hello from main page
        </div>
    )
}

export default connect(mapStateToProps,null) (MainPage)
