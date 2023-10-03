import Container from '@/components/Container'
import Hero from '@/components/home/Hero'
import Posts from '@/components/home/Posts'
import Projects from '@/components/home/Projects'
import SpeedCodeSection from '@/components/home/SpeedCode'
import getPosts from '@/services/post/getPosts'
import getProjects from '@/services/project/getProjects'

export default function Home() {
  const projects = getProjects()
  const posts = getPosts()
  return (
    <Container>
      <Hero />
      <Projects projects={projects} />
      <SpeedCodeSection />
      <Posts posts={posts} />
    </Container>
  )
}
