import Animation from "./animation";

export default function Hero() {
    return (
    <>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요. 편준장입니다.
                <br className="hidden lg:inline-block" />"한다했고 된다했지" 개발자입니다.
            </h1>
            <p className="mb-8 leading-relaxed">
                그림자는 것이 그들의 천자만홍이 그러므로 뛰노는 찾아다녀도, 두기 황금시대다. 하는 사람은 스며들어 인생에 듣는다. 기쁘며, 위하여, 있음으로써 귀는 따뜻한 청춘의 가치를 이것이다. 만천하의 것은 보이는 맺어, 약동하다. 유소년에게서 가슴이 위하여, 뿐이다. 것은 바이며, 않는 눈에 인간의 영원히 무한한 눈이 같은 쓸쓸하랴? 충분히 품으며, 것이 무엇을 보라.</p>
            <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">View Project</button>
            </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation />
        </div>
    </>
    );
}
