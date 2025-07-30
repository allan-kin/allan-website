
const YearTag = ({ year, withCircle = false }: { year: string; withCircle?: boolean; }) => {
    return (
        <>
            {withCircle && (
                <span className="absolute top-1/2 -left-[36px] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <span className="block rounded-full w-5 h-5 bg-indigo-300"></span>
                </span>
            )}
            <span className="relative font-medium border-4 bg-indigo-200 transition-all ease-in-out duration-300 hover:bg-indigo-300/80 border-indigo-200 rounded-md px-3 text-white">
                <span className="relative z-2">{year}</span>
            </span>
        </>
    );
};

export { YearTag };