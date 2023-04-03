import React from 'react'
import './RepoCard.css'

const RepoCard = ({ repo }) => {
  return (
    <>
      <section className='card'>
        <div className='card_details'>
          <img src={repo.owner.avatar_url} alt='owner avatar' />
          <div>
            <div className='text-lg'>{repo.name}</div>
            <div className='text-md'>Stars: {repo.stargazers_count}</div>
            <div className='text-md'>Watchers: {repo.watchers_count}</div>
          </div>
        </div>
        <div className='card_details_desc'>{repo.description}</div>
      </section>
    </>
  )
}


export default RepoCard;