import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {AiOutlineArrowLeft,AiOutlineMail,AiOutlineTwitter,AiOutlineGlobal} from 'react-icons/ai'
import {CgOrganisation} from 'react-icons/cg'
import {GoLocation} from 'react-icons/go'
import {MdDateRange} from 'react-icons/md'


const mapStateToProps = store=> {
    const {users} = store.app
    return {users}
}

function MainPage({users}) {
      const {avatar_url,bio,created_at,email,followers,following,location,name,company,public_repos,twitter_username,hireable,blog}= users
    return (
        <div className='main_page'>
            <div className="main_page--container">
                <div className="main_page--container__butttons">
                    <Link to='/'><p><AiOutlineArrowLeft className='arrow' /></p></Link>
                    {hireable=== null && <button>Hire Me</button>}
                </div>
                <div className="main_page--container__box">
                    <div className="main_page--container__box--avatar">
                        <img src={avatar_url} alt="avatar" />
                        <h4>{name}</h4>
                        <p>@{twitter_username}</p>
                    </div>
                    <div className="main_page--container__box--repoDetails">
                        <div className="main_page--container__box--repoDetails__folowers">
                            <h5>{followers}</h5>
                            <p>Followers</p>
                        </div>
                        <div className="main_page--container__box--repoDetails__following">
                            <h5>{following}</h5>
                            <p>Following</p>
                        </div>
                        <div className="main_page--container__box--repoDetails__repositories">
                            <h5>{public_repos}</h5>
                            <p>Repositories</p>
                        </div>
                    </div>
                    <div className="main_page--container__moreInfo">
                        <div className="main_page--container__moreInfo--container">
                            <div className="main_page--container__moreInfo--container__email_n_organization">
                                <div className="main_page--email">
                                    <p><AiOutlineMail /> Email</p>
                                    {email ===null ? <p>no_email@gmail.com</p>:<p>{email}</p>}
                                </div>
                                <div className="main_page--organization">
                                    <p><CgOrganisation /> Organization</p>
                                    {company ===null ? <p>no_company</p>:<p>{company}</p>}
            
                                </div>
                            </div>
                            <div className="main_page--container__moreInfo--container__location_n_doj">
                                <div className="main_page--location">
                                    <p><GoLocation /> Location</p>
                                    <p>{location}</p>
                                </div>
                                <div className="main_page--doj">
                                    <p><MdDateRange /> Joined Date</p>
                                    <p>{created_at}</p>
                                </div>
                            </div>
                            <div className="main_page--container__moreInfo--container__twitter_n_website">
                                <div className="main_page--twitter">
                                    <p><AiOutlineTwitter /> Twitter</p>
                                    {twitter_username ===null ? <p>@no_twitter</p>:<p>@{twitter_username}</p>}
                                    
                                </div>
                                <div className="main_page--website">
                                    <p><AiOutlineGlobal /> Website</p>
                                    {blog ===null ? <p>noblog.com</p>:<p>{blog}</p>}
                            
                                </div>
                            </div>
                        </div>
                        <div className="main_page--container__moreInfo--bio">
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps,null) (MainPage)
