import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import me from '../assets/images/qcCp9QNURpuz15jBSRoKSA_thumb_8f.jpg'
import pic04 from '../assets/images/pic04.jpg'
import projects_background from '../assets/images/projects_background.jpg'
import blog_bg from '../assets/images/blog_bg.jpg'

const HomeIndex  = (props) => (
      <Layout>
        <Helmet
          title="Piotr Rutkowski"
          meta={[
            { name: 'description', content: 'Piotr Rutkowski' },
            {
              name: 'keywords',
              content: 'piotr rutkowski, rutkowksi, city university, developer',
            },
          ]}  >
        </Helmet>
        <Banner />
        <div id="main">
          <section id="one" className="tiles">
            <article
              style={{
                backgroundImage: `url(${me})`,
              }}
            >
              <header className="major">
                <h3>About Me</h3>
                <p>Learn more about me</p>
              </header>
              <Link to="/aboutme" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${projects_background})` }}>
              <header className="major">
                <h3>Projects</h3>
                <p>
                  See and explore the projects I work on
                </p>
              </header>
              <Link to="/myprojects" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${blog_bg})` }}>
              <header className="major">
                <h3>Blog</h3>
                <p>Read what's on my mind</p>
              </header>
              <Link to="/blog" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Art gallery</h3>
                <p>See some of my favourite shots</p>
              </header>
              <Link to="/gallery" className="link primary"></Link>
            </article>
          </section>
        </div>
      </Layout>
    )


export default HomeIndex
