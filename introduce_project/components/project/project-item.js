import Image from 'next/image';

export default function ProjectItem({data}){
  
  // 프로젝트 콘텐츠가 들어오면 return에서 뿌려주기 전, 정리할 수 있게
  const title = data.properties.Name.title[0].plain_text // 프로젝트 명
  const github = data.properties.Github.url // 깃허브 주소
  const youtube = data.properties.Youtube.url // 유튜브 주소
  const description = data.properties.Description.rich_text[0].plain_text // 설명
  const imgSrc = data.cover.file?.url || data.cover.external.url // 이미지소스
  // data.cover.file에 데이터가 있다면 url로, 아니라면 data.cover.external.url로!
  const tags = data.properties.Tags.multi_select // 태그
  
  // 작업 기간 : 계산이 필요!
  const start = data.properties.WorkPeriod.date.start // 작업기간 : 시작
  const end = data.properties.WorkPeriod.date.end // 작업기간 : 시작

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split('-');
    const endDateStringArray = end.split('-');

    var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
    var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);

    console.log(`startDate: ${startDate}`)
    console.log(`endDate: ${endDate}`)

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    console.log(`기간 : ${result}`)
    return result;
  }

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt="cover image" //이미지가 없으면 표시될 문구
        width="100%"
        height="60%"
        layout="responsive"
        objectFit="none"
        quality={100}    
      />

      <div className='flex flex-col p-4'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <h3 className='mt-4 text-xl'>{description}</h3>
        <a href={github}>Github 바로가기</a>
        <a href={youtube}>시연영상 보러가기</a>
        <p className='my-1'>
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
        <div className="flex items-start mt-2">
          {tags.map((aTag) => (
            <h1 className="px-2 py-1 mr-2 rounded-md bg-sky=200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}