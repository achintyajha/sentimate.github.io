import Link from "next/link";
import { getAllAuthors, getAllPosts } from "../lib/api";

export default function Team({ authors }) {
  return (
    <>
      <h1>Our Team</h1>

      <div class="member">
        <img src="me.jpeg" />
        <h2>Achintya Jha</h2>
        <h3>Founder and Developer</h3>
        <p>
          <a href="https://achintyajha.in">Achintya Jha</a> is a class 12
          student at Ahlcon International School, where he is studying the
          sciences along with Computer Science. He believes that innovation and
          ideas must be made accessible to all at no costs, and his projects are
          aimed at giving back to the society. His experience with technology
          has allowed him to develop solutions at the intersection of tech and
          society. He has single-handedly developed{" "}
          <a href="https://talk.sentimate.org">StuClan</a> and{" "}
          <a href="https://sentimate.org">SentiMate</a> after close to 2 years
          of research and aims to make these platforms available to everyone,
          for which, he is working on scaling this project further.
        </p>
      </div>
      <hr />

      <div class="member">
        <img src="ishaan.jpeg" />
        <h2>Ishaan Shaurya Chamoli</h2>
        <h3>Director of Operations</h3>
        <p>
          <a href="https://www.linkedin.com/in/ishaanchamoli">
            Ishaan Shaurya Chamoli
          </a>{" "}
          is a junior year student at Ridge Valley, India working towards
          combining his interest in Computer Science, especially Artificial
          Intelligence and the limitless possibilities he believes it can
          achieve, with an urge to help society and make as much of an impact as
          possible. His initial interest in solving problems faced across the
          world, including mental health, started as he was exposed to
          discussions and research on global problems combatted by the United
          Nations through over 4 years and 50+ conferences of participation in
          Model UN as a Delegate, Trainer, and Collegiate Chairperson.
          <br />
          Ishaan has also been conferred with Intel’s Global AI Enthusiast Award
          as its International Top 10 and National Winner, been invited to the
          prestigious IIT Kharagpur for presentation, and received a prototyping
          grant by the Indian Government’s Dept. of Science and Technology for
          his multiple technological innovations on societal development.
          <br />
          Fitting this combination of impacting society, research, and
          AI-oriented technological innovation perfectly with the organisation’s
          ideals, Ishaan serves as the Head of all Operations at SentiMate.
        </p>
      </div>
      <hr />

      <div class="member">
        <img src="ziyoda.jpeg" />
        <h2>Ziyoda Alimatova</h2>
        <h3>Mental Health Volunteer & STEM Advocate</h3>
        <p>
          She is a high school student from Uzbekistan, who truly loves bringing
          an impact to the community, seeing them improve, and making them
          happy. She cares for the society and makes sure to always contribute
          as much as she can. Teaching is one among the many initiatives she has
          taken; she recently volunteered as a teacher for middle school
          children. Her interest in STEM subjects draws her towards SentiMate,
          where STEM is leveraged to solve societal problems. She hopes to use
          her knowledge and skills to help those in need.
        </p>
      </div>
      <hr />

      <div class="member">
        <img src="juman.jpeg" />
        <h2>Juman Maher Mohammed Said Alsayeh</h2>
        <h3>Senior Researcher & Contributor</h3>
        <p>
          Juman Alsayeh is a grade 9 student at Almorooj Secondary School,
          Jordan. She is a very organized person and she always makes an effort
          to help the society. Currently, she is learning the sign language.
          Outside of SentiMate, she leads her team at the Junior academy and is
          interested in research, analysis, and problem-solving. She is deeply
          concerned about the problems around mental health and through
          SentiMate, she aims to help in revealing the various problems and
          stigmas in the society and find solutions for them.
        </p>
      </div>
      <hr />

      <div class="member">
        <img class="member-img" src="sabare.jpeg" />
        <h2>Sabare Victor</h2>
        <h3>Head of Outreach & Mental Health Advocate</h3>
        <p>
          Sabare Victor is a grade 12 student at Alliance High School, Kenya,
          where he is studying the sciences along with Computer Science. He is
          one who is passionate about new technologies and how availability of
          vast data makes these possibilities true. His passion for tech has
          seen him through rigorous online Data science and Artificial
          Intelligence courses. He hopes to one day become an A.I. professional,
          dealing mostly with health data and research. His interest in mental
          health is because he believes that data can be used for good to
          transform people's lives and to improve the productivity of this
          generation. He hopes to make people more aware of the importance of
          mental health in this age of data revolution.
        </p>
      </div>
      <hr />
      <div class="member">
        <img src="yiwei.jpeg" />
        <h2>YiWei Hu</h2>
        <h3>Head of Outreach & Mental Health Advocate</h3>
        <p>
          YiWei Hu is a grade 11 student at Shanghai World Foreign Language
          Academy. He's persistent in things that he pursues and he is now
          working on programs to innovate creative ways to utilize sustainable
          energies and help solve the global challenges. He's passionate about
          dealing with global issues about sustainability using
          inter-disciplinary knowledge. He's fond of problem-solving and
          deep-studying academic research to collaborate with others and handle
          these challenges. He's deeply motivated to be a person with profound
          views.
        </p>
      </div>

      <h1 id="writers">Content Writing Department</h1>

      <div className="authors">
        <ul class="author-link">
          {authors.map((author) => (
            author.slug != "none" && (
            <div class="member" key={author.slug}>
              <img src={author.profilePictureUrl} alt={author.name} />
              <li>
                <h2>
                  <Link href={author.permalink}>
                    <a>
                      {author.name} | {author.position}
                    </a>
                  </Link>
                </h2>
              </li>
              <p>{author.content}</p>
              <Link href={author.permalink}>
                <p>
                  For more information, click <a>here.</a>
                </p>
              </Link>
            </div>
            )
          ))}
        </ul>
      </div>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      authors: getAllAuthors().map((author) => ({
        ...author,
        posts: getAllPosts().filter((post) => post.author === author.slug),
      })),
    },
  };
}
