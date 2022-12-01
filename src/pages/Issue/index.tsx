import { formatDistanceToNow } from 'date-fns'
import {
  ArrowUpRight,
  Calendar,
  CaretLeft,
  ChatDots,
  GithubLogo,
} from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../api/github'
import {
  IssueBodyContainer,
  IssueHeaderContainer,
  IssuePageContainer,
} from './styles'

interface IIssue {
  title: string
  comments: string
}

interface IUser {
  login: string
}

export const Issue = () => {
  const { issueNumber } = useParams()
  const [issue, setIssue] = useState<IIssue>(Object)
  const [user, setUser] = useState<IUser>(Object)

  const [day, setDay] = useState<number>()
  const [month, setmonth] = useState<number>(Number)
  const [year, setyear] = useState<number>(Number)
  const [hours, sethours] = useState<number>()
  const [min, setmin] = useState<number>()
  const [sec, setsec] = useState<number>()

  useEffect(() => {
    const fetchGitHubIssuePage = async () => {
      try {
        const response = await api.get(
          `/repos/brunomaruya/GitHubBlog/issues/${issueNumber}`,
        )
        setIssue(response.data)
        setUser(response.data.user)
        const date = new Date(response.data.created_at)

        setDay(date.getDate())
        setmonth(date.getMonth())
        setyear(date.getFullYear())
        sethours(date.getHours())
        setmin(date.getMinutes())
        setsec(date.getSeconds())
        console.log(day)
        console.log(issue)
      } catch (error) {
        console.log(error)
      }
    }
    fetchGitHubIssuePage()
  }, [])

  return (
    <IssuePageContainer>
      <IssueHeaderContainer>
        <span>
          <span>
            <CaretLeft /> VOLTAR
          </span>
          <span>
            VER NO GITHUB <ArrowUpRight />
          </span>
        </span>

        <h1>{issue.title}</h1>

        <ul>
          <li>
            <GithubLogo />
            {issue ? user.login : 'not loaded yet'}
          </li>

          <li>
            <Calendar />
            {year > 0
              ? formatDistanceToNow(new Date(year, month, day, hours, min, sec))
              : 'not loaded'}
          </li>

          <li>
            <ChatDots /> {issue.comments}
          </li>
        </ul>
      </IssueHeaderContainer>
      <IssueBodyContainer></IssueBodyContainer>
    </IssuePageContainer>
  )
}
