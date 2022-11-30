import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../api/github'

export const Issue = () => {
  const { issueNumber } = useParams()
  const [issue, setIssue] = useState({})

  useEffect(() => {
    const fetchGitHubIssuePage = async () => {
      try {
        const response = await api.get(
          `/repos/brunomaruya/GitHubBlog/issues/${issueNumber}`,
        )
        console.log(response.data)
        setIssue(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchGitHubIssuePage()
  }, [issue])
  return <div></div>
}
