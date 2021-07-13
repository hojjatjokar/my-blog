import Container from './container'
import Icon from './icon';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-16 flex flex-row lg:flex-row ">
          <div className="flex-1">
            <strong>
              Let's hang out
            </strong>
            <ul className="flex gap-1	">
              <li>
                <a href="https://twitter.com/HojjatDotDev">
                  <Icon name="twitter" />
                </a>
              </li>
              <li>
                <a href="https://github.com/hojjatjokar">
                  <Icon name="github-circled" />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/hojjatjokar">
                  <Icon name="linkedin" />
                </a>
              </li>
              <li>
                <a href="https://youtube.com/hojjatjokar">
                  <Icon name="youtube" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <strong>
              Links
            </strong>
            <ul>
              <li>
                <a href="https://hojjat.dev/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="https://hojjat.dev/about">About me</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <strong>
              Categories
            </strong>
            <ul>
              <li>
                <a href="https://hojjat.dev/critical-thinking">Critical thinking</a>
              </li>
              <li>
                <a href="https://hojjat.dev/domain-knowledge">Domain knowledge</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}
