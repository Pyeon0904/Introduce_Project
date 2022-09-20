import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/project/project-item";

export default function Projects({projects}) {
  
  // 여기에서 찍어보는 정보는 클라이언트에서 확인이 가능!
  // console.log(projectNames);
  
  return(

    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-6">
        <Head>
          <title>준짱 포트폴리오</title>
          <meta name="description" content="과거 내 발자취를 담는다." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="text-4xl font-bold sm:text-6xl">총 프로젝트 : 
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 w-full">
          {projects.results.map((aProject) => (
            // <h1>{aProject.properties.Name.title[0].plain_text}</h1>
          <ProjectItem key={aProject.id} data={aProject}/>
          ))}
        </div>
      </div>
    </Layout>
  )
}

// getStaticProps : 빌드타임에 호출
export async function getStaticProps() {

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization : `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      // 정렬
      sorts: [
        {
          "property": "Name",
          "direction": "ascending" // descending
        }
      ],
      // 페이지 불러오는 수
      page_size: 100
    })
  };
  
  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    const projects = await res.json();

    const projectNames = projects.results.map((aProject) => (
      aProject.properties.Name.title[0].plain_text
    ))

    console.log(`projectNames : ${projectNames}`);

  return {
    props: {projects}, 
  }
}