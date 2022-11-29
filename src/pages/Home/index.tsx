import {
  HomeContainer,
  PostContainer,
  PostsContainer,
  PostsWrapper,
  ProfileContainer,
} from './styles'
import api from '../../api/github'
import { useEffect, useState } from 'react'
import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'

import { formatDistanceToNow } from 'date-fns'

export const Home = () => {
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchGithub = async () => {
      try {
        const response = await api.get('/josepholiveira')
        setUser(response.data)
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    const fetchGithubPosts = async () => {
      try {
        const response = await api.get('/josepholiveira/repos')
        console.log(response.data)
        setPosts(response.data)
        console.log(posts)
      } catch (error) {
        console.log(error)
      }
    }

    fetchGithubPosts()
    fetchGithub()
  }, [])

  return (
    <HomeContainer>
      <ProfileContainer>
        {<img src={user.avatar_url} alt="" />}

        <div>
          <span>
            <h1>{user.name}</h1>
            <span>
              github <ArrowSquareOut color={'#3294f8'} />
            </span>
          </span>

          <p>{user.bio}</p>

          <ul>
            <li>
              <GithubLogo /> {user.login}
            </li>
            <li>
              <Buildings /> {user.company}
            </li>
            <li>
              <Users /> {user.followers} seguidores
            </li>
          </ul>
        </div>
      </ProfileContainer>

      <PostsContainer>
        <div>
          <h1>Publicações</h1>
          <span>{user.public_repos} publicações</span>
        </div>

        <input type="text" placeholder="Buscar conteudo" />

        <PostsWrapper>
          {posts.map((post) => {
            const date = new Date(user.created_at)
            const day = date.getDay()
            const month = date.getMonth()
            const year = date.getFullYear()
            console.log(day)
            console.log(month)
            console.log(year)
            return (
              <PostContainer key={post.id}>
                <div>
                  <h1>{post.name}</h1>
                  <span>{formatDistanceToNow(new Date(year, month, day))}</span>
                </div>

                <p>{post.description ? post.description : 'no description'}</p>
              </PostContainer>
            )
          })}
        </PostsWrapper>
      </PostsContainer>
    </HomeContainer>
  )
}
