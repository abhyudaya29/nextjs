import Link from "next/link"

const about=()=>{
    return (
        <>
        <h1>this is about</h1>
        <button>
            <Link href="/chai" className="flex h-screen p-24 text-center">Click to chai</Link>
        </button>
        </>
    )
}

export default about