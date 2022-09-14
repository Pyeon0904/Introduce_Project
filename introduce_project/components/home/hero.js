import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
    return (
    <>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-7 font-semibold text-gray-900">안녕하세요. 편준장입니다.</h1>
            <h2 className="title-font sm:text-3xl text-3xl mb-7 font-semibold text-gray-900">방문해주셔서 감사합니다!</h2>
            <p className="mb-8 leading-relaxed">
                저는 "한다했고, 된다했지"를 다짐하고 실천하는 개발자입니다.
            </p>
            <p className="mb-8 leading-relaxed">
                개발한 프로젝트에 관해서는 "Project", 연락을 희망하신다면 "Contact"를 이용해주시면 감사하겠습니다.
            </p>
            <p className="mb-8 leading-relaxed">
                작은 인연도 소중히 여기겠습니다. 감사합니다!
            </p>
            <div className="flex justify-center">
                <Link href="/projects">
                    <a className="btn-project">
                        View Project
                    </a>
                </Link>
            </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation />
        </div>
    </>
    );
}
