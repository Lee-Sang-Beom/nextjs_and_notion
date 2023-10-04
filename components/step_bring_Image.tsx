interface Props {
    img_path: string;
    from_user : string;
    from_url: string;
}

// "단계"를 기술하는 내용 중간에 이미지를 넣어 부가적 설명을 덧붙일 경우 사용
export default function StepBringImage(props: Props) {
    return (
        <>
            <div className="py-3 w-full">
                <div className="rounded-lg h-full overflow-hidden">
                    <img alt="content" className="h-full w-full lg:w-2/3 border-2" src={props.img_path} />
                </div>
                <a
                    className="text-sm mt-1 ml-1"
                    title="이동하기"
                    href={props.from_url}
                >
                    {`출처 : ${props.from_user}님의 포스트`}
                </a>
            </div>
        </>
    );
}
